import YAxisMaximumValueInput from "./YAxisMaximumValueInput";
import Histogram from "./Histogram";
import ReadOnlyToggle from "./ReadOnlyToggle";
import { HistogramProvider } from "../provider/HistogramProvider.tsx";

const SolutionComponent = () => {
  return (
    <HistogramProvider>
      <div className="flex flex-col items-center gap-16">
        <YAxisMaximumValueInput />
        <Histogram className="flex-1" />
        <ReadOnlyToggle />
      </div>
    </HistogramProvider>
  );
};

export default SolutionComponent;
