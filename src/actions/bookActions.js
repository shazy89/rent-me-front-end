const addBook = bookingData => {
    return {
      type: 'ADD_BOOK',
      bookingData
    };
  };

export const bookCar = (bookingData, history) => {
                 
    return (dispatch) => {
        fetch(`http://localhost:3001//cars/${bookingData.booking.car_id}/bookings`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(bookingData)
        })
            .then( resp => resp.json() )
            .then( book => {
                dispatch(addBook(book))
                history.push('/')
                alert('Your reservation is complete!') 
        })
      }
  }

