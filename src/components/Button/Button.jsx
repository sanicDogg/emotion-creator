import s from "./button.module.css";

export const Button = ({text, clickHandler}) => {
  return <div className={s.button} onClick={clickHandler}>{text}</div>
}