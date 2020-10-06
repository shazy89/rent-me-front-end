

const addCars = (cars) => {
return {
    type: "ADD_CARS",
    cars
}
}
export const fetchCars = () => {
  
    return (dispatch) => {
        fetch('http://localhost:3001/cars')
            .then( resp => resp.json() )
            .then( cars => { 
                dispatch(addCars(cars))})
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

   

    