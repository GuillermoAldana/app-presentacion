import { TextField } from "@mui/material";
import PropTypes from 'prop-types';

const TextfieldPresentacion = (props) => {
    const {name, value, onChange} = props;
    return ( 
        <TextField
          id={name}
          label={name}
          value={value}
          onChange={onChange}
          name={name}
          type="text"
          fullWidth
        />
     );
}
 
export default TextfieldPresentacion;

TextfieldPresentacion.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}