// src/services/dataService.js
import axios from 'axios';

// Mock API endpoint - replace with your actual API
const API_URL = 'https://api.example.com/dashboard';

// Simulate real-time data updates
export const getDashboardData = () => {
  return axios.get(API_URL);
};

// High-frequency update function using polling
export const startHighFrequencyUpdates = (callback, interval = 5000) => {
  const fetchData = async () => {
    try {
      // In a real app, you'd fetch from your API
      // const response = await getDashboardData();
      // callback(response.data);
      
      // For demo purposes, we'll simulate data changes
      const mockData = {
        todaySales: Math.floor(Math.random() * 10000) + 5000,
        growthRate: (Math.random() * 100).toFixed(1),
        totalUsers: Math.floor(Math.random() * 100000) + 50000,
        activeUsers: Math.floor(Math.random() * 50000) + 10000,
        salesConversionRate: (Math.random() * 100).toFixed(0),
        revenue: Math.floor(Math.random() * 10000) + 1000,
        newCustomers: Math.floor(Math.random() * 10000) + 1000,
        activeSubscriptions: Math.floor(Math.random() * 5000) + 1000,
        sales: Math.floor(Math.random() * 500) + 100,
        orders: Math.floor(Math.random() * 50) + 5,
        shares: Math.floor(Math.random() * 1000) + 100,
        likes: Math.floor(Math.random() * 2000) + 500,
      };
      
      callback(mockData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };
  
  // Initial fetch
  fetchData();
  
  // Set up interval for high-frequency updates
  const intervalId = setInterval(fetchData, interval);
  
  // Return a function to clear the interval
  return () => clearInterval(intervalId);
};