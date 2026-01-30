import React from 'react';

interface ProfileDetailsProps {
    user: any;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ user }) => {
    if (!user) return null;

    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-md shadow-sm border border-slate-100">
            <h1 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">User Information</h1>

            <div className="space-y-6">
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={user.image}
                        alt={user.username}
                        className="w-32 h-32 rounded-md border-2 border-slate-100 mb-4"
                    />
                    <p className="text-xl font-bold text-slate-800">{user.firstName} {user.lastName}</p>
                    <p className="text-slate-500">{user.username}</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between py-3 border-b border-slate-50">
                        <span className="text-slate-500 font-medium">User ID:</span>
                        <span className="text-slate-900 font-semibold">{user.id}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-50">
                        <span className="text-slate-500 font-medium">Email:</span>
                        <span className="text-slate-900 font-semibold">{user.email}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-50">
                        <span className="text-slate-500 font-medium">FirstName:</span>
                        <span className="text-slate-900 font-semibold">{user.firstName}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-50">
                        <span className="text-slate-500 font-medium">LastName:</span>
                        <span className="text-slate-900 font-semibold">{user.lastName}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-50">
                        <span className="text-slate-500 font-medium">Gender:</span>
                        <span className="text-slate-900 font-semibold capitalize">{user.gender}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-50">
                        <span className="text-slate-500 font-medium">Username:</span>
                        <span className="text-slate-900 font-semibold">{user.username}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
