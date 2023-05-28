export const ProgressBar = ({ percentage }) => {
  const style = {
    width: percentage + "%"
  };

  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar" style={style}>
          {percentage}%
        </div>
      </div>
    </>
  );
};
