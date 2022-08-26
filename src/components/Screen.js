import '../styles/Screen.css';

function Screen ( {text} ) {
    return (
    <div className='screen'>
        <p> { text } </p>
    </div>
    )
}
Screen.defaultProps = {
    text: '0',
}
export default Screen;