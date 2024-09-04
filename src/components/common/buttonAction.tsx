import React from "react";

import { PlusCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

import { ButtonActionProps } from "./props/buttonAction";

const ButtonAction = ({ children, onclick }: ButtonActionProps) => {
  return (
    <button
      className="inline-block shrink-0 rounded-md border text-md border-slate-900 bg-slate-900 px-8 py-3 font-medium text-white transition hover:text-blue-100 focus:outline-none focus:ring active:text-blue-500"
      onClick={onclick}
    >
      <div className="flex justify-center items-center">
        <PlusCircleIcon className="w-10 h-10 text-white mr-2" />
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
