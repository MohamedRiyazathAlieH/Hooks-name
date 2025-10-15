// src/components/ui-set-1/ClassicDashboardLocal.js
import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import StatCard from '../common/StatCard';
import { useDashboardData } from '../../hook/useDashboardData';

const ClassicDashboardLocal = () => {
  const { data, loading } = useDashboardData(5000); // Refresh every 5 seconds

  if (loading || !data) {
    return (
      <Container fluid className="py-5">
        <Alert variant="info" className="text-center">
          Loading dashboard data...
        </Alert>
      </Container>
    );
  }

  const stats = [
    {
      title: "Today's Sales",
      value: data.todaySales.toLocaleString(),
      change: '7% increase',
      changeType: 'increase',
      icon: 'ti-shopping-cart',
      iconBg: 'bg-primary',
    },
    {
      title: 'Growth Rate',
      value: `${data.growthRate}%`,
      change: '1% decrease',
      changeType: 'decrease',
      icon: 'ti-trending-up',
      iconBg: 'bg-success',
    },
    {
      title: 'Total Users',
      value: data.totalUsers.toLocaleString(),
      change: '2% increase',
      changeType: 'increase',
      icon: 'ti-users',
      iconBg: 'bg-info',
    },
    {
      title: 'Active Users',
      value: data.activeUsers.toLocaleString(),
      change: '1% decrease',
      changeType: 'decrease',
      icon: 'ti-user-check',
      iconBg: 'bg-warning',
    },
  ];

  return (
    <Container fluid className="py-4">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <h1 className="h3 mb-0">Admin Dashboard</h1>
          <p className="text-muted">Real-time data updates every 5 seconds</p>
        </Col>
      </Row>

      {/* Stat Cards */}
      <Row className="row-deck row-cards mb-4">
        {stats.map((stat, idx) => (
          <Col md={6} lg={3} key={idx}>
            <StatCard
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeType={stat.changeType}
              icon={stat.icon}
              iconBg={stat.iconBg}
            />
          </Col>
        ))}
      </Row>

      {/* Additional dashboard content can go here */}
    </Container>
  );
};

export default ClassicDashboardLocal;
