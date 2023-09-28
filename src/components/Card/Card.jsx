/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Card = ({
                       className,
                       satoshiRegular = "/img/satoshi-regular-elipse-1.svg",
                       headingClassName,
                       textClassName,
                       text = "LAUNCHPAD",
                       description
                     }) => {
  return (
    <div className={`flex flex-col w-[434px] items-center gap-[32px] px-[40px] py-0 relative card-style ${className}`}>
      <div className="relative w-[200px] h-[200px] bg-[#423a5a5c] rounded-[99.25px] blur-[64.73px] card-style-circle">
        <div className="relative w-[168px] h-[168px] top-[16px] left-[16px]">
          <div className="absolute w-[168px] h-[168px] top-0 left-0">
            <div className="relative h-[168px]">
              <div className="absolute w-[168px] h-[168px] top-0 left-0">
                <div className="relative w-[173px] h-[173px] top-[-3px] left-[-3px] rounded-[86.72px]">
                  <div
                    className="absolute w-[173px] h-[173px] top-0 left-0 rounded-[86.72px] border-[5.19px] border-solid border-main blur-[18.16px] opacity-[0.12]"/>
                  <div
                    className="absolute w-[117px] h-[117px] top-[28px] left-[28px] rounded-[58.64px] border-[5.19px] border-solid border-main blur-[18.16px] opacity-[0.12]"/>
                </div>
              </div>
              <div className="absolute w-[168px] h-[168px] top-0 left-0">
                <div className="relative h-[168px] rounded-[84.13px]">
                  <div
                    className="absolute w-[168px] h-[168px] top-0 left-0 rounded-[84.13px] border-[2.86px] border-solid border-main"/>
                  <div
                    className="absolute w-[123px] h-[123px] top-[22px] left-[23px] rounded-[61.44px] border-[2.86px] border-solid border-main"/>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute w-[104px] h-[104px] top-[32px] left-[33px]"
            alt="Satoshi regular"
            src={satoshiRegular}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[24px] w-full flex-[0_0_auto] relative self-stretch">
        <div
          className={`relative w-fit mt-[-1.00px] font-desktop-heading-3 font-[number:var(--desktop-heading-3-font-weight)] text-white text-[length:var(--desktop-heading-3-font-size)] text-center tracking-[var(--desktop-heading-3-letter-spacing)] leading-[var(--desktop-heading-3-line-height)] whitespace-nowrap [font-style:var(--desktop-heading-3-font-style)] ${headingClassName}`}
        >
          {text}
        </div>
        <p
          className={`font-desktop-body font-[number:var(--desktop-body-font-weight)] text-white text-[length:var(--desktop-body-font-size)] text-center tracking-[var(--desktop-body-letter-spacing)] leading-[var(--desktop-body-line-height)] relative self-stretch [font-style:var(--desktop-body-font-style)] ${textClassName}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  satoshiRegular: PropTypes.string,
  text: PropTypes.string,
};
