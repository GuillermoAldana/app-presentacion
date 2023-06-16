import { Grid, Typography } from "@mui/material"
import FormularioPresentacion from "./components/forms"
import { useState } from "react"

function App() {
  const [ listOfUser, setListOfUser] = useState([]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
       {/*  <Presentacion /> */}
       <FormularioPresentacion listOfUser={listOfUser} setListOfUser={setListOfUser}/>
      </Grid>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
      {listOfUser.map((element, index) => {
        return(
          <div key={index}>
            <Typography variant="h5" color="initial">{element.Nombre} {element.Apellido}</Typography>
            <Typography variant="subtitle1" color="initial">{element.Nota}</Typography>
          </div>
        )
      })}
      </Grid>
    </Grid>
  )
}

export default App
