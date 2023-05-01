import React, { forwardRef, useImperativeHandle, useState } from "react";

const ReadMore = forwardRef(({}, ref) => {
  const [shouldShow, setShouldShow] = useState(false);

  function changeHelperTextOpacity() {
    setShouldShow(!shouldShow);
  }

  useImperativeHandle(ref, () => {
    return {
      changeHelperTextOpacity,
    };
  });

  return (
    <div className="flex justify-end items-end row-span-1 col-end-4 col-span-2 text-right overflow-hidden">
      <p
        className={`mr-3 font-normal duration-300 ${
          shouldShow ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        De scroll para ver mais...
      </p>
    </div>
  );
});

ReadMore.displayName = "ReadMore";
export default ReadMore;
