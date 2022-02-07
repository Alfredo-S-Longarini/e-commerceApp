import React, {useState} from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

import './itemDetail.css'

const ItemDetail = ({ products }) => {

  const [buttonInfo, setButtonInfo] = useState('none');

  const infoEnabled = () => {
    if (buttonInfo === 'none') {
        setButtonInfo('');
    } else {
        setButtonInfo('none');
    }
}
  return (
    <div className='detailSection'>

      <Button onClick={infoEnabled} color="primary" style={{margin:'0 0 10px 0'}}> 
        Mas Información
      </Button>

      <Card className='cardsDetails' style={{width:'100%', display:buttonInfo, border:'none', flexGrow:0}}>
        <CardBody className='bodyDetails'>
          <CardTitle tag="h5">Precio Online: {products.precio}
          <div>Precio Lista: {products.precioList}</div>
          </CardTitle>
          <CardSubtitle className="mb-2 subtitleDetails" tag="h6">
            12 cuotas sin interes en precio de lista
          </CardSubtitle>
          <CardText>
            Los procesadores para juegos mejor valorados del mundo se llaman AMD Ryzen™ Serie 5000.
            Los más veloces del juego.
            Tecnologías de última generación.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemDetail;
