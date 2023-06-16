import { CardActions, CardContent, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { USER_PROPERTIES } from "../../constants/initialValue";
import CardPresentacion from "../layout";
import ButtonPresentacion from "../button";
import TitlePresentacion from "../typography";
import TextfieldPresentacion from "../textfield";
import PropTypes from 'prop-types';
import SelectPresentacion from "../select";

const FormularioPresentacion = ({ setListOfUser, listOfUser }) => {
    const [user, setUser] = useState(USER_PROPERTIES);
    const [existError, setExistError] = useState(false);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
    }
    const handleClean = () => {
        setUser(USER_PROPERTIES)
    }
    const handleClick = () => {
        const isValid = [user].some(element => element.Nombre && element.Apellido && element.Nota && element.Estado);
        if (isValid) {
            setListOfUser([...listOfUser, user]);
            handleClean();
            setExistError(false)
        } else {
            setExistError(true)
        }
    }
    return (
        <CardPresentacion>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TitlePresentacion text={'Formulario'} />
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <TextfieldPresentacion name={'Nombre'} value={user.Nombre} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextfieldPresentacion name={'Apellido'} value={user.Apellido} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextfieldPresentacion name={'Nota'} value={user.Nota} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectPresentacion name={'Estado'} value={user.Estado} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        {existError ? <Typography variant="body1" color={'red'}>Complete todos los campos</Typography> : null}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <ButtonPresentacion text='Enviar' tipo='small' onClick={handleClick} />
                <ButtonPresentacion text='Cancelar' tipo='small' onClick={handleClean} />
            </CardActions>
        </CardPresentacion>
    );
}

export default FormularioPresentacion;

FormularioPresentacion.propTypes = {
    setListOfUser: PropTypes.func,
    listOfUser: PropTypes.array
}