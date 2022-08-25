import "./calculator.css"
const Button = ({ value, content, handelText, className }) => {
    return (
        <>
            <button type="button" value={value} className={className} onClick={() => handelText(value)}>{content}</button>
        </>
    );
}

export default Button;