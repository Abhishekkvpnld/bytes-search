# Search Functionality - Backend Application

## Overview
This document provides details about the search functionality implemented in the backend application using Express.js and MongoDB. The search feature allows users to query the database based on specific parameters and retrieve relevant data.

## Features
- Full-text search on user-related data.
- Case-insensitive search.
- Optimized querying using MongoDB indexes.
- Efficient response handling.

## API Endpoint
### `GET /api/products/search`


#### Example Request
```
GET /api/search?query=<search_term>&minPrice=150&maxPrice=200&page=1&limit=10
```


## Implementation Details
- The search is performed using MongoDB's `$regex` for flexible text matching.
- Pagination is implemented using skip and limit in MongoDB queries.

## Technologies Used
- **Node.js** - Backend runtime environment.
- **Express.js** - Web framework for handling API requests.
- **MongoDB** - Database for storing user information.

## Setup and Usage
1. Ensure MongoDB is running.
2. Create a `.env` file and include the following environment variables:
   ```sh
MONGODB_URI=mongodb+srv://bytes-backend-challenge:l3EmyPcEixzaV4P6@bytes-challenge.0kukf.mongodb.net/bytes-challenge?retryWrites=true&w=majority

PORT=4000
   ```
3. Start the backend server:
   ```sh
   npm start
   ```



