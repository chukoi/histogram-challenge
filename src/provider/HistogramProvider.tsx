import React, { createContext, useRef, useState } from "react";
import {
  INITIAL_BAR_VALUES,
  INITIAL_HISTOGRAM_SIZE,
} from "../constants/config";

const PIXEL_DRAG_SIZE = 30; // Delta in number of pixels to change the value of bar

interface IHistogramProvider {
  maxGraphValue: number;
  setMaxGraphValue: (newValue: number) => void;
  barValues: number[];
  readOnlyMode: boolean;
  toggleReadOnlyMode: () => void;
  handleResize: (
    e: React.PointerEvent<HTMLDivElement>,
    value: number,
    barIndex: number
  ) => void;
  indicatorData: {
    value: number;
    height: number;
  } | null;
}

export const HistogramContext = createContext<IHistogramProvider>({
  maxGraphValue: INITIAL_HISTOGRAM_SIZE,
  setMaxGraphValue: (_newValue: number): void => {},
  barValues: [],
  readOnlyMode: false,
  toggleReadOnlyMode: (): void => {},
  handleResize: (
    _e: React.PointerEvent<HTMLDivElement>,
    _value: number,
    _barIndex: number
  ): void => {},
  indicatorData: null,
});

export const HistogramProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [maxGraphValue, setMaxGraphValue] = useState<number>(
    INITIAL_HISTOGRAM_SIZE
  );
  const [barValues, setBarValues] = useState<number[]>(INITIAL_BAR_VALUES);
  const [readOnlyMode, setReadOnlyMode] = useState<boolean>(false);
  const [indicatorData, setIndicatorData] = useState<{
    value: number;
    height: number;
  } | null>(null);

  const clientY = useRef<number>(0);

  const handleResize = (
    e: React.PointerEvent<HTMLDivElement>,
    value: number,
    barIndex: number
  ): void => {
    e.preventDefault();
    clientY.current = e.clientY;

    const handleDragMove = (moveEvent: PointerEvent) => {
      const deltaY = clientY.current - moveEvent.clientY;
      const stepAdjustment = Math.round(deltaY / PIXEL_DRAG_SIZE);
      const newValue = Math.max(0, value + stepAdjustment);
      if (newValue > maxGraphValue) return;
      setIndicatorData({
        value: newValue,
        height: moveEvent.clientY - 484 / 2,
      });
      setBarValue(barIndex, newValue);
    };

    const handleDragEnd = () => {
      setIndicatorData(null);
      document.removeEventListener("pointermove", handleDragMove);
      document.removeEventListener("pointerup", handleDragEnd);
    };

    document.addEventListener("pointermove", handleDragMove);
    document.addEventListener("pointerup", handleDragEnd);
  };

  const setBarValue = (barIndex: number, newValue: number) => {
    const newBarValues = [...barValues];
    newBarValues[barIndex] = newValue;
    setBarValues(newBarValues);
  };

  const setGraphValue = (newValue: number) => {
    const maxBarValue = Math.max(...barValues);

    if (newValue < maxBarValue) return;
  };

  const toggleReadOnlyMode = () => {
    setReadOnlyMode((prev) => !prev);
  };

  return (
    <HistogramContext.Provider
      value={{
        maxGraphValue,
        setMaxGraphValue: setGraphValue,
        barValues,
        readOnlyMode,
        toggleReadOnlyMode,
        handleResize,
        indicatorData,
      }}
    >
      {children}
    </HistogramContext.Provider>
  );
};
