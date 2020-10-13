import React, { useState } from 'react';
import { DatePicker, Icon, Button, Carousel } from 'react-materialize';
//import { Link } from 'react-router-dom'
import { addStartDate, addEndDate } from '../actions/dateActions'
import { connect } from 'react-redux';

const SearchCars = (props) => {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

const stDate = (e) => {
  e.preventDefault()
  props.addStartDate(startDate, props.history)
  props.addEndDate(endDate, props.history)
}

   return (
     
     <div className="container">
    <h2 className="z-depth-1 center"> RESERVE A VEHICLE</h2>
  <div className="center">
  

  <DatePicker 
   onChange={ e => setStartDate(e)}  
   
   className="center"     
   style={{width: '20%'}}
   id="DatePicker-4"
   options={{
    autoClose: false,
    container: null,
    defaultDate:  startDate,
    disableDayFn: null,
    disableWeekends: false,
    events: [],
    firstDay: 0,
    format: 'mmm dd, yyyy',
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      nextMonth: '›',
      previousMonth: '‹',
      weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      weekdaysAbbrev: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
      ],
      weekdaysShort: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ]
    },

    isRTL: false,
    maxDate: null,
    minDate: new Date(),
    onChange: null,
    onClose: null,
    onDraw: null,
    onOpen: null,
    onSelect: null ,
    parse: null,
    setDefaultDate: true,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 2
 
  }}
> PICK-UP<Icon >date_range</Icon> </DatePicker>
 <DatePicker

    onChange={ e => setEndDate(e)}  
    className="center"
    style={{width: '20%'}}
    id="DatePicker-5"

    options={{
    autoClose: false,
    container: null,
    defaultDate: endDate,
    disableDayFn: null,
    disableWeekends: false,
    events: [],
    firstDay: 0,
    format: 'mmm dd, yyyy',
    i18n: {
     cancel: 'Cancel',
     clear: 'Clear',
     done: 'Ok',
     months: [
       'January',
       'February',
       'March',
       'April',
       'May',
       'June',
       'July',
       'August',
       'September',
       'October',
       'November',
       'December'
     ],
     monthsShort: [
       'Jan',
       'Feb',
       'Mar',
       'Apr',
       'May',
       'Jun',
       'Jul',
       'Aug',
       'Sep',
       'Oct',
       'Nov',
       'Dec'
     ],
     nextMonth: '›',
     previousMonth: '‹',
     weekdays: [
       'Sunday',
       'Monday',
       'Tuesday',
       'Wednesday',
       'Thursday',
       'Friday',
       'Saturday'
     ],
     weekdaysAbbrev: [
       'S',
       'M',
       'T',
       'W',
       'T',
       'F',
       'S'
     ],
     weekdaysShort: [
       'Sun',
       'Mon',
       'Tue',
       'Wed',
       'Thu',
       'Fri',
       'Sat'
     ]
    },
    isRTL: false,
    maxDate: null,
    minDate: startDate ,
    onClose: null,
    onDraw: null,
    onOpen: null,
    onSelect: null,
    parse: null,
    setDefaultDate: true,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 2
    }}
    >RETURN <Icon >date_range</Icon> </DatePicker>
    </div> 
    <div>
      <Button  className="right 009688 teal" onClick={e => stDate(e)} style={{color: 'white'}} >  Check Availability</Button> 
     </div>
      <div>
      <Carousel
         carouselId="Carousel-2"
         images={[
           'https://res.cloudinary.com/dytheecsk/image/upload/v1602332271/cjgrqgrd2sb2sefquwp2.png',
           'https://res.cloudinary.com/dytheecsk/image/upload/v1602332084/dbmprppnw3liondqotjn.png',
           'https://res.cloudinary.com/dytheecsk/image/upload/v1602502859/ezthh4kz9eke2zvyjmzf.jpg',
           'https://res.cloudinary.com/dytheecsk/image/upload/v1602268428/hcgrvhwrs0p0xzl8iioe.png',
           'https://res.cloudinary.com/dytheecsk/image/upload/v1602189057/sqq8spvsvhzp7dwsvfae.png'
         ]}
         options={{
           dist: -100,
           duration: 200,
           fullWidth: false,
           indicators: false,
           noWrap: false,
           numVisible: 5,
           onCycleTo: null,
           padding: 0,
           shift: 0
         }}
            /> 
      </div> 
 
</div>
    )
    
}



export default connect(null, { addStartDate, addEndDate })(SearchCars);
