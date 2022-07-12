const InputComponent = (props) => {
  const {label, placeholder, id, type, pattern, value, onChange } = props
  return(
    <div>
      <label>{label}</label> <br/>
      <input id={id} placeholder={placeholder} type={type ? type: "text"} pattern={pattern} value={value} onChange={onChange} title="Phone number with 7-9 and remaing 9 digit with 0-9" required/>
    </div>
  )
}

export default InputComponent