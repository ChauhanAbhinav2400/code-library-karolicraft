import React from "react";
import CodeDisplay from "./CodeDisplay";
import { useLocation } from "react-router-dom";
function Snippet() {
  const location = useLocation();
  const item = location.state?.item;
  return (
    <div className="flex flex-col  h-[90%] overflow-auto w-[95%] m-5">
      <div className="py-3 pl-4  font-bold text-2xl shadow-md box-border">
        {item?.title}
      </div>
      <div className="flex w-full flex-col justify-center gap-5">
        <div className=" w-96 relative p-3 mt-5 bg-gray-100">
          <img
            alt="Snippet Image"
            className=" bg-cover h-96 w-full aspect-square object-cover"
            src={item.image}
          />
        </div>
        <div className="border w-full bg-gray-200 row-span-2">
          <CodeDisplay code={item?.code} />
        </div>
        <div className="border w-full bg-gray-100 py-2 h-32 px-5">
          {item?.description}
        </div>
      </div>
    </div>
  );
}

export default Snippet;
