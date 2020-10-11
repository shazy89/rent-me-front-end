import React, {  useEffect, useState } from 'react';
import { DatePicker, Icon, Button } from 'react-materialize';

const SearchCars = () => {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    return (
        <div className="container">
            <h2 className="z-depth-1 center"> RESERVE A VEHICLE</h2>
            
  <div className="center">
  <DatePicker    
  className="center"     
     style={{width: '20%'}}
  id="DatePicker-5"
  value="PICK UP"
  options={{
    autoClose: false,
    container: null,
    defaultDate: null,
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
    minDate: new Date,
    onClose: null,
    onDraw: null,
    onOpen: null,
    onSelect: null,
    parse: null,
    setDefaultDate: false,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 2
  }}
> <Icon >date_range</Icon> </DatePicker>
 <DatePicker
    className="center"
    style={{width: '20%'}}
    id="DatePicker-5"
    value="RETURN"
    options={{
    autoClose: false,
    container: null,
    defaultDate: null,
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
    minDate: new Date,
    onClose: null,
    onDraw: null,
    onOpen: null,
    onSelect: null,
    parse: null,
    setDefaultDate: false,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 2
    }}
    > <Icon >date_range</Icon> </DatePicker>
    <div>
     <Button className="right">Check Availability</Button>
     </div>
    </div>  
</div>
    )
    
}

export default SearchCars;