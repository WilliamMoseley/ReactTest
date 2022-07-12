const ButtonComponent = (props) => {
  const {buttonText, color, backgroundColor, disabled} = props;

  return(
    <>
      <button style={{color: color, backgroundColor: backgroundColor}} disabled={disabled}>
        {buttonText ? buttonText : "Click"}
      </button>
    </>
  )
}

export default ButtonComponent