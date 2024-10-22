interface IndicatorProps {
  value: number;
  height: number;
}

const Indicator = ({ value, height }: IndicatorProps) => {
  return (
    <div
      className="absolute w-full h-full top-0 left-0"
      style={{ top: height }}
    >
      <span className="absolute w-full h-[2px] border border-black border-dashed" />
      <span className="absolute -right-5 -top-3.5">{value}</span>
    </div>
  );
};

export default Indicator;
