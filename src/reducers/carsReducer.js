export default (state=[], action) => {
//debugger
    switch(action.type) {
        case "ADD_CARS":
            return action.cars;
        case "ADD_CAR":
            return [...state, action.car];
        default:
            return state;
    }
}
