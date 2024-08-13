"use client";

import { useState } from "react";

const useActionsNotebook = () => {
  const [showMenu, setShowMenu] = useState(false);

  const studyAction = async () => {
    console.log("TODO: study action");
  };

  const shareAction = async () => {
    console.log("TODO: share action");
  };

  const editAction = async () => {
    console.log("TODO: edit action");
    setShowMenu(false);
  };

  const removeAction = async () => {
    console.log("TODO: remove action");
    setShowMenu(false);
  };

  return {
    showMenu,
    setShowMenu,
    shareAction,
    studyAction,
    editAction,
    removeAction,
  };
};

export { useActionsNotebook };
