export const TextAreaUI = ({style, nameTA='message', maxCharacters=500, suggestion='Insert your message'}) => {
  return (
    <textarea className={style} name={nameTA} maxLength={maxCharacters} placeholder={suggestion} required id="" cols="30" rows="10"></textarea>
  )
}
