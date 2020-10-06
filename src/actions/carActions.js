import axios from 'axios'

const addCars = (cars) => {
return {
    type: "ADD_CARS",
    cars
}
}
 const addCar = car => {
     return {
       type: 'ADD_CAR',
       car
     };
   };
   
  export const createCar = (carData, history) => {
    return (dispatch) => {
        debugger
        fetch('http://localhost:3001/cars', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
            .then( resp => resp.json() )
            .then( car => {
                dispatch(addCar(car))
                history.push('/cars/new') // redirects to /pets
            })
    }
}
   

    