export default (state={cars: [], loading: true }, action) => {

    switch(action.type) {
        case "ADD_CARS":
            return {
               ...state, 
               cars:  action.cars ,
               loading: false };
       
        case "ADD_CAR":
            return {...state, 
                    cars: [...state, action.car],
                    loading: false };
        case 'DELETE_CAR':
            const cars = state.cars.filter(car => car.id !== action.car.id);
              return cars;
        case 'EDIT_CAR':
            let cars1 = state.cars.map(car => car.id === action.car.id);
            return cars1;
            
            default:
                return state;
            }
             
        }
                

                    
                    
  


     
          
