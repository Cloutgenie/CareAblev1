import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import PatientHome from './pages/PatientHome'
import PatientDashboard from './pages/PatientDashboard'
import DoctorDashboard from './pages/DoctorDashboard'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<PatientHome />} />
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App