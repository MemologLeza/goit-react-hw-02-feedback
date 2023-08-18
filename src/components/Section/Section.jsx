import styled from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={styled.section}>
      <p className={styled.title}>{title}</p>
      {children}
    </section>
  );
};
export default Section;
