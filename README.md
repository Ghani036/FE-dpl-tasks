# Product Dashboard - Product Dashboard Application

A premium, modern product management dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- **Authentication**: Secure login system using DummyJSON API.
- **Dashboard**: Interactive data visualization using Recharts.
- **Product Management**: 
  - Searchable product listing.
  - Pagination for large datasets.
  - Detailed product information views.
- **User Profile**: Personal account management and verification status.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.


## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 
- **State Management**: Redux Toolkit
- **Navigation**: React Router 7
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Icons**: Lucide React
- **API Client**: Axios

## Installation & Setup

1. **Clone the repository**:
   git clone https://github.com/Ghani036/FE-dpl-tasks.git
   cd Fe-dpl-tasks

2. **Install dependencies**:
   npm install or npm install --legacy-peer-deps


3. **Start the development server**:
   npm start

The application will be available at `http://localhost:3000`.

## Demo Credentials

For testing purposes, you can use the following default credentials 
- **Username**: `emilys`
- **Password**: `emilyspass`

## Architectural Decisions & Trade-offs

- **State Management**: Chose Redux Toolkit for global authentication state to ensure scalability. It provides a robust way to handle user sessions across the app.
- **Modular Components**: Followed a domain-driven structure. Components specific to a feature (e.g., Dashboard Chart) live within that page's directory, while shared UI elements reside in the root `components` folder.
- **API Layer**: Implemented a centralized Axios instance with request interceptors to automatically attach the JWT token to outgoing requests.
- **Styling**: Leveraged Tailwind CSS for a utility-first approach with a custom theme.
- **Types**: Used strict TypeScript interfaces for all API responses and component props to ensure type safety and better developer experience.

## Project Structure

```text
src/
├── api/             # Axios instance & configuration
├── components/      # Shared UI components across the pages
├── layouts/         # Main application layouts (sidebar, header)
├── pages/           # Page components (Dashboard, Products, etc.)
├── store/           # Redux state slices
├── types/           # TypeScript interfaces
└── App.tsx          # Main routing & application entry

