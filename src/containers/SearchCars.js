import React, { useState, useEffect } from 'react';
import { DatePicker, Icon, Button, Carousel, Footer } from 'react-materialize';
import {Link} from 'react-router-dom'
import { addStartDate } from '../actions/dateActions'
import { connect } from 'react-redux';

const SearchCars = ({addStartDate}) => {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

const carts = (startDate, endDate) => {
    addStartDate(startDate)
}

    
    return (
<div className="container">
  <h2 className="z-depth-1 center"> RESERVE A VEHICLE</h2>
  
  <div className="center">
<Button onClick={carts(startDate)}></Button>
  <DatePicker 

  onChange={ e => setStartDate(e)}  
  
 // value={startDate}
  className="center"     
     style={{width: '20%'}}
  id="DatePicker-4"
 // value="PICK UP"
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
    onSelect: null,
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
   // value={endDate}
    className="center"
    style={{width: '20%'}}
    id="DatePicker-5"
 //   value="RETURN"
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
    minDate: startDate,
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
    <div>
      <Button  className="right 009688 teal" ><Link to='/carlist' style={{color: 'white'}}>Check Availability</Link></Button> 
     </div>
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
  <Footer
        className="example fb8c00 orange darken-1"
        copyrights="&copy 2015 Copyright Text"
        links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" 
        href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" 
         href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>} >
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
      
        <h5 className="white-text">
        Footer Content
      </h5>
        <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
      </p>
  </Footer>
</div>
    )
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        addStartDate: (startDate) => dispatch(addStartDate(startDate))
    }
}

export default connect(null, mapDispatchToProps)(SearchCars);
