import React from "react";

interface ResizeHandleProps {
  onDrag: (e: React.PointerEvent<HTMLDivElement>) => void;
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({ onDrag }) => {
  return (
    <div
      className="size-2 bg-slate-50 cursor-ns-resize absolute top-0 border border-slate-600 -translate-y-1/2 left-1/2 -translate-x-1/2"
      onPointerDown={onDrag}
    />
  );
};

export default ResizeHandle;
