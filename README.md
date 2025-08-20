# Restaurant App

A full-stack restaurant management application built with React (Frontend) and Node.js (Backend).

## Features

- **User Authentication**: Register, login, and logout functionality
- **Food Management**: Add, edit, delete, and view food items
- **Shopping Cart**: Add items to cart and manage quantities
- **Admin Panel**: Admin interface for managing food items
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Dynamic content updates

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- bcrypt for password hashing

## Project Structure

```
restaurant_App/
├── backend/          # Node.js backend
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Custom middleware
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   └── index.js      # Server entry point
└── frontend/         # React frontend
    ├── src/
    │   ├── components/  # Reusable components
    │   ├── pages/       # Page components
    │   ├── context/     # React context
    │   └── assets/      # Static assets
    └── public/          # Public assets
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd restaurant_App
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Run the Application**

   **Backend:**
   ```bash
   cd backend
   npm start
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

   The application will be available at:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Food Items
- `GET /api/foods` - Get all food items
- `POST /api/foods` - Create new food item (admin only)
- `PUT /api/foods/:id` - Update food item (admin only)
- `DELETE /api/foods/:id` - Delete food item (admin only)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/restaurant_App](https://github.com/yourusername/restaurant_App)
