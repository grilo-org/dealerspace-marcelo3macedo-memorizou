"use client";

import useNotification from "@/store/useNotification";

const useMessageNotification = () => {
  const MESSAGE_TIMEOUT = 3000;
  const { type, message, setType, setMessage } = useNotification(
    (state: any) => ({
      type: state.type,
      message: state.message,
      setType: state.setType,
      setMessage: state.setMessage,
    }),
  );

  const alertHandler = (type: string, message: string) => {
    setType(type);
    setMessage(message);

    setTimeout(() => {
      setType("");
      setMessage("");
    }, MESSAGE_TIMEOUT);
  };

  return {
    type,
    message,
    alertHandler,
  };
};

export { useMessageNotification };
