
export const addStartDate = (startDate) => {

    return (dispatch) => {
        dispatch({type: 'ADD_START_DATE', startDate})
    }
}
export const addEndDate = (endDate) => {

    return (dispatch) => {
        dispatch({type: 'ADD_END_DATE', endDate})
    }
}
