"use client";

import { useEffect, useState } from "react";

import { useModalFeatures } from "../modals";

const useActionsNotebook = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setSelected } = useModalFeatures();

  useEffect(() => {
    setSelected("");
  }, [setSelected]);

  const studyAction = async () => {
    console.log("TODO: study action");
  };

  const shareAction = async () => {
    console.log("TODO: share action");
  };

  const editAction = async () => {
    setSelected("edit-notebook");
    setShowMenu(false);
  };

  const removeAction = async () => {
    setSelected("remove-notebook");
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
