import {
  MAX_HISTOGRAM_VALUE,
  MIN_HISTOGRAM_VALUE,
  STEP_SIZE,
} from "../constants/config";
import useHistogramHook from "../hooks/useHistogramHook";

const YAxisMaximumValueInput = () => {
  const { maxGraphValue, setMaxGraphValue, readOnlyMode } = useHistogramHook();
  return (
    <div className="flex gap-4 items-center">
      <label htmlFor="y-axis-maximum">Y-Axis Maximum</label>
      <input
        id="y-axis-maximum"
        type="number"
        className="border min-w-32 p-1 rounded"
        name="y-axis-maximum"
        min={MIN_HISTOGRAM_VALUE}
        max={MAX_HISTOGRAM_VALUE}
        value={maxGraphValue}
        step={STEP_SIZE}
        onChange={(e) => setMaxGraphValue(Number(e.target.value))}
        disabled={readOnlyMode}
      />
    </div>
  );
};

export default YAxisMaximumValueInput;
