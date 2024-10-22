import useHistogramHook from "../hooks/useHistogramHook";

const ReadOnlyToggle = () => {
  const { readOnlyMode, toggleReadOnlyMode } = useHistogramHook();
  return (
    <div>
      <input
        type="checkbox"
        checked={readOnlyMode}
        onChange={toggleReadOnlyMode}
        className="cursor-pointer mr-2"
        id="read-only-toggle"
        name="read-only-toggle"
      />
      <label htmlFor="read-only-toggle">Read Only Mode</label>
    </div>
  );
};

export default ReadOnlyToggle;
