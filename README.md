# car-app

## Overview

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
  }
)

```

## Component Heirarchy

## MVP
### MVP
* Full CRUD front-end and back-end
* 
### Post-MVP
* Add like button so can sort based on popularity
* 
