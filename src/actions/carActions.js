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
               history.push('/carlist') 
             })
     }
 }
  const editCar = car => {
   return {
       type: 'EDIT_CAR',
       car
      };
    };
          
export const editCarCard = (carinfo, history) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/cars/${carinfo.car.carId}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carinfo.car)
        })
            .then( resp => resp.json() )
            .then( car => { 
                dispatch(editCar(car))
                history.push('/') 
            })
    }
}

const deleteCar = (car) => {

return {
    type: 'DELETE_CAR',
    car
  }
}
export const deleteCarCards = (carId) => {
           
    return (dispatch) => {
       return fetch(`http://localhost:3001/cars/${carId}`, {
           method: 'DELETE'
       })
            .then( resp => resp.json() )
            .then( car => { 
                dispatch(deleteCar(car))})
    }
}
   
           



 



    