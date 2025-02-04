import React from "react";
import { BsCheck } from "react-icons/bs";
import cn from "classnames";

const Check = ({ isComplited }) => {
  return (
    <div
      className={cn(
        "border-2 rounded-lg border-pink-400 w-7 h-7 mr-3 flex items-center justify-center",
        { "bg-pink-400": isComplited }
      )}
    >
      {isComplited && <BsCheck size={24} className="text-gray-900" />}
    </div>
  );
};

export default Check;
