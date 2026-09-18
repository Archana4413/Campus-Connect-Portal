// Campus Connect Portal - PortalView Parent Component (Experiment 5)
// Demonstrates Component-Based Architecture, Props composition, State management, and Event handling

import { useState } from 'react';
import PortalHeader from './PortalHeader.jsx';
import TabBar from './TabBar.jsx';
import ItemCard from './ItemCard.jsx';
import DetailModal from './DetailModal.jsx';

export default function PortalView({ role = 'student', onBack }) {
  // 1. Tab State: manages active view tab
  const [activeTab, setActiveTab] = useState('notices');

  // 2. Modal State: manages active detail popup
  const [selectedItem, setSelectedItem] = useState(null);

  // 3. Dynamic Assignment State: demonstrates state updates upon user action
  const [assignments, setAssignments] = useState([
    {
      id: 'asg-1',
      title: 'CS3301 Full Stack Lab - Experiment 5',
      meta: 'Instructor: Prof. K. Rao • Due: Sept 18, 2026 • Max Marks: 20',
      status: 'submitted',
      description: 'Implement modular frontend application using React component architecture with props and state.'
    },
    {
      id: 'asg-2',
      title: 'CS3302 DBMS - Normalization & Schema Design',
      meta: 'Instructor: Dr. S. Sharma • Due: Sept 22, 2026 • Max Marks: 25',
      status: 'pending',
      description: 'Design BCNF and 3NF relational schemas for a real-time university course registration system.'
    },
    {
      id: 'asg-3',
      title: 'CS3303 Algorithms - Dynamic Programming Lab',
      meta: 'Instructor: Prof. A. Mehta • Due: Sept 26, 2026 • Max Marks: 30',
      status: 'pending',
      description: 'Solve the 0/1 Knapsack and Longest Common Subsequence problems with optimal runtime analysis.'
    }
  ]);

  // 4. Dynamic Attendance State: demonstrates numerical state updates and progress bar calculation
  const [attendance, setAttendance] = useState([
    { id: 'att-1', course: 'CS3301 Full Stack Development', attended: 28, total: 32 },
    { id: 'att-2', course: 'CS3302 Database Management Systems', attended: 30, total: 34 },
    { id: 'att-3', course: 'CS3303 Design & Analysis of Algorithms', attended: 27, total: 30 },
    { id: 'att-4', course: 'CS3304 Software Engineering Practices', attended: 24, total: 28 }
  ]);

  // 5. Profile Status State
  const [profileStatus, setProfileStatus] = useState('Enrolled - Semester V (Academic Year 2026-27)');

  // Static Notice Data matching classroom projector demonstration
  const studentNotices = [
    {
      id: 'not-1',
      title: 'Mid-Term Exam Schedule Released',
      meta: 'SOCSE • Sept 10, 2026',
      badge: 'Urgent',
      badgeType: 'urgent',
      description: 'The Mid-Term Examination timetable for Odd Semester 2026 is officially published. All students are advised to check their respective hall tickets on the university portal.',
      details: 'Exams commence October 3, 2026. Hall tickets will be distributed in departmental offices from Sept 25.'
    },
    {
      id: 'not-2',
      title: 'Hackathon Registration Open',
      meta: 'RVU Tech Club • Sept 15, 2026',
      badge: 'New',
      badgeType: 'new',
      description: 'Annual RV University National Hackathon 2026. Build innovative solutions for smart campus, edtech, and decentralized platforms.',
      details: 'Teams of 2 to 4 members. Total prize pool ₹1,50,000. Registration closes Sept 28, 2026.'
    },
    {
      id: 'not-3',
      title: 'Academic Calendar Update - Odd Sem 2026',
      meta: 'Controller of Examinations • Sept 05, 2026',
      badge: 'Official',
      badgeType: 'new',
      description: 'Revised timelines for internal continuous assessments, laboratory evaluations, and mid-semester reviews.',
      details: 'All assessments must conclude before Diwali recess as per academic senate directives.'
    },
    {
      id: 'not-4',
      title: 'Guest Lecture on Cloud & Edge Computing',
      meta: 'ACM Student Chapter • Sept 20, 2026',
      badge: 'Event',
      badgeType: 'new',
      description: 'Distinguished technical session by Principal Cloud Architect from Google Cloud on Kubernetes orchestration.',
      details: 'Venue: SOCSE Seminar Hall B. Date: Sept 24, 2026 at 11:00 AM. Refreshments provided.'
    }
  ];

  // Event handler to toggle assignment submission state
  const handleToggleAssignment = (id) => {
    setAssignments((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'submitted' ? 'pending' : 'submitted'
            }
          : item
      )
    );
  };

  // Event handler to simulate attendance increment
  const handleMarkAttendance = (id) => {
    setAttendance((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              attended: item.attended + 1,
              total: item.total + 1
            }
          : item
      )
    );
  };

  // Define tab navigation based on role
  const getTabsForRole = () => {
    switch (role) {
      case 'faculty':
        return [
          { id: 'notices', label: 'Post Notices & Events' },
          { id: 'assignments', label: 'Create Assignments' },
          { id: 'attendance', label: 'Mark Attendance' },
          { id: 'submissions', label: 'View Submissions' }
        ];
      case 'admin':
        return [
          { id: 'users', label: 'Manage Users' },
          { id: 'notices', label: 'Manage Notices & Events' },
          { id: 'reports', label: 'View System Reports' },
          { id: 'settings', label: 'System Settings' }
        ];
      case 'student':
      default:
        return [
          { id: 'notices', label: 'Notices & Events' },
          { id: 'assignments', label: 'Assignments' },
          { id: 'attendance', label: 'Track Attendance' },
          { id: 'profile', label: 'Profile' }
        ];
    }
  };

  const getRoleHeaderInfo = () => {
    switch (role) {
      case 'faculty':
        return {
          title: 'Faculty Portal',
          icon: '👨‍🏫',
          subtitle: 'Welcome, RVU Faculty Member'
        };
      case 'admin':
        return {
          title: 'Admin Portal',
          icon: '🛡️',
          subtitle: 'Welcome, RVU Administrator'
        };
      case 'student':
      default:
        return {
          title: 'Student Portal',
          icon: '🎓',
          subtitle: 'Welcome, RVU Student'
        };
    }
  };

  const headerInfo = getRoleHeaderInfo();
  const tabs = getTabsForRole();

  return (
    <section className="portal-container" id="active-portal-view">
      {/* 1. Header Banner */}
      <PortalHeader
        title={headerInfo.title}
        icon={headerInfo.icon}
        subtitle={headerInfo.subtitle}
        onBack={onBack}
      />

      {/* 2. Navigation Tabs */}
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId)}
      />

      {/* 3. Tab Content View */}
      <div className="portal-body">
        {/* STUDENT - NOTICES & EVENTS TAB */}
        {activeTab === 'notices' && (
          <div>
            <h3 className="portal-section-heading">📢 Campus Notices & Events</h3>
            <div className="item-list">
              {studentNotices.map((notice) => (
                <ItemCard
                  key={notice.id}
                  title={notice.title}
                  meta={notice.meta}
                  badge={notice.badge}
                  badgeType={notice.badgeType}
                  actionText="View Details"
                  onAction={() => setSelectedItem(notice)}
                />
              ))}
            </div>
          </div>
        )}

        {/* STUDENT - ASSIGNMENTS TAB */}
        {activeTab === 'assignments' && (
          <div>
            <h3 className="portal-section-heading">📝 Enrolled Course Assignments</h3>
            <div className="item-list">
              {assignments.map((asg) => {
                const isSubmitted = asg.status === 'submitted';
                return (
                  <ItemCard
                    key={asg.id}
                    title={asg.title}
                    meta={asg.meta}
                    badge={isSubmitted ? 'Submitted ✓' : 'Pending'}
                    badgeType={isSubmitted ? 'submitted' : 'pending'}
                  >
                    <div className="action-group" style={{ marginTop: '10px' }}>
                      <button
                        type="button"
                        className="btn-submit-action"
                        style={{
                          backgroundColor: isSubmitted ? '#64748b' : '#107c41'
                        }}
                        onClick={() => handleToggleAssignment(asg.id)}
                      >
                        {isSubmitted ? 'Undo Submission' : 'Submit Assignment'}
                      </button>
                      <button
                        type="button"
                        className="btn-view-details"
                        onClick={() => setSelectedItem(asg)}
                      >
                        View Brief
                      </button>
                    </div>
                  </ItemCard>
                );
              })}
            </div>
          </div>
        )}

        {/* STUDENT - TRACK ATTENDANCE TAB */}
        {activeTab === 'attendance' && (
          <div>
            <h3 className="portal-section-heading">📊 Course Attendance Tracker</h3>
            <div className="item-list">
              {attendance.map((att) => {
                const pct = Math.round((att.attended / att.total) * 100);
                const isGood = pct >= 85;
                return (
                  <ItemCard
                    key={att.id}
                    title={att.course}
                    meta={`Attended: ${att.attended} / ${att.total} Lectures (${pct}%)`}
                    badge={`${pct}%`}
                    badgeType={isGood ? 'new' : 'urgent'}
                    actionText="+ Check In"
                    actionBtnClass="btn-submit-action"
                    onAction={() => handleMarkAttendance(att.id)}
                  >
                    <div className="attendance-progress-bar-container">
                      <div
                        className="attendance-progress-bar"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: isGood ? '#107c41' : '#b91c1c'
                        }}
                      />
                    </div>
                  </ItemCard>
                );
              })}
            </div>
          </div>
        )}

        {/* STUDENT - PROFILE TAB */}
        {activeTab === 'profile' && (
          <div>
            <h3 className="portal-section-heading">👤 Student Academic Profile</h3>
            <div className="profile-card-grid">
              <div className="profile-stat-box">
                <span className="profile-stat-label">Full Name</span>
                <p className="profile-stat-value">Student</p>
              </div>
              <div className="profile-stat-box">
                <span className="profile-stat-label">University SRN</span>
                <p className="profile-stat-value">RVU2026CS001</p>
              </div>
              <div className="profile-stat-box">
                <span className="profile-stat-label">Program & School</span>
                <p className="profile-stat-value">B.Sc (Hons) Computer Science • SOCSE</p>
              </div>
              <div className="profile-stat-box">
                <span className="profile-stat-label">Semester</span>
                <p className="profile-stat-value">Semester V (Odd Sem 2026)</p>
              </div>
              <div className="profile-stat-box">
                <span className="profile-stat-label">Cumulative GPA</span>
                <p className="profile-stat-value">9.42 / 10.0</p>
              </div>
              <div className="profile-stat-box">
                <span className="profile-stat-label">Enrollment Status</span>
                <p className="profile-stat-value" style={{ color: '#107c41' }}>
                  {profileStatus}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <button
                type="button"
                className="btn-submit-action"
                onClick={() => {
                  const newStatus = prompt('Update Profile Bio / Status:', profileStatus);
                  if (newStatus) setProfileStatus(newStatus);
                }}
              >
                ✏️ Edit Student Status
              </button>
            </div>
          </div>
        )}

        {/* ── ADMIN: MANAGE USERS ── */}
        {role === 'admin' && activeTab === 'users' && (
          <div>
            <h3 className="portal-section-heading">👥 User Registry Management</h3>
            <div className="item-list">
              {[
                { id: 'u1', name: 'Rohan Mehta',    srn: 'RVU2026CS011', role: 'Student',  dept: 'SOCSE', status: 'Active' },
                { id: 'u2', name: 'Dr. S. Sharma',  srn: 'FAC-CS-004',   role: 'Faculty',  dept: 'SOCSE', status: 'Active' },
                { id: 'u3', name: 'Priya Nair',     srn: 'RVU2026CS019', role: 'Student',  dept: 'SOCSE', status: 'Active' },
                { id: 'u4', name: 'Prof. K. Rao',   srn: 'FAC-CS-001',   role: 'Faculty',  dept: 'SOCSE', status: 'Active' },
                { id: 'u5', name: 'Arjun Das',      srn: 'RVU2026CS032', role: 'Student',  dept: 'SOCSE', status: 'On Hold' },
              ].map((user) => (
                <ItemCard
                  key={user.id}
                  title={user.name}
                  meta={`SRN: ${user.srn} • Role: ${user.role} • Dept: ${user.dept}`}
                  badge={user.status}
                  badgeType={user.status === 'Active' ? 'new' : 'urgent'}
                >
                  <div className="action-group" style={{ marginTop: '10px' }}>
                    <button type="button" className="btn-view-details">✏️ Edit</button>
                    <button type="button" className="btn-submit-action" style={{ backgroundColor: '#b91c1c', marginLeft: '8px' }}>🗑 Remove</button>
                  </div>
                </ItemCard>
              ))}
            </div>
          </div>
        )}

        {/* ── ADMIN: VIEW SYSTEM REPORTS ── */}
        {role === 'admin' && activeTab === 'reports' && (
          <div>
            <h3 className="portal-section-heading">📊 System Reports & Analytics</h3>
            <div className="profile-card-grid">
              {[
                { label: 'Total Enrolled Students',  value: '1,248',  icon: '🎓' },
                { label: 'Active Faculty Members',   value: '86',     icon: '👨‍🏫' },
                { label: 'Circulars Published',      value: '34',     icon: '📢' },
                { label: 'Assignments Submitted',    value: '4,512',  icon: '📝' },
                { label: 'Avg. Campus Attendance',   value: '88.4%',  icon: '📈' },
                { label: 'System Uptime',            value: '99.97%', icon: '🖥️' },
              ].map((stat) => (
                <div key={stat.label} className="profile-stat-box">
                  <span className="profile-stat-label">{stat.icon} {stat.label}</span>
                  <p className="profile-stat-value" style={{ color: '#107c41', fontSize: '1.4rem' }}>{stat.value}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <button type="button" className="btn-submit-action">⬇️ Export Report (CSV)</button>
              <button type="button" className="btn-view-details" style={{ marginLeft: '10px' }}>🔄 Refresh Data</button>
            </div>
          </div>
        )}

        {/* ── ADMIN: SYSTEM SETTINGS ── */}
        {role === 'admin' && activeTab === 'settings' && (
          <div>
            <h3 className="portal-section-heading">⚙️ System Configuration</h3>
            <div className="item-list">
              {[
                { label: 'Maintenance Mode',       desc: 'Temporarily disable student portal access', active: false },
                { label: 'Email Notifications',    desc: 'Send automated circular alerts to registered emails', active: true },
                { label: 'Attendance Auto-Lock',   desc: 'Prevent attendance edits after 48 hours', active: true },
                { label: 'Public Registration',    desc: 'Allow new student self-registration', active: false },
              ].map((setting) => (
                <div key={setting.label} className="profile-stat-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px' }}>
                  <div>
                    <p style={{ fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>{setting.label}</p>
                    <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{setting.desc}</p>
                  </div>
                  <span
                    className={`badge badge-${setting.active ? 'new' : 'pending'}`}
                    style={{ flexShrink: 0, marginLeft: '16px' }}
                  >
                    {setting.active ? 'ON' : 'OFF'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FACULTY: CREATE ASSIGNMENTS ── */}
        {role === 'faculty' && activeTab === 'assignments' && (
          <div>
            <h3 className="portal-section-heading">📝 Published Assignments</h3>
            <div className="item-list">
              {[
                { id: 'fa1', title: 'CS3301 Lab – Experiment 5 (React Components)',    meta: 'Due: Sept 18, 2026 • Max Marks: 20 • Submissions: 38/42', status: 'Open' },
                { id: 'fa2', title: 'CS3301 Lab – Experiment 4 (DOM & Events)',         meta: 'Due: Sept 11, 2026 • Max Marks: 20 • Submissions: 42/42', status: 'Closed' },
                { id: 'fa3', title: 'CS3301 Mid-Term Project – Full Stack Application', meta: 'Due: Oct 5, 2026  • Max Marks: 50 • Submissions: 12/42', status: 'Open' },
              ].map((asg) => (
                <ItemCard key={asg.id} title={asg.title} meta={asg.meta} badge={asg.status} badgeType={asg.status === 'Open' ? 'new' : 'pending'}>
                  <div className="action-group" style={{ marginTop: '10px' }}>
                    <button type="button" className="btn-view-details">👁 View Submissions</button>
                    <button type="button" className="btn-submit-action" style={{ marginLeft: '8px' }}>✏️ Edit</button>
                  </div>
                </ItemCard>
              ))}
            </div>
            <div style={{ marginTop: '16px' }}>
              <button type="button" className="btn-submit-action">＋ Create New Assignment</button>
            </div>
          </div>
        )}

        {/* ── FACULTY: MARK ATTENDANCE ── */}
        {role === 'faculty' && activeTab === 'attendance' && (
          <div>
            <h3 className="portal-section-heading">✅ Class Attendance Registry</h3>
            <div className="item-list">
              {[
                { id: 'fc1', name: 'Rohan Mehta',  srn: 'CS011', present: true },
                { id: 'fc2', name: 'Priya Nair',   srn: 'CS019', present: true },
                { id: 'fc3', name: 'Arjun Das',    srn: 'CS032', present: false },
                { id: 'fc4', name: 'Sneha Patil',  srn: 'CS045', present: true },
                { id: 'fc5', name: 'Kiran Reddy',  srn: 'CS058', present: false },
              ].map((stu) => (
                <ItemCard key={stu.id} title={stu.name} meta={`SRN: RVU2026${stu.srn} • CS3301 Full Stack Development`} badge={stu.present ? 'Present' : 'Absent'} badgeType={stu.present ? 'new' : 'urgent'}>
                  <div className="action-group" style={{ marginTop: '10px' }}>
                    <button type="button" className="btn-submit-action" style={{ backgroundColor: stu.present ? '#64748b' : '#107c41' }}>
                      {stu.present ? 'Mark Absent' : 'Mark Present'}
                    </button>
                  </div>
                </ItemCard>
              ))}
            </div>
            <div style={{ marginTop: '16px' }}>
              <button type="button" className="btn-submit-action">💾 Save Attendance</button>
            </div>
          </div>
        )}

        {/* ── FACULTY: VIEW SUBMISSIONS ── */}
        {role === 'faculty' && activeTab === 'submissions' && (
          <div>
            <h3 className="portal-section-heading">📥 Assignment Submission Overview</h3>
            <div className="profile-card-grid">
              {[
                { label: 'Total Submissions',   value: '92',  icon: '📨' },
                { label: 'Pending Review',       value: '17',  icon: '🕐' },
                { label: 'Graded',               value: '75',  icon: '✅' },
                { label: 'Late Submissions',     value: '8',   icon: '⚠️' },
              ].map((stat) => (
                <div key={stat.label} className="profile-stat-box">
                  <span className="profile-stat-label">{stat.icon} {stat.label}</span>
                  <p className="profile-stat-value" style={{ color: '#107c41', fontSize: '1.4rem' }}>{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="item-list" style={{ marginTop: '20px' }}>
              {[
                { name: 'Rohan Mehta',  asg: 'Experiment 5', submitted: 'Sept 17, 2026', grade: '19/20' },
                { name: 'Priya Nair',   asg: 'Experiment 5', submitted: 'Sept 18, 2026', grade: 'Pending' },
                { name: 'Sneha Patil',  asg: 'Experiment 5', submitted: 'Sept 18, 2026', grade: 'Pending' },
              ].map((sub) => (
                <ItemCard key={sub.name} title={sub.name} meta={`Assignment: ${sub.asg} • Submitted: ${sub.submitted}`} badge={sub.grade === 'Pending' ? 'Pending' : sub.grade} badgeType={sub.grade === 'Pending' ? 'pending' : 'new'}>
                  <div className="action-group" style={{ marginTop: '10px' }}>
                    <button type="button" className="btn-view-details">📄 View File</button>
                    {sub.grade === 'Pending' && <button type="button" className="btn-submit-action" style={{ marginLeft: '8px' }}>✍️ Grade</button>}
                  </div>
                </ItemCard>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. Modal Dialog for Item Details */}
      <DetailModal
        isOpen={Boolean(selectedItem)}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
