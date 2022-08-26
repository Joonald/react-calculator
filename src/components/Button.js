function Button({type, className, text, value, handleClick}) {
    return (
        <button type={type} className={className} onClick={()=>handleClick(value,type)}>{text}</button>
    )
}
export default Button;