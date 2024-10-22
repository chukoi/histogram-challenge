import { useContext } from "react";
import { HistogramContext } from "../provider/HistogramProvider";

const useHistogramHook = () => {
  const {
    barValues,
    maxGraphValue,
    setMaxGraphValue,
    readOnlyMode,
    toggleReadOnlyMode,
    handleResize,
    indicatorData,
  } = useContext(HistogramContext);
  return {
    barValues,
    maxGraphValue,
    setMaxGraphValue,
    readOnlyMode,
    toggleReadOnlyMode,
    handleResize,
    indicatorData,
  };
};

export default useHistogramHook;
