# DhanSetu Trading Platform

A modern web-based trading platform inspired by Zerodha, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. DhanSetu provides real-time stock tracking, portfolio management, and automated trading features.

## Features

### Home Page
- Real-time tracking of top 50 stocks
- Customizable watchlist
- Quick buy/sell actions
- Market trends and indices
- Search functionality for stocks

### Dashboard
- Complete portfolio overview
- Equity performance metrics
- Holdings summary
- P&L tracking
- Interactive charts and graphs

### Orders
- Comprehensive transaction history
- Filter orders by date/stock/type
- Order status tracking
- Trade confirmation receipts
- Export functionality for tax purposes

### Holdings & Positions
- Current portfolio positions
- Automated threshold-based selling
- Set custom alerts for stock prices
- Stop-loss management
- Position sizing tools

### Funds
- Seamless funds addition
- Secure withdrawal process
- Bank account management
- Transaction history
- Balance overview

## Tech Stack

### Frontend
- React.js
- Redux for state management
- Chart.js for visualizations
- Material-UI components
- WebSocket for real-time updates

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- WebSocket Server

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/DhanSetu.git
cd DhanSetu
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Configure environment variables
```bash
# Backend .env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
API_KEY=your_stock_api_key

# Frontend .env
REACT_APP_API_URL=http://localhost:5000
```

4. Run the application
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm start
```

## API Documentation

### Authentication Endpoints
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- GET `/api/auth/profile` - Get user profile

### Trading Endpoints
- GET `/api/stocks/watchlist` - Get user's watchlist
- POST `/api/orders/new` - Place new order
- GET `/api/holdings` - Get current holdings
- POST `/api/funds/add` - Add funds
- POST `/api/funds/withdraw` - Withdraw funds

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

- JWT based authentication
- Rate limiting
- Input validation
- Data encryption
- Secure password hashing

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Zerodha for inspiration
- NSE/BSE for market data
- Trading community for feedback and suggestions

## Support

For support, email support@dhansetu.com or raise an issue in the repository.