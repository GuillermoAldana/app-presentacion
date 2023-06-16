import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from 'prop-types';

const SelectPresentacion = (props) => {
    const {name, value, onChange} = props;
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={name}
                name={name}
                onChange={onChange}
            >
                <MenuItem value={'INITIAL'}>Inicial</MenuItem>
                <MenuItem value={'PROGRESS'}>Progreso</MenuItem>
                <MenuItem value={'FINISHED'}>Finalizado</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SelectPresentacion;
SelectPresentacion.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}