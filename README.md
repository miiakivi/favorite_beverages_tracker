# Favorite Beverage Tracker

Welcome to the Favorite Beverage Tracker project! The app allows user to store information about their favorite coffee or tea brands. Users can save details such as the name, weight in grams, price, and roasting level.

It took approximately 6 hours to develop.

## Features

### Client

- React and TypeScript
- Input Fields:
  - Name
  - weight in grams
  - Package price
  - Roasting level (scale of 1 to 5)
- List View: View all the saved coffee and tea entries in a table format.

### Backend
- Node and TypeScript
- The backend stores coffee and tea entries in the array (beverages).
- returns a full list to the client via a GET request.
- adds new entries through a POST request.

## Usage

Clone the repository to your local machine.

### Server
Navigate to the server and install all dependencies
```
cd server && npm install
```
Start server

```
cd server && npm install
```

### Client
Open another terminal, navigate to the client and install all dependencies
```
cd client && npm install
```
Start client

```
cd server && npm install
```

Access the application in your web browser at http://localhost:3000.

## Technologies Used

- React
- TypeScript
- Node.js
- Express