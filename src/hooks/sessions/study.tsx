import { useRouter } from "next/navigation";

import { update } from "@/api/session";
import { Card } from "@/interfaces/card";
import useSession from "@/store/useSession";
import useStudy from "@/store/useStudy";

const useStudySession = () => {
  const router = useRouter();
  const { session } = useSession((state: any) => ({
    session: state.session,
  }));

  const { options, flip, setFlip, index, setIndex, responses, setResponses } =
    useStudy((state: any) => ({
      options: state.options,
      index: state.index,
      setIndex: state.setIndex,
      flip: state.flip,
      setFlip: state.setFlip,
      responses: state.responses,
      setResponses: state.setResponses,
    }));

  const changeFlip = () => {
    setFlip(!flip);
  };

  const selectOption = (id: string) => {
    const timestamp = new Date().getTime();
    responses.push({
      id,
      timestamp,
    });
    setResponses(responses);

    if (responses.length === session.sessionCards.length) {
      return finishStudy();
    }

    setFlip(false);
    setIndex(index + 1);
  };

  const finishStudy = async () => {
    const updateSession = {
      cards: responses.map((response: any, index: number) => {
        return {
          id: session.sessionCards[index].card.id,
          difficultyId: response.id,
          answerAt: response.timestamp,
        };
      }),
    };

    await update(session.id, updateSession);
    router.push(`/user/sessions/completed`);
  };

  const getCard = (): Card => {
    return session.sessionCards[index]
      ? session.sessionCards[index].card
      : null;
  };

  return {
    index,
    flip,
    options,
    changeFlip,
    selectOption,
    getCard,
  };
};

export { useStudySession };
