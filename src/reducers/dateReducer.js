 // export default (state={
 // startDate: [],
 // endDate: []
 // }, action) => {
 // 
 //     let datePicker;
 //  switch (action.type) {
 //      
 //      case "ADD_START_DATE":
 //         debugger
 // 
 //      return {...state, startDate: [...state.startDate, datePicker]}
 // 
 //      default:
 //         return state;
 //  };

//}

export default (state=[], action) => {

    switch(action.type) {
        case "ADD_START_DATE":

            return action.dates;
        default:
        return state;
    }
}