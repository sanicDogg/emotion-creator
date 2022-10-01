import s from "./emoji.module.css";

export const Emoji = ({content, selectEmoji, selected}) => {


  return (
    <div className={`${s.emoji} ${selected ? s.selected : null}`}
    onClick={() => selectEmoji(content)}>
      {content}
    </div>
  )
}