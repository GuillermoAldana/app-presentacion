import { Chip } from "@mui/material"
import PropTypes from 'prop-types';

function ChipAlert({ estado = 'INITIAL' }) {
    if (estado === 'PROGRESS') {
        return <Chip label={estado} color="primary" size="small"/>
    }
    if (estado === 'FINISHED') {
        return <Chip label={estado} color="success" size="small"/>
    }
    return (
        <Chip label={estado} color="info" size="small"/>
    )
}
export default ChipAlert;


ChipAlert.propTypes = {
    estado: PropTypes.string,
}