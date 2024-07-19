const Button = (props) => {
    return (

        <button onClick={() => alert("A label deste botão é : " + props.label)}>{props.label}</button>
    )
}

export default Button;