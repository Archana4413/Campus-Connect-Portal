// Campus Connect Portal - App.jsx
// Experiment 5: Building Modular Frontend Applications Using a Component-Based Approach (React)

import { useState } from 'react';
import RoleCard from './components/RoleCard.jsx';
import PortalView from './components/PortalView.jsx';
import AuthModule from './components/AuthModule.jsx';
import './portal.css';

function App() {
  // Top-level application state: currently selected portal view
  const [activeRole, setActiveRole] = useState('student');

  // Event handler for role selection with smooth scroll into view
  const handleSelectRole = (role) => {
    setActiveRole(role);
    // Smooth scroll down to the active portal view
    setTimeout(() => {
      const portalElem = document.getElementById('active-portal-view');
      if (portalElem) {
        portalElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleClosePortal = () => {
    setActiveRole(null);
  };

  return (
    <div className="campus-app-root">
      {/* 1. Interactive Role Selection Section */}
      <section id="roles" className="section-container bg-light" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="section-title">Choose Your Portal View</h2>
        <p className="section-subtitle" style={{ marginBottom: '25px' }}>
          Select a role below to explore customized dashboards, modular views, and interactive state features
        </p>

        <div className="roles-grid">
          {/* Reusable Child Component 1: Student Role Card */}
          <RoleCard
            title="Student Portal"
            icon="👨‍🎓"
            features={[
              'View Notices & Events',
              'Submit Assignments',
              'Track Attendance',
              'Update Profile'
            ]}
            borderClass="student-border"
            bgBtnClass="student-bg"
            btnText="Access Student View"
            isActive={activeRole === 'student'}
            onSelect={() => handleSelectRole('student')}
          />

          {/* Reusable Child Component 2: Faculty Role Card */}
          <RoleCard
            title="Faculty Portal"
            icon="👨‍🏫"
            features={[
              'Post Notices & Events',
              'Create Assignments',
              'Mark Attendance',
              'View Submissions'
            ]}
            borderClass="faculty-border"
            bgBtnClass="faculty-bg"
            btnText="Access Faculty View"
            isActive={activeRole === 'faculty'}
            onSelect={() => handleSelectRole('faculty')}
          />

          {/* Reusable Child Component 3: Admin Role Card */}
          <RoleCard
            title="Admin Portal"
            icon="🛡️"
            features={[
              'Manage Users',
              'Manage Notices & Events',
              'View System Reports',
              'System Settings'
            ]}
            borderClass="admin-border"
            bgBtnClass="admin-bg"
            btnText="Access Admin View"
            isActive={activeRole === 'admin'}
            onSelect={() => handleSelectRole('admin')}
          />
        </div>

        {/* 2. Dynamic Portal Container (Shown when a role is selected) */}
        {activeRole && (
          <PortalView
            role={activeRole}
            onBack={handleClosePortal}
          />
        )}
      </section>

      {/* 3. Student Registration & Authentication Module */}
      <section id="register" className="registration-section" style={{ width: '100%' }}>
        <AuthModule initialMode="register" />
      </section>
    </div>
  );
}

export default App;