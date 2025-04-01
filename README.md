# Stock Trading Platform (Full Stack)

## Description

This is a full-stack application that allows users to register, login, trade stocks, and track their portfolio. The application is built using the MERN stack for the backend and Next.js for the frontend.

### Features:
- **User Authentication**: Users can register, log in, and manage their profiles with JWT-based authentication.
- **Stock Market Data**: Simulated stock prices that are updated every minute.
- **Trading System**: Users can buy/sell stocks, and their wallet and portfolio are updated accordingly.
- **Portfolio Management**: Users can view their holdings and track profits/losses.
- **Leaderboard**: Ranks users based on their portfolio value (Bonus feature).
  
## Tech Stack

### Backend:
- **Node.js** (JavaScript/TypeScript)
- **Express.js** for REST API
- **Prisma ORM** for database access
- **PostgreSQL** for storing user data, stock prices, and transactions
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Cron Job** for periodically updating stock prices

### Frontend:
- **Next.js** with TypeScript
- **React** for UI components
- **Tailwind CSS** for responsive design
- **Axios** or **Fetch API** for making API requests

### Tools:
- **Postman** for API testing
- **Render** for deployment

## Installation

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/stock-trading-platform.git](https://github.com/Mallikarjuna-dev/stock-trading-platform.git)
cd stock-trading-platform
```

### 2. Set Up the Backend
1. Navigate to the server folder:
```
cd server
```

2. Install backend dependencies:
```
npm install
```

3. Set up environment variables by creating a .env file in the root of the server folder with the following content:
```
DATABASE_URL=your-database-connection-url
JWT_SECRET=your-jwt-secret
```

4. Run the backend server:
```
npm run server
```

### 3. Set up the Frontend
1. Navigate to the client folder:
```
cd client
```

2. install dependencies
```
npm install
```

3. Set up environment variables by creating a .env.local file in the root of the client folder:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

4. Run the frontend server:
```
npm run dev
```

### 4. Run the Application
Once both the frontend and backend are running, you can access the application at:

* Backend: http://localhost:5000

* Frontend: http://localhost:3000 
