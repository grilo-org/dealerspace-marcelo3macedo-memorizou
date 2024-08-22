import React from "react";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

import { ButtonActionProps } from "./props/buttonAction";

const ButtonAction = ({ children, onclick }: ButtonActionProps) => {
  return (
    <button
      className="hover:opacity-80 hover:cursor-pointer my-2 border-slate-200 border-2 py-2 px-4 focus:outline-none focus:bg-slate-50 focus:ring-2 rounded-md"
      onClick={onclick}
    >
      <div className="flex justify-center items-center">
        <PlusCircleIcon className="w-10 h-10 text-orange-400 mr-2" />
        <p>{children}</p>
      </div>
    </button>
  );
};

ButtonAction.propTypes = {
  children: PropTypes.node.isRequired,
  onclick: PropTypes.any,
};

export default ButtonAction;
