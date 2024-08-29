import { getCards } from "@/api/notebooks";

async function mountSessionCard(notebookId: string, limit: number = 15) {
  const notebookCards = await getCards(notebookId, limit);
  const { userId, sections } = notebookCards || {};
  const cardIds = getCardsFromSection(sections);

  return {
    notebookId,
    userId,
    cardIds,
  };
}

function getCardsFromSection(sections: any) {
  const cards = [];

  for (const section of sections) {
    for (const card of section.cards) {
      cards.push(card);
    }
  }

  return cards.map((x) => x.id);
}

export { mountSessionCard };
