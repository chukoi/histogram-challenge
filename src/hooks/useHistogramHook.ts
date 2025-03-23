import { useContext } from "react";
import { HistogramContext } from "../provider/HistogramProvider";

const useHistogramHook = () => {
  const {
    setGraphHeight,
    barValues,
    maxGraphValue,
    setMaxGraphValue,
    readOnlyMode,
    toggleReadOnlyMode,
    handleResize,
    indicatorData,
    graphRef,
  } = useContext(HistogramContext);
  return {
    setGraphHeight,
    barValues,
    maxGraphValue,
    setMaxGraphValue,
    readOnlyMode,
    toggleReadOnlyMode,
    handleResize,
    indicatorData,
    graphRef,
  };
};

export default useHistogramHook;
