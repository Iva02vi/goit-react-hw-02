import css from "../Options/Options.module.css";

const Options = ({ onUpdate, onReset, total }) => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <button onClick={() => onUpdate("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => onUpdate("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => onUpdate("bad")}>Bad</button>
        </li>
        {total !== 0 && (
          <li>
            <button onClick={onReset}>Reset</button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Options;
