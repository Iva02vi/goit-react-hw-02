import css from "../Description/Description.module.css";

const Description = () => {
  return (
    <>
      <h1 className={css.header}> Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
