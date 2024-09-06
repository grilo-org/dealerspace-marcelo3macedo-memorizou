import React from "react";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

import { ButtonActionProps } from "./props/buttonAction";

const ButtonAction = ({ children, onclick }: ButtonActionProps) => {
  return (
    <button
      className="hover:opacity-80 hover:cursor-pointer overflow-hidden"
      onClick={onclick}
    >
      <div className="px-8 py-2 flex items-center bg-gray-400 rounded-xl">
        <PlusCircleIcon className="w-6 h-6 text-white" />
        <div className="flex px-4">
          <p className="text-white font-bold text-sm">{children}</p>
        </div>
      </div>
    </button>
  );
};

ButtonAction.propTypes = {
  children: PropTypes.node.isRequired,
  onclick: PropTypes.any,
};

export default ButtonAction;
