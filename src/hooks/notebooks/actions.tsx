"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useModalFeatures } from "../modals";

import { create } from "@/api/session";
import { mountSessionCard } from "@/helpers/sessions/generate";
import useNotebook from "@/store/useNotebook";

const useActionsNotebook = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const { editing } = useNotebook((state: any) => ({
    editing: state.editing,
  }));
  const { setSelected } = useModalFeatures();

  useEffect(() => {
    setSelected("");
  }, [setSelected]);

  const studyAction = async () => {
    const { id } = editing || {};
    const sessionCard = await mountSessionCard(id);
    const sessionCardCreated = await create(sessionCard);
    router.push(`/user/sessions/index/${sessionCardCreated.id}`);
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
