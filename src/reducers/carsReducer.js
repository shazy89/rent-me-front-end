export default (state=[], action) => {

    switch(action.type) {
        case "ADD_CARS":
            return action.cars;
        case "ADD_CAR":
            return [...state, action.car];
        case 'DELETE_CAR':
            const cars = state.filter(car => car.id !== action.car.id);
              return cars;
        case 'EDIT_CAR':
            let cars1 = state.map(car => car.id === action.car.id);
            return cars1;

            default:
                return state;
    
            }
             
        }
    
  


     
          
