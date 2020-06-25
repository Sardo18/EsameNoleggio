import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
//import Image from 'react-bootstrap/Image';

const CarItem = (props) => {
    let { car } = props;

return (
    <ListGroup.Item id = {car.id}>
      <div className="d-flex w-100 justify-content-between">

        </div>
    </ListGroup.Item>
  );
}
export default CarItem;