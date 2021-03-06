# PuppyPals

- WEB530
- Dog Owner Socializing App

## Start

1. `npm install`
2. `npm run start`

## Navigation Stack

```bash
├──Root
    ├── Home
    │   ├── ParkDetails
    │           └── PeopPleDetails
    │           └── EventDetails
    │           └── ReviewleDetails
    ├── Account
```

## Data Type

```typescript
interface User {
  id: number;
  fName: string;
  lName: string;
  age: string;
  email: string;
  password: string;
  profilePic: string;
  dogs: [
    // Arrary of Dog
    {
      dogName: string;
      dogBreed: string;
      dogPic: string;
    },
  ];
  events: [Event]; // Array of Event Id
  reviews: [Review]; // Array of Review Id
}

interface Event {
  id: number;
  title: string;
  date: Date; // dayjs().utc('z').local().tz('America/Toronto')
  parkLocation: string; // ParkPlace Id
  users: [User]; // Array of User Id
  ownerId: number;
}

interface Park {
  id: number;
  name: string;
  address: string;
  googleLink: string;
  image: string;
  latitude: number;
  longitude: number;
  placeId: string;
  livePeople: [User]; // Array of User Id
  events: [Event]; // Array of Event Id
  reviews: [Review]; // Array of Review Id
}

interface Review {
  id: number;
  rate: number;
  comment: string;
  dage: Date; // dayjs().utc('z').local().tz('America/Toronto')
  parkLocation: string; // ParkPlace Id
}
```
