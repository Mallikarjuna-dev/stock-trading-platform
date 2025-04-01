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
git clone https://github.com/your-username/stock-trading-platform.git
cd stock-trading-platform
