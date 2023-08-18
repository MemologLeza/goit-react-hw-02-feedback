import styled from './Notification.module.css';
const Notification = ({ message }) => {
  return <p className={styled.message}>{message}</p>;
};
export default Notification;
