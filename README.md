# Expense Tracker

An expense tracker application built with a Node.js backend using Express and MongoDB, and a React frontend. This application allows users to add, view, update, and delete transactions, and it calculates the total balance, income, and expenses.

## Features

- Add new transaction
- View transaction history
- View recent transactions
- Update existing transactions
- Delete transactions
- Calculate total balance, income, and expenses

## Technologies Used

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors

### Frontend

- Vite+React
- Tailwind CSS
- Axios

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/rajverma/Expense-Tracker.git
    cd .\backend\
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    PORT=5000
    MONGODB_CONNECTION=your_mongodb_connection_string
    ```

4. Start the server:
    ```sh
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd .\frontend\
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `requestMethods.js` file in the `frontend/src` directory and add the following code:
    ```js
    import axios from 'axios';

    const publicRequest = axios.create({
        baseURL: 'http://localhost:5000/',
    });

    export default publicRequest;
    ```

4. Start the React application:
    ```sh
    npm run dev
    ```

## Usage

1. Use the form to add new transactions by providing a description, amount, transaction type (debit or credit), and date.
2. View the total balance, income, and expenses.
3. View recent transactions, update or delete them as needed.

## API Endpoints

### Expense Routes

- `POST /expenses` - Add a new expense
- `GET /expenses` - Get all expenses
- `GET /expenses/recent` - Get the 5 most recent expenses
- `PUT /expenses/:id` - Update an expense by ID
- `DELETE /expenses/:id` - Delete an expense by ID


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
