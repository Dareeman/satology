/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const SecondaryButton = ({ size, state, className, text = "Swap", link = "#" }) => {
  return (
    <Link to={link}>
      <div
        className={`btn-secondary inline-flex items-center gap-[8px] px-[24px] py-[12px] rounded-[13px] justify-center relative ${state === "active"
            ? "[background:linear-gradient(180deg,rgb(177.44,177.44,177.44)_0%,rgb(255,255,255)_100%)]"
            : ""
          } ${state === "hover" ? "shadow-[0px_0px_12px_#ffffff80]" : ""} ${state === "hover" ? "bg-[#ffffff]" : ""
          } ${className}`}
      >
        <div
          className={`w-fit relative whitespace-nowrap ${size === "s" ? "font-button-secondary" : "[font-family:'Poppins',Helvetica]"
            } ${state === "hover" ? "[background:linear-gradient(180deg,rgb(29,29,30)_0%,rgb(30,30,34)_100%)]" : ""} ${state === "hover" ? "bg-clip-text" : ""
            } ${size === "s" ? "tracking-[var(--button-secondary-letter-spacing)]" : "tracking-[0]"} ${size === "s" ? "[font-style:var(--button-secondary-font-style)]" : ""
            } ${size === "m"
              ? "text-[18px]"
              : size === "l"
                ? "text-[22px]"
                : "text-[length:var(--button-secondary-font-size)]"
            } ${state === "hover" ? "text-transparent" : state === "active" ? "text-black" : "text-white"} ${state === "hover" ? "[-webkit-background-clip:text]" : ""
            } ${size === "s" ? "font-[number:var(--button-secondary-font-weight)]" : "font-bold"} ${size === "m"
              ? "leading-[27px]"
              : size === "l"
                ? "leading-[33px]"
                : "leading-[var(--button-secondary-line-height)]"
            } ${state === "hover" ? "[text-fill-color:transparent]" : ""} ${state === "hover" ? "[-webkit-text-fill-color:transparent]" : ""
            }`}
        >
          {text}
        </div>
      </div>
    </Link>
  );
};

SecondaryButton.propTypes = {
  size: PropTypes.oneOf(["l", "m", "s"]),
  state: PropTypes.oneOf(["default", "hover", "active", "normal"]),
  text: PropTypes.string,
  link: PropTypes.string,
};
