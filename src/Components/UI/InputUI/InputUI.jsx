export const InputUI = ({suggestion, nameId, nameText}) => {
  return (
    <input name={nameText} placeholder={suggestion} type="text" id={nameId} required />
  )
}
