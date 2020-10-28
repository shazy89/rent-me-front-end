const addBook = bookingData => {
    return {
      type: 'ADD_BOOKING',
      bookingData
    };
  };

  const addErrors = (error) => {
      return {
        type: 'ADD_ERROR',
        error
      }
  }

  export const bookCar = (bookingData, history) => {
                   
      return (dispatch) => {
          fetch(`https://rent-me-back-end.herokuapp.com/${bookingData.booking.car_id}/bookings`, {
              method: "POST",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
          },
              body: JSON.stringify(bookingData)
          })
              .then( resp => resp.json())
              .then( booking => {
                    if (booking.errors) {
                        dispatch(addErrors(booking.errors))
                    } else {
                  dispatch( addBook(booking))
                  history.push('/')
                  alert('Your reservation is complete!') 
                   }
                })
                .catch((errors) => {
                    console.log(errors)
                    dispatch(addErrors(errors))
                })
        }
    }


                      
                 
                
              

