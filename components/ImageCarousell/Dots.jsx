import React from "react";
import classNames from "classnames";

const Dots = ({ itemsLength, selectedIndex }) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-2 w-2 rounded-full transition-all duration-300 bg-indigo-400": true,
              // Tune down the opacity if the slide is not selected
              "opacity-50": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default Dots;
