function Button({value, handleClick, text}) {
    return (
        <button onClick={()=>handleClick(value)}>{text}</button>
    )
}
export default Button;