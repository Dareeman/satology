/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DiscordWhite = ({ className, discordClassName, combinedShape = "/static/img/combined-shape-1.svg" }) => {
  return (
    <a href="https://discord.gg/xCBQwep3" className={`icon-social w-[40px] h-[40px] ${className}`}>
      <div className={`relative h-[40px] bg-[url(/static/img/combined-shape.svg)] bg-[100%_100%] ${discordClassName}`}>
        <img className="absolute w-[14px] h-[10px] top-[14px] left-[14px]" alt="Join Us!" src={combinedShape} />
      </div>
    </a>
  );
};

DiscordWhite.propTypes = {
  combinedShape: PropTypes.string,
};
