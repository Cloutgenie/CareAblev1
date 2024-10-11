import React, { useState } from 'react'
import { Calendar, Clock, User } from 'lucide-react'

interface Appointment {
  id: string
  patientName: string
  time: string
  type: 'In-person' | 'Telemedicine'
  reason?: string
}

interface AppointmentCalendarProps {
  appointments: Appointment[]
}

const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({ appointments }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const filteredAppointments = appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.time)
    return (
      appointmentDate.getDate() === selectedDate.getDate() &&
      appointmentDate.getMonth() === selectedDate.getMonth() &&
      appointmentDate.getFullYear() === selectedDate.getFullYear()
    )
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <h2 className="text-xl font-semibold mb-4">Calendar</h2>
        <div className="bg-white shadow rounded-lg p-4">
          {/* Implement an actual calendar component here */}
          <p>Calendar component to be implemented.</p>
          <input
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="mt-4 w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold mb-4">Appointments for {selectedDate.toDateString()}</h2>
        <div className="space-y-4">
          {filteredAppointments.map(appointment => (
            <div key={appointment.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="mr-2 text-gray-400" />
                  <span className="font-semibold">{appointment.patientName}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 text-gray-400" />
                  <span>{appointment.time}</span>
                </div>
              </div>
              <div className="mt-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  appointment.type === 'In-person' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {appointment.type}
                </span>
              </div>
              {appointment.reason && (
                <p className="mt-2 text-sm text-gray-600">{appointment.reason}</p>
              )}
            </div>
          ))}
          {filteredAppointments.length === 0 && (
            <p className="text-gray-500">No appointments scheduled for this date.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppointmentCalendar