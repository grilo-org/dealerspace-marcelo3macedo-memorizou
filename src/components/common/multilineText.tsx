import React from "react";

import PropTypes from "prop-types";

import { MultilineTextProps } from "./props/multilineText";

const MultilineText = ({ children }: MultilineTextProps) => {
  const lines = children.split("|");

  return (
    <div>
      {lines.map((line) => (
        <p key={line} className="text-md md:text-md py-1">
          {line}
        </p>
      ))}
    </div>
  );
};

MultilineText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MultilineText;
