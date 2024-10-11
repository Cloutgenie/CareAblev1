import React, { useState, useEffect } from 'react'
import { User, Phone, Mail, Calendar, FileText } from 'lucide-react'

interface PatientDetailsProps {
  patientId: string
}

interface PatientData {
  id: string
  name: string
  age: number
  phone: string
  email: string
  lastVisit: string
  medicalHistory: string[]
}

const PatientDetails: React.FC<PatientDetailsProps> = ({ patientId }) => {
  const [patient, setPatient] = useState<PatientData | null>(null)

  useEffect(() => {
    // Fetch patient details
    // This is a mock implementation. In a real app, you'd call your API here.
    const mockPatient: PatientData = {
      id: patientId,
      name: 'John Doe',
      age: 45,
      phone: '+1 (555) 123-4567',
      email: 'john.doe@example.com',
      lastVisit: '2024-02-28',
      medicalHistory: [
        'Hypertension diagnosed in 2020',
        'Appendectomy in 2015',
        'Allergic to penicillin'
      ]
    }
    setPatient(mockPatient)
  }, [patientId])

  if (!patient) {
    return <div>Loading patient details...</div>
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">{patient.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <User className="mr-2 text-gray-400" />
          <span>Age: {patient.age}</span>
        </div>
        <div className="flex items-center">
          <Phone className="mr-2 text-gray-400" />
          <span>{patient.phone}</span>
        </div>
        <div className="flex items-center">
          <Mail className="mr-2 text-gray-400" />
          <span>{patient.email}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="mr-2 text-gray-400" />
          <span>Last Visit: {patient.lastVisit}</span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Medical History</h3>
        <ul className="list-disc list-inside">
          {patient.medicalHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <FileText className="inline-block mr-2" />
          Add Note
        </button>
      </div>
    </div>
  )
}

export default PatientDetails