# car-app
[Sunday Drivers](https://sundaydriver.netlify.app/)

## Overview
Sunday Drivers gives vintage car enthusiasts the ability to buy and sell vehicles from one another. Sellers can list their vehicle(s) for sale through a simple signup process, then providing a vehicle’s details such as the make, model, year, price, image, etc. Car shoppers have the ability to view selling vehicles and contact the seller via email or phone. 

## Schema

```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: {type: String, required: false},
    password_digest: { type: String, required: true }
    cars: [type: Schema.Types.ObjectId, ref: 'Car' }]
  },
  { timestamps: true }
)
const Car = new Schema (
  {

    imgURL: [{ type: String, required: true }], 
    year: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    vin: { type: String, required: false },
    mileage: { type: String, required: false },
    engine: { type: String, required: false },
    zip-code: { type: String, required: false },
    exterior color: { type: String, required: false },
    interior color: { type: String, required: false },
    doors: { type: String, required: false },
    transmission: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {timestamps: true}
)

```

## Component Heirarchy

[View Our Component Heirarchy](https://whimsical.com/sunday-drivers-FFbtYjfqVSFwRN7yiLmyeS)

![component-heirarchy](https://i.imgur.com/oWCkug6.png)
## XD Design
![Screen Shot 2021-03-16 at 9 03 48 AM](https://user-images.githubusercontent.com/57376725/111322173-a20c4080-8636-11eb-8a21-d6463556d4f8.png)

## JSON API
![screenshot](https://i.imgur.com/P4xPU59.png)

## MVP
* Full CRUD front-end and back-end utilizing React on the front end and Express/Mongoose/MongoDB on the back-end
* Deploy backend to Heroku and front-end to Netlify
* Sign in/ Sign up with authentication (and sign out)
* User interface with landing page, cars page, car detail page, add car form, edit form page
* Styled with CSS 
* Responsive design for at least two screen sizes
### Post-MVP
* Advanced sort and search functions
* Direct image upload rather than image URLs
