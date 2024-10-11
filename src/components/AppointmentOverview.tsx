import React, { useState } from 'react'
import { Calendar, Clock, User } from 'lucide-react'

interface Appointment {
  id: string
  patientName: string
  doctorName: string
  date: string
  time: string
  type: 'In-person' | 'Telemedicine'
}

const AppointmentOverview: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: '1', patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2024-03-15', time: '10:00 AM', type: 'In-person' },
    { id: '2', patientName: 'Jane Smith', doctorName: 'Dr. Johnson', date: '2024-03-15', time: '11:30 AM', type: 'Telemedicine' },
    { id: '3', patientName: 'Bob Johnson', doctorName: 'Dr. Williams', date: '2024-03-16', time: '2:00 PM', type: 'In-person' },
  ])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upcoming Appointments</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    {appointment.patientName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.doctorName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    {appointment.date}
                    <Clock className="h-5 w-5 text-gray-400 ml-4 mr-2" />
                    {appointment.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    appointment.type === 'In-person' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {appointment.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppointmentOverview