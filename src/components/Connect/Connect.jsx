/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Connect = ({ size, state, className, handleWallet }) => {
    return (
        <div
            onClick={handleWallet}
            className={`btn-primary cursor-pointer w-[202px] flex items-center gap-[8px]  px-[24px] py-[12px] rounded-[19px] justify-center relative ${["default", "normal"].includes(state) ? "bg-main" : ""} ${className}`}
        >
            <div
                className={`cursor-pointer w-fit relative whitespace-nowrap ${size === "s" ? "font-button" : "[font-family:'Poppins',Helvetica]"
                    } ${size === "s" ? "tracking-[var(--button-letter-spacing)]" : "tracking-[0]"} ${size === "s" ? "[font-style:var(--button-font-style)]" : ""
                    } ${size === "m" ? "text-[26px]" : size === "l" ? "text-[30px]" : "text-[length:var(--button-font-size)]"} ${size === "s" ? "font-[number:var(--button-font-weight)]" : "font-bold"
                    } ${size === "m" ? "leading-[39px]" : size === "l" ? "leading-[45px]" : "leading-[var(--button-line-height)]"}`}
            >
                LET'S DO THIS!
            </div>
        </div>
    );
};

Connect.propTypes = {
    size: PropTypes.oneOf(["l", "m", "s"]),
    state: PropTypes.oneOf(["default", "hover", "active", "normal"]),
    handleWallet: PropTypes.func,
};
