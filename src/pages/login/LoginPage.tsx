import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store';
import LoginForm from './components/LoginForm';

const LoginPage: React.FC = () => {
    const { isAuthenticated, loading, error } = useSelector((state: RootState) => state.auth);

    if (isAuthenticated) return <Navigate to="/" replace />;

    return <LoginForm error={error} loading={loading} />
};

export default LoginPage;
