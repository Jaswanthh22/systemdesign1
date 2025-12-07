import React from 'react'
import { FiCode, FiLink2, FiRefreshCw } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const apis = [
  {
    name: 'Users',
    path: '/v1/users',
    points: ['Sign-up, verification, MFA enrollment', 'Profile + preferences', 'Idempotent POST on external_id'],
  },
  {
    name: 'Appointments',
    path: '/v1/appointments',
    points: ['Scheduling, reschedule, cancel with status tracking', 'Status webhooks for EHR/partners', 'Versioned payloads with optimistic locking'],
  },
  {
    name: 'Messaging',
    path: '/v1/conversations & /v1/messages',
    points: ['Encrypted chat, attachments, triage tags', 'Cursor pagination on conversation_id + timestamp', 'Idempotency keys for message writes'],
  },
  {
    name: 'Prescriptions',
    path: '/v1/prescriptions',
    points: ['Builder pattern with validations', 'Legal signature + pharmacy routing', 'Audit + immutable history'],
  },
]

const Slide11 = () => {
  return (
    <SlideLayout
      eyebrow="API Endpoints"
      title="Opinionated, versioned APIs with idempotency baked in"
      subtitle="REST-first with async callbacks and schema evolution."
    >
      <div className="card">
        <div className="card-icon">
          <FiCode />
        </div>
        <div className="api-grid">
          {apis.map((api) => (
            <div key={api.name} className="api-card">
              <div className="api-header">
                <span className="pill">{api.name}</span>
                <span className="api-path">{api.path}</span>
              </div>
              <ul className="bullet-list tight">
                {api.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="api-notes">
          <div className="note">
            <FiRefreshCw />
            <span>Idempotency keys on POST/PUT + safe retries on the bus.</span>
          </div>
          <div className="note">
            <FiLink2 />
            <span>v1/v2 versioning; schema contracts via OpenAPI; standard HTTP codes (400–500).</span>
          </div>
          <div className="note">
            <FiLink2 />
            <span>Cursor pagination &lt; 1s targets; signed URL uploads for attachments.</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide11
