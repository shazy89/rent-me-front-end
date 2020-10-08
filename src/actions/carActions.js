

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

   
  export const createCar = (car, history) => {
      debugger
    const carParams = {
        car: {
              make: car.car.make,
              model: car.car.model,
              vehicleType: car.car.vehicleType,
              capacity: car.car.capacity ,
              baggingCapacity: car.car.baggingCapacity,
              rentPrice: car.car.rentPrice,
              img: car.car.reader.result}
             }
           
    return (dispatch) => {
        fetch('http://localhost:3001/cars', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carParams)
        })
            .then( resp => resp.json() )
            .then( car => {
                dispatch(addCar(car))
                history.push('/') // redirects to /pets
            })
    }
}
 

   

    