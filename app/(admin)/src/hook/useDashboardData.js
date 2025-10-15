// src/hook/useDashboardData.js
import { useState, useEffect } from 'react';
import { startHighFrequencyUpdates } from '../services/dataService';

export const useDashboardData = (updateInterval = 5000) => {
  const [data, setData] = useState({
    todaySales: 6782,
    growthRate: 78.4,
    totalUsers: 12653,
    activeUsers: 9864,
    salesConversionRate: 12.5,
    revenue: 258000,
    newCustomers: 128,
    activeSubscriptions: 542,
    sales: 324,
    orders: 512,
    shares: 89,
    likes: 420,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const interval = startHighFrequencyUpdates(setData, updateInterval);

    setLoading(false);

    return () => clearInterval(interval);
  }, [updateInterval]);

  return { data, loading };
};
