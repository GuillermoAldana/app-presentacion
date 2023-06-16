import { CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";
import CardPresentacion from "./components/layout";
import FormularioPresentacion from "./section/forms";
import ChipAlert from "./components/chip";

function App() {
  const [listOfUser, setListOfUser] = useState([]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
        {/*  <Presentacion /> */}
        <FormularioPresentacion listOfUser={listOfUser} setListOfUser={setListOfUser} />
      </Grid>
      <Grid item xs={12} sm={6}>
        {listOfUser.map((element, index) => {
          return (
            <CardPresentacion key={index}>
              <CardContent>
                <Typography variant="h5" color="initial">{element.Nombre} {element.Apellido}</Typography>
                <Typography variant="subtitle1" color="initial">{element.Nota}</Typography>
                <ChipAlert estado={element.Estado}/>
              </CardContent>
            </CardPresentacion>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default App
