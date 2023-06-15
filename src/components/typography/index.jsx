import { Typography } from "@mui/material";
import PropTypes from 'prop-types';

const TitlePresentacion = (props) => {
    return ( 
        <Typography gutterBottom variant="h4" component="h4">
        {props.text}
      </Typography>
     );
};
 
export default TitlePresentacion;

TitlePresentacion.propTypes = {
    text: PropTypes.string.isRequired
}