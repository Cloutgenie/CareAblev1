import React, { useState, useEffect } from 'react'
import { Users, Activity, DollarSign, Calendar, BarChart2, Settings, Search } from 'lucide-react'
import DashboardCard from '../components/DashboardCard'
import DashboardStat from '../components/DashboardStat'
import RecentActivityList from '../components/RecentActivityList'
import UserAnalytics from '../components/UserAnalytics'
import SystemSettings from '../components/SystemSettings'
import UserManagement from '../components/UserManagement'
import AppointmentOverview from '../components/AppointmentOverview'
import RevenueChart from '../components/RevenueChart'

interface DashboardStatData {
  title: string
  value: string
  icon: React.ReactNode
  change: string
  trend: 'up' | 'down'
}

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStatData[]>([])
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    // Fetch dashboard stats
    // This is a mock implementation. In a real app, you'd call your API here.
    setStats([
      { title: 'Total Users', value: '5,423', icon: <Users />, change: '+12%', trend: 'up' },
      { title: 'Active Appointments', value: '1,234', icon: <Calendar />, change: '+5%', trend: 'up' },
      { title: 'Revenue', value: '$54,321', icon: <DollarSign />, change: '+8%', trend: 'up' },
      { title: 'Patient Satisfaction', value: '92%', icon: <Activity />, change: '-2%', trend: 'down' },
    ])
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
      </header>

      <nav className="mb-8">
        <ul className="flex space-x-4 border-b">
          {['overview', 'users', 'appointments', 'settings'].map((tab) => (
            <li key={tab}>
              <button
                className={`py-2 px-4 ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {activeTab === 'overview' && (
        <main className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <DashboardStat key={index} stat={stat} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <DashboardCard
              title="Recent Activity"
              icon={<Activity className="text-blue-500" />}
              content={<RecentActivityList />}
            />
            <DashboardCard
              title="User Analytics"
              icon={<BarChart2 className="text-green-500" />}
              content={<UserAnalytics />}
            />
          </div>

          <DashboardCard
            title="Revenue Overview"
            icon={<DollarSign className="text-yellow-500" />}
            content={<RevenueChart />}
          />
        </main>
      )}

      {activeTab === 'users' && (
        <UserManagement />
      )}

      {activeTab === 'appointments' && (
        <AppointmentOverview />
      )}

      {activeTab === 'settings' && (
        <DashboardCard
          title="System Settings"
          icon={<Settings className="text-purple-500" />}
          content={<SystemSettings />}
        />
      )}
    </div>
  )
}

export default AdminDashboard