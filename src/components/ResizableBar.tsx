import classNames from "classnames";
import { barColorClasses } from "../constants/barColors";
import React from "react";
import ResizeHandle from "./ResizeHandle";
import { MAX_HISTOGRAM_VALUE } from "../constants/config";
import useHistogramHook from "../hooks/useHistogramHook";

interface ResizableBarProps {
  value: number;
  maxValue?: number;
  barIndex: number;
  handleResize: (
    e: React.PointerEvent<HTMLDivElement>,
    value: number,
    barIndex: number
  ) => void;
}

const ResizableBar: React.FC<ResizableBarProps> = ({
  value,
  maxValue = MAX_HISTOGRAM_VALUE,
  barIndex,
  handleResize,
}) => {
  const { readOnlyMode } = useHistogramHook();

  return (
    <div
      className={classNames(
        "min-w-20 text-center font-bold border border-b-0 border-slate-600 relative rounded-t-sm z-20",
        barColorClasses[barIndex]
      )}
      style={{ height: `${(value / maxValue) * 40}vh` }}
    >
      {value}
      {!readOnlyMode && (
        <ResizeHandle onDrag={(e) => handleResize(e, value, barIndex)} />
      )}
    </div>
  );
};

export default ResizableBar;
