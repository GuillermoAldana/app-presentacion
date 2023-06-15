import { CardActions, CardContent, Divider, Grid } from "@mui/material";
import CardPresentacion from "../layout";
import ButtonPresentacion from "../button";
import TitlePresentacion from "../typography";

const FormularioPresentacion = () => {
    const handleClick = () => { }
    return (
        <CardPresentacion>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TitlePresentacion text={'Formulario'} />
                        <Divider />
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}></Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <ButtonPresentacion text='Enviar' tipo='small' onClick={handleClick} />
                <ButtonPresentacion text='Cancelar' tipo='small' onClick={handleClick} />
            </CardActions>
        </CardPresentacion>
    );
}

export default FormularioPresentacion;