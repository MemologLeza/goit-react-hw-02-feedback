import styled from './Statistic.module.css';
const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={styled.list}>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
};
export default Statistic;
