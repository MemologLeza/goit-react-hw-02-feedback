import { nanoid } from 'nanoid';
import styled from './Feedback.module.css';
const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styled.buttons}>
      {options.map(key => (
        <button
          type="button"
          className={styled.button}
          key={nanoid()}
          onClick={e => onLeaveFeedback(e)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
export default Feedback;
