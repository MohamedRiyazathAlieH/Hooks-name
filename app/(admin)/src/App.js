import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import { ClassicDashboard, ModernDashboard, MinimalDashboard } from './components/Dashboard';
import Users from './components/users';
import Settings from './components/Settings';

function App() {
  const [activeUI, setActiveUI] = useState(1);

  const renderDashboard = () => {
    switch (activeUI) {
      case 1:
        return <ClassicDashboard />;
      case 2:
        return <ModernDashboard />;
      case 3:
        return <MinimalDashboard />;
      default:
        return <ClassicDashboard />;
    }
  };

  return (
    <Router>
      <div className="App">
        <Navigation activeUI={activeUI} setActiveUI={setActiveUI} />
        <Routes>
          <Route path="/" element={renderDashboard()} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
