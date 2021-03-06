# RentMe 

Car rental app featuring multiple cars, customizable dates, schedule and manage bookings that will calculate the fare for customers.
Admin has the ability to manage the cars, upload images for new car postings, and review booking metrics reports.

# Usage and Features

RentMe is (SPA) car rental app where users can search for available cars on selected dates, check for prices and schedule a booking. Admin users can use tools for creating new available cars, 
 edit listings, upload images to listings and view reports on bookings.

# Prerequisites

# Backend

* Ruby on Rails
* PostgreSQL
* Cloudinary
* Active Record

# Frontend

* React
* React Router
* Redux Thunk middleware
* AJAX

# Installing

After cloning this repo, first run the Rails server:

1. 
``` 
    cd rent-me-back-end
    bundle install
```
2. Database installation:

``` 
    rake db:create
    rake db:migrate
    rake db:seed 
```    
3. Run Rails server: rails s

   # Frontend

 ```
      cd ..  
      cd rent-me-front-end
      npm install && npm start 
  ```    