"use client";

import useModal from "@/store/useModal";

const useModalFeatures = () => {
  const { selected, setSelected } = useModal((state: any) => ({
    selected: state.selected,
    setSelected: state.setSelected,
  }));

  return {
    selected,
    setSelected,
  };
};

export { useModalFeatures };
