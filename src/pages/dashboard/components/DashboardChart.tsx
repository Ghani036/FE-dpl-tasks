import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

interface ChartData {
    name: string;
    price: number;
    fullName: string;
}

interface DashboardChartProps {
    data: ChartData[];
}

const DashboardChart: React.FC<DashboardChartProps> = ({ data }) => {
    return (
        <div className="bg-white p-8 rounded-md shadow-glass overflow-hidden">

            <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Products Pricing</h3>
                        <p className="text-sm text-slate-500 font-medium">An Overview of Top Products Comparison</p>
                    </div>

                </div>

                <div className="h-[450px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                            <defs>
                                <linearGradient id="premiumGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                                    <stop offset="100%" stopColor="#059669" stopOpacity={1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
                                dy={15}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip
                                cursor={{ fill: '#f8fafc', radius: 10 }}
                                contentStyle={{
                                    borderRadius: '7px',
                                    border: 'none',
                                    boxShadow: 'var(--shadow-premium)',
                                    padding: '20px',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(20px)'
                                }}
                                formatter={(value: any) => [`$${value}`, 'Price']}
                                labelStyle={{ fontWeight: 800, color: '#1e293b', marginBottom: '8px' }}
                            />
                            <Bar
                                dataKey="price"
                                fill="url(#premiumGradient)"
                                radius={[12, 12, 4, 4]}
                                barSize={45}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardChart;
