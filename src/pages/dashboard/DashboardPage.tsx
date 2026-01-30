import React, { useEffect, useState } from 'react';
import api from '../../api';
import { Product } from '../../types';
import Loader from '../../components/Loader';
import DashboardChart from './components/DashboardChart';

const DashboardPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products?limit=10');
                setProducts(response.data.products);
            } catch (error) {
                console.error('Failed to fetch products', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const chartData = products.map((p: Product) => ({
        name: p.title.length > 12 ? p.title.substring(0, 10) + '...' : p.title,
        price: p.price,
        fullName: p.title
    }));

    if (loading) {
        return <Loader message="Analytics Loading..." />;
    }

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            <DashboardChart data={chartData} />
        </div>
    );
};

export default DashboardPage;
