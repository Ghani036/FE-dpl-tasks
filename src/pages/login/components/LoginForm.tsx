import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2, Lock, User } from 'lucide-react';
import api from '../../../api';
import { loginStart, loginSuccess, loginFailure } from '../../../store/authSlice';

const loginSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
    error: string | null;
    loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ error, loading }) => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        try {
            dispatch(loginStart());
            const response = await api.post('/auth/login', {
                username: data.username,
                password: data.password,
                expiresInMins: 60,
            });
            dispatch(loginSuccess(response.data));
            navigate('/');
        } catch (err: any) {
            dispatch(loginFailure(err.response?.data?.message || 'Invalid username or password'));
        }
    };

    return (
        <div className="min-h-screen  flex items-center justify-center ">
            <div className="w-full max-w-md bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-emerald-700 tracking-tight">
                        Product Dashboard
                    </h1>
                    <p className="text-sm text-slate-600 mt-2">
                        Sign in to continue
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-semibold flex items-center">
                            <span className="mr-2">⚠️</span> {error}
                        </div>
                    )}

                    {/* Username */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Username</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                {...register('username')}
                                type="text"
                                placeholder="e.g. emilys"
                                className="w-full rounded-xl bg-white/60 border border-white/40 px-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                        </div>
                        {errors.username && (
                            <p className="text-xs text-red-500 font-medium">{errors.username.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">

                        <label className="text-sm font-semibold text-slate-700">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                {...register('password')}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                className="w-full rounded-xl bg-white/60 border border-white/40 px-12 py-3 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="text-xs text-red-500 font-medium">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Glassy Green Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl text-white font-bold text-lg
                        bg-gradient-to-r from-emerald-500 to-green-600
                        hover:from-emerald-600 hover:to-green-700
                        shadow-lg shadow-emerald-300/40
                        backdrop-blur-md
                        transition-all duration-300
                        flex items-center justify-center gap-3"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <span>Login</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};


export default LoginForm;
