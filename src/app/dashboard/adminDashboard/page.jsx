'use client';

import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { FaSignOutAlt, FaUserTie, FaBriefcase, FaUsers, FaChartLine, FaEnvelope } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/vgtsadmin');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/vgtsadmin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Mock data - replace with actual data from your database
  const dashboardStats = {
    totalApplicants: 1245,
    newApplicants: 42,
    openPositions: 8,
    interviewsScheduled: 12,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="bg-blue-800 text-white w-64 flex-shrink-0">
        <div className="p-4 border-b border-blue-700">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-blue-200">Welcome, {user?.email}</p>
        </div>
        <nav className="mt-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center w-full px-4 py-3 text-left ${activeTab === 'overview' ? 'bg-blue-900' : 'hover:bg-blue-700'}`}
          >
            <FaChartLine className="mr-3" /> Overview
          </button>
          <button
            onClick={() => setActiveTab('applicants')}
            className={`flex items-center w-full px-4 py-3 text-left ${activeTab === 'applicants' ? 'bg-blue-900' : 'hover:bg-blue-700'}`}
          >
            <FaUsers className="mr-3" /> Applicants
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`flex items-center w-full px-4 py-3 text-left ${activeTab === 'jobs' ? 'bg-blue-900' : 'hover:bg-blue-700'}`}
          >
            <FaBriefcase className="mr-3" /> Job Postings
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center w-full px-4 py-3 text-left ${activeTab === 'messages' ? 'bg-blue-900' : 'hover:bg-blue-700'}`}
          >
            <FaEnvelope className="mr-3" /> Messages
          </button>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-blue-700">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-left text-red-300 hover:bg-blue-700 rounded"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'applicants' && 'Manage Applicants'}
              {activeTab === 'jobs' && 'Job Postings'}
              {activeTab === 'messages' && 'Messages'}
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Last updated: {new Date().toLocaleString()}</span>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <DashboardCard
                  title="Total Applicants"
                  value={dashboardStats.totalApplicants}
                  change="+12% from last month"
                  icon={<FaUsers className="text-blue-500 text-2xl" />}
                />
                <DashboardCard
                  title="New Applicants"
                  value={dashboardStats.newApplicants}
                  change="+5 today"
                  icon={<FaUserTie className="text-green-500 text-2xl" />}
                />
                <DashboardCard
                  title="Open Positions"
                  value={dashboardStats.openPositions}
                  change="3 closing soon"
                  icon={<FaBriefcase className="text-yellow-500 text-2xl" />}
                />
                <DashboardCard
                  title="Interviews"
                  value={dashboardStats.interviewsScheduled}
                  change="2 today"
                  icon={<FaEnvelope className="text-purple-500 text-2xl" />}
                />
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <ActivityItem
                    user="John Doe"
                    action="applied for"
                    position="Senior Developer"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    user="Jane Smith"
                    action="was interviewed for"
                    position="UX Designer"
                    time="5 hours ago"
                  />
                  <ActivityItem
                    user="Mike Johnson"
                    action="was hired for"
                    position="Project Manager"
                    time="1 day ago"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applicants' && (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">All Applicants</h2>
              <p className="text-gray-600">Applicant list will be displayed here.</p>
              {/* Add applicant table/component here */}
            </div>
          )}

          {activeTab === 'jobs' && (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Job Postings</h2>
              <p className="text-gray-600">Job postings will be managed here.</p>
              {/* Add job postings management here */}
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Messages</h2>
              <p className="text-gray-600">Messages will be displayed here.</p>
              {/* Add messages component here */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Reusable components
const DashboardCard = ({ title, value, change, icon }) => (
  <div className="bg-white rounded-lg shadow p-6 flex items-center">
    <div className="p-3 rounded-full bg-blue-50 mr-4">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <span className="ml-2 text-sm text-green-600">{change}</span>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ user, action, position, time }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
      <FaUserTie className="h-5 w-5 text-blue-600" />
    </div>
    <div className="ml-4">
      <div className="flex items-center text-sm">
        <p className="font-medium text-gray-900">{user}</p>
        <span className="text-gray-500 mx-1">{action}</span>
        <p className="font-medium text-gray-900">{position}</p>
      </div>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </div>
);

export default AdminDashboard;