import { Card } from "@mui/material";
import PropTypes from 'prop-types';

const CardPresentacion = ({ children }) => {
    return (
        <Card sx={{ maxWidth: 545 }}>
            {children}
        </Card>
    );
}

export default CardPresentacion;

CardPresentacion.propTypes = {
    children: PropTypes.element
}