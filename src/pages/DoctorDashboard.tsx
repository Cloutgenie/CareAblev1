import React, { useState, useEffect } from 'react'
import { Calendar, User, FileText, MessageSquare, Activity, Clock, Search } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import DashboardCard from '../components/DashboardCard'
import AppointmentItem from '../components/AppointmentItem'
import PatientItem from '../components/PatientItem'
import QuickAction from '../components/QuickAction'
import SearchBar from '../components/SearchBar'
import PatientDetails from '../components/PatientDetails'
import AppointmentCalendar from '../components/AppointmentCalendar'

interface Appointment {
  id: string
  patientName: string
  time: string
  type: 'In-person' | 'Telemedicine'
  reason?: string
}

interface Patient {
  id: string
  name: string
  age: number
  lastVisit: string
}

const DoctorDashboard: React.FC = () => {
  const { user } = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [recentPatients, setRecentPatients] = useState<Patient[]>([])
  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([])
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([])
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    // Fetch appointments and recent patients
    // This is a mock implementation. In a real app, you'd call your API here.
    setAppointments([
      { id: '1', patientName: 'John Doe', time: '09:00 AM', type: 'In-person', reason: 'Annual check-up' },
      { id: '2', patientName: 'Jane Smith', time: '10:30 AM', type: 'Telemedicine', reason: 'Follow-up consultation' },
      { id: '3', patientName: 'Alice Johnson', time: '02:00 PM', type: 'In-person', reason: 'New patient consultation' },
    ])

    setRecentPatients([
      { id: '1', name: 'John Doe', age: 45, lastVisit: '2024-02-28' },
      { id: '2', name: 'Jane Smith', age: 32, lastVisit: '2024-03-01' },
      { id: '3', name: 'Alice Johnson', age: 58, lastVisit: '2024-03-05' },
    ])
  }, [])

  useEffect(() => {
    setFilteredAppointments(appointments)
    setFilteredPatients(recentPatients)
  }, [appointments, recentPatients])

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    setFilteredAppointments(appointments.filter(appointment => 
      appointment.patientName.toLowerCase().includes(lowercaseQuery) ||
      appointment.reason?.toLowerCase().includes(lowercaseQuery)
    ))
    setFilteredPatients(recentPatients.filter(patient => 
      patient.name.toLowerCase().includes(lowercaseQuery)
    ))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome, Dr. {user?.name}</h1>
      </header>

      <nav className="mb-8">
        <ul className="flex space-x-4 border-b">
          {['overview', 'patients', 'appointments', 'messages'].map((tab) => (
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

      <SearchBar onSearch={handleSearch} placeholder="Search patients or appointments..." />

      {activeTab === 'overview' && (
        <main className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            title="Today's Appointments"
            icon={<Calendar className="text-blue-500" />}
            className="col-span-2"
          >
            <div className="space-y-4">
              {filteredAppointments.map(appointment => (
                <AppointmentItem key={appointment.id} appointment={appointment} />
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Recent Patients"
            icon={<User className="text-green-500" />}
          >
            <div className="space-y-4">
              {filteredPatients.map(patient => (
                <PatientItem 
                  key={patient.id} 
                  patient={patient} 
                  onClick={() => setSelectedPatient(patient.id)}
                />
              ))}
            </div>
          </DashboardCard>

          <DashboardCard
            title="Quick Actions"
            icon={<Activity className="text-purple-500" />}
          >
            <div className="grid grid-cols-2 gap-4">
              <QuickAction icon={<FileText />} label="Add Patient Note" />
              <QuickAction icon={<Calendar />} label="Schedule Appointment" />
              <QuickAction icon={<MessageSquare />} label="Send Message" />
              <QuickAction icon={<Clock />} label="View Schedule" />
            </div>
          </DashboardCard>
        </main>
      )}

      {activeTab === 'patients' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Patient List</h2>
            <div className="space-y-4">
              {filteredPatients.map(patient => (
                <PatientItem 
                  key={patient.id} 
                  patient={patient} 
                  onClick={() => setSelectedPatient(patient.id)}
                  isSelected={patient.id === selectedPatient}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            {selectedPatient ? (
              <PatientDetails patientId={selectedPatient} />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a patient to view details
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'appointments' && (
        <AppointmentCalendar appointments={appointments} />
      )}

      {activeTab === 'messages' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          {/* Implement message component here */}
          <p>Message functionality to be implemented.</p>
        </div>
      )}
    </div>
  )
}

export default DoctorDashboard