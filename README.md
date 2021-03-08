# car-app

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

## MVP
[Team Expectaions](https://docs.google.com/document/d/1VPXGLWwFamYNK0Q5F6n829gybiaFZiUmm2Mh0GRq1Xo/edit)
### MVP
* Full CRUD front-end and back-end
* Sign in/ Sign up with authentication
* 
### Post-MVP
* Add like button so can sort based on popularity
* 
