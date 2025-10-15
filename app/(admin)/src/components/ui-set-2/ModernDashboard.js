// src/components/ui-set-2/ModernDashboard.js
import React from 'react';
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import { useDashboardData } from '../../hook/useDashboardData';

const bgClasses = {
  primary: 'bg-primary text-primary',
  success: 'bg-success text-success',
  info: 'bg-info text-info',
  warning: 'bg-warning text-warning',
  danger: 'bg-danger text-danger',
  secondary: 'bg-secondary text-secondary',
};

const ModernDashboard = () => {
  const { data, loading } = useDashboardData(3000);

  if (loading || !data) {
    return (
      <Container fluid className="p-4">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Container>
    );
  }

  const stats = [
    { title: "Today's Sales", value: data.todaySales.toLocaleString(), icon: "ti-shopping-cart", bg: 'primary', change: "7%", changeType: "increase", progress: 70 },
    { title: "Growth Rate", value: `${data.growthRate}%`, icon: "ti-trending-up", bg: 'success', change: "1%", changeType: "decrease", progress: 78 },
    { title: "Total Users", value: data.totalUsers.toLocaleString(), icon: "ti-users", bg: 'info', change: "2%", changeType: "increase", progress: 60 },
    { title: "Active Users", value: data.activeUsers.toLocaleString(), icon: "ti-user-check", bg: 'warning', change: "1%", changeType: "decrease", progress: 40 },
  ];

  const activities = [
    { title: "Sales", value: data.sales, icon: "ti-shopping-cart", bg: 'primary' },
    { title: "Orders", value: data.orders, icon: "ti-package", bg: 'success' },
    { title: "Shares", value: data.shares, icon: "ti-share", bg: 'info' },
    { title: "Likes", value: data.likes, icon: "ti-heart", bg: 'danger' },
  ];

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h1 className="h2 mb-1">Modern Dashboard</h1>
          <p className="text-muted">Real-time data updates every 3 seconds</p>
        </Col>
        <Col xs="auto">
          <Badge bg="success" className="p-2">
            <i className="ti ti-circle-filled me-1"></i> Live
          </Badge>
        </Col>
      </Row>

      <Row className="g-3 mb-4">
        {stats.map((stat, idx) => (
          <Col md={6} lg={3} key={idx}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="text-muted mb-1">{stat.title}</p>
                    <h2 className="mb-0">{stat.value}</h2>
                  </div>
                  <div className={`avatar ${bgClasses[stat.bg]} bg-opacity-10`}>
                    <i className={`ti ${stat.icon}`}></i>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className={stat.changeType === "increase" ? "text-success me-1" : "text-danger me-1"}>
                    {stat.changeType === "increase" ? "↑" : "↓"}
                  </span>
                  <span className={stat.changeType === "increase" ? "text-success" : "text-danger"}>{stat.change}</span>
                  <span className="text-muted ms-1">{stat.changeType === "increase" ? "increase" : "decrease"}</span>
                </div>
                <ProgressBar now={stat.progress} className="mt-3" style={{ height: '4px' }} variant={stat.bg} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-white border-0 pt-4 pb-3">
          <h5 className="mb-0">Activity Overview</h5>
        </Card.Header>
        <Card.Body className="pt-0">
          <Row className="g-3">
            {activities.map((item, idx) => (
              <Col md={3} key={idx}>
                <div className={`d-flex align-items-center p-3 ${bgClasses[item.bg]} bg-opacity-10 rounded`}>
                  <div className={`avatar ${bgClasses[item.bg]} text-white me-3`}>
                    <i className={`ti ${item.icon}`}></i>
                  </div>
                  <div>
                    <div className="h4 mb-0">{item.value}</div>
                    <div className="text-muted">{item.title}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ModernDashboard;
