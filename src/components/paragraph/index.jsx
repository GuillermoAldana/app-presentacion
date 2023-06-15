import { Typography } from "@mui/material";
import PropTypes from 'prop-types';

const ParagraphPresentacion = ({text}) => {
    return ( 
        <Typography gutterBottom variant="body2" color="text.secondary">
        {text}
      </Typography>
     );
};
 
export default ParagraphPresentacion;

ParagraphPresentacion.propTypes = {
    text: PropTypes.string.isRequired
}