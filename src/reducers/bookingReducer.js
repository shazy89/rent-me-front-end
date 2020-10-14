export default (state={
     bookings: [], loading: true
    }, action) => {
  
     switch (action.type) {
         case "ADD_BOOK":
   
            return {...state, 
                cars: [...state.bookings, action.book],
                loading: false };
         default:
             return state;
         }
 }