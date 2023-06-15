
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ButtonPresentacion from '../button';
import TitlePresentacion from '../typography';
import ParagraphPresentacion from '../paragraph';
import { useState } from 'react';
import { IMAGE, OBJETO_INICIAL } from '../../constants/config';

export default function Presentacion() {
  const [data, setData] = useState(OBJETO_INICIAL);

  const handleClick = () => {
    setData({
      title: 'Practica de desarrollo', 
      description:`SharePoint, es una herramienta software, accesible a través de navegador, que permite gestionar todo el contenido y documentación existente en cualquier empresa.`
    });  
  }

  const handleCancelClick = () => {
    setData(OBJETO_INICIAL);  
  }
  
  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={IMAGE}
        title="U"
      />
      <CardContent>
        <TitlePresentacion text={data.title} />
        <ParagraphPresentacion text={data.description} />
      </CardContent>
      <CardActions>
        <ButtonPresentacion text='Enviar' tipo='small' onClick={handleClick}/>
        <ButtonPresentacion text='Cancelar' tipo='small' onClick={handleCancelClick}/>
      </CardActions>
    </Card>
  );
}