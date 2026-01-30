import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import api from '../../api';
import { setUser } from '../../store/authSlice';
import Loader from '../../components/Loader';
import ProfileDetails from './components/ProfileDetails';

const ProfilePage: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchMe = async () => {
            if (user?.token) {
                try {
                    setLoading(true);
                    const response = await api.get('/auth/me');
                    dispatch(setUser({ ...response.data, token: user.token }));
                } catch (error) {
                    console.error('Failed to fetch user profile', error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchMe();
    }, [dispatch, user?.token]);

    if (loading && !user) {
        return <Loader message="Authenticating Profile..." />;
    }

    return <ProfileDetails user={user} />
};

export default ProfilePage;
