# Finova - Personal Finance Tracker

Finova is a comprehensive personal finance tracking application that helps users manage their income, expenses, and financial health through an intuitive interface with powerful analytics.

## Features

### Core Features
- **User Authentication**: Login and registration system with form validation
- **Transaction Management**: Add, edit, and delete income/expense transactions
- **Financial Dashboard**: Visual overview of financial status with charts
- **Budget Tracking**: Monitor spending against budgets
- **AI Financial Assistant**: Get personalized financial insights and recommendations
- **Dark/Light Mode**: Toggle between color themes for comfortable viewing

### Technical Features
- **Client-side Storage**: Uses localStorage to persist user data and transactions
- **Interactive Charts**: Visualize financial data using Chart.js
- **Responsive Design**: Works on desktop and mobile devices
- **Animated UI**: Engaging animations and transitions
- **Form Validation**: Client-side validation for all forms

## File Structure

### index.html
The entry point of the application with:
- **Animated Landing Page**: Gradient background with falling money animation
- **User Registration/Login**: Form with field validation
- **Navigation**: Sections for Home, About, Services, and Contact
- **Theme Toggle**: Switch between dark and light modes

### customer.html
The main dashboard for authenticated users with:
- **Financial Dashboard**: Overview of income, expenses, and balance
- **Transaction Management**: Add, edit, and delete transactions
- **Advanced Analytics**: Multiple chart visualizations
- **AI Assistant**: Financial insights and recommendations
- **Profile Management**: Update user information

## Code Overview

### index.html Key Components
1. **Intro Animation**:
   - Gradient background animation
   - Falling money particles effect
   - Logo reveal animation

2. **User Authentication**:
   - Login/registration form with toggle
   - Form validation
   - localStorage for user data persistence

3. **Navigation**:
   - Smooth section transitions
   - Active link highlighting

4. **Theme System**:
   - Dark/light mode toggle
   - localStorage persistence
   - Automatic theme application on load

### customer.html Key Components
1. **Dashboard**:
   - Financial summary cards
   - Transaction trend charts
   - Category spending breakdown

2. **Transaction Management**:
   - CRUD operations for transactions
   - Filtering and sorting
   - Bulk actions (clear all)

3. **AI Assistant**:
   - Financial health scoring
   - Budget recommendations
   - Chat interface for questions
   - 12-month financial forecast

4. **Charts & Visualization**:
   - Trend analysis (daily, monthly)
   - Category distribution
   - Income vs. expense comparison

## Technologies Used
- HTML5, CSS3, JavaScript (ES6+)
- Chart.js for data visualization
- Google Fonts (Poppins, Playfair Display)
- localStorage for client-side data persistence
- CSS animations and transitions

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/finova.git
