// src/components/ui-set-3/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { useDashboardData } from '../../hook/useDashboardData';

const Dashboard = () => {
  const { data, loading } = useDashboardData(10000); // Update every 10 seconds
  
  if (loading) {
    return (
      <Container fluid className="p-4">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Container>
    );
  }
  
  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h1 className="h3 mb-1">Minimal Dashboard</h1>
          <p className="text-muted">Real-time data updates every 10 seconds</p>
        </Col>
      </Row>
      
      <Row className="g-4 mb-4">
        <Col md={6} lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-muted mb-0">Sales & Revenue</h6>
                <span className="badge bg-success">Live</span>
              </div>
              <div className="row g-3">
                <Col xs={6}>
                  <div className="border-end pe-3">
                    <h4 className="mb-1">{data.todaySales.toLocaleString()}</h4>
                    <p className="text-muted mb-0 small">Today's Sales</p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="ps-3">
                    <h4 className="mb-1">${data.revenue.toLocaleString()}</h4>
                    <p className="text-muted mb-0 small">Revenue</p>
                  </div>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-muted mb-0">Users</h6>
                <span className="badge bg-success">Live</span>
              </div>
              <div className="row g-3">
                <Col xs={6}>
                  <div className="border-end pe-3">
                    <h4 className="mb-1">{data.totalUsers.toLocaleString()}</h4>
                    <p className="text-muted mb-0 small">Total Users</p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="ps-3">
                    <h4 className="mb-1">{data.activeUsers.toLocaleString()}</h4>
                    <p className="text-muted mb-0 small">Active Users</p>
                  </div>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-muted mb-0">Growth</h6>
                <span className="badge bg-success">Live</span>
              </div>
              <div className="row g-3">
                <Col xs={6}>
                  <div className="border-end pe-3">
                    <h4 className="mb-1">{data.growthRate}%</h4>
                    <p className="text-muted mb-0 small">Growth Rate</p>
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="ps-3">
                    <h4 className="mb-1">{data.salesConversionRate}%</h4>
                    <p className="text-muted mb-0 small">Conversion</p>
                  </div>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="g-4">
        <Col md={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <h6 className="text-muted mb-3">Customer Metrics</h6>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>New Customers</span>
                  <strong>{data.newCustomers.toLocaleString()}</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Active Subscriptions</span>
                  <strong>{data.activeSubscriptions.toLocaleString()}</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Sales</span>
                  <strong>{data.sales}</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Orders</span>
                  <strong>{data.orders}</strong>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <h6 className="text-muted mb-3">Social Metrics</h6>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Shares</span>
                  <strong>{data.shares}</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Likes</span>
                  <strong>{data.likes}</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Comments</span>
                  <strong>234</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Followers</span>
                  <strong>12,453</strong>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;