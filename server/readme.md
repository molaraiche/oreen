# Car Rental API

## Overview
This is a backend API for a car rental system, built using **Node.js**, **Express.js**, and **MongoDB**. It provides functionalities for managing car rentals, including car listings, reservations, authentication, and admin control.

## Features
- JWT-based authentication for admin users.
- CRUD operations for car listings and reservations.
- Secure API endpoints.
- Media handle ( Images and Videos)
- Admin dashboard for managing rentals.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT Authentication**
- **Multer**
- **Cors & dotenv**

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later)
- MongoDB

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/molaraiche/oreen-server.git
   cd oreen-server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```env
  PORT=YOUR_PORT
  MONGO_URI=YOUR_MONGODB_URL
  JWT_SECRET=YOUR_JWT_SECRET
  CLOUDINARY_NAME=YOUR_CLOUDINARY_NAME
  CLOUDINARY_KEY=YOUR_CLOUDINARY_KEY
  CLOUDINARY_SECRET=YOUR_CLOUDINARY_SECRET
  TWILIO_ACCOUNT_SID=YOUR_TWILIO_ACCOUNT_SID
  TWILIO_AUTH_TOKEN=YOUR_TWILIO_AUTH_TOKEN
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication
#### Admin Login
```http
POST /api/admin/login
```
**Request Body:**
```json
{
  "email": "admin@oreen.com",
  "password": "oreenAdmin@123"
}
```
**Response:**
```json
{
  "token": "your_jwt_token"
}
```

### Cars
#### Get All Cars
```http
GET /api/cars
```
**Response:**
```json
[
  {
    "_id": "12345",
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2022,
    "price": 50
  }
]
```
#### Add a New Car (Admin Only)
```http
POST /api/cars
```
**Request Body:**
```json
{
  "brand": "Honda",
  "model": "Civic",
  "year": 2023,
  "price": 60
  ......
}
```

### Reservations
#### Create a Reservation
```http
POST /api/reservations
```
**Request Body:**
```json
{
  "carId": "12345",
  "customer": "John Doe",
  "pickupDate": "2024-03-01",
  "returnDate": "2024-03-10"
  ......
}
```

## Security Considerations
- **JWT Expiry:** Tokens expire in 24 hours to enhance security.
- **Admin-only Access:** Only authenticated admins can modify car listings.
- **Input Validation:** Ensure inputs are sanitized before storing in the database.

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-xyz`).
3. Commit your changes.
4. Open a pull request.


