import css from "./Feddback.module.css";

const Feedback = () => {
  return (
    <div>
      <ul className="listFeedback">
        <li className="feedback">Good:{}</li>
        <li className="feedback">Natural:{}</li>
        <li className="feedback">Bad:{}</li>
        <li className="feedback">Total:{}</li>
        <li className="feedback">Positive:{}</li>
      </ul>
    </div>
  );
};

export default Feedback;
