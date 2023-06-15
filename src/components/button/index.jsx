import { Button } from "@mui/material";
import PropTypes from 'prop-types';

const ButtonPresentacion = (props) => {
    const { text, tipo, onClick } = props;

    return (
        <Button size={tipo} onClick={onClick}>{text}</Button>
    );
}

export default ButtonPresentacion;

ButtonPresentacion.propTypes = {
    text: PropTypes.string,
    tipo: PropTypes.string,
    onClick: PropTypes.func,
}