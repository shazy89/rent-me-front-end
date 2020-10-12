  export default (state={
  startDate: '',
  endDate: ''
  }, action) => {

   switch (action.type) {
       case "ADD_START_DATE":
           return {...state, startDate: action.startDate}
           case "ADD_END_DATE":
               return {...state, endDate: action.endDate}
           default:
              return state;
       }
    }
       
       

  
  

