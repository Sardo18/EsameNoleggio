import React, { useEffect } from 'react';
import CarItem from './CarItem';
import ListGroup from 'react-bootstrap/ListGroup';
import {Redirect} from 'react-router-dom';
import {AuthContext} from '../auth/AuthContext';

const CarList = (props) => {
    let {cars, getCars} = props;
useEffect(() => {
    getCars();
});

return(
    <AuthContext.Consumer>
        {(context)=> (
            <>
            {context.authErr && <Redirect to = "/login"></Redirect>}

            {cars && 
            <ListGroup as="ul" variant="flush">
                {cars.map((car) => <CarItem key = {car.id} car = {car}/>)}
            </ListGroup>}
            </>
        )}
    </AuthContext.Consumer>
); 
}

export default CarList;