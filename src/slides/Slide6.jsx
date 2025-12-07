import React from 'react'
import { FiDownloadCloud, FiFileText } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const entities = [
  'Users',
  'Appointments',
  'Conversations',
  'Messages',
  'Prescriptions',
  'AuditEvents',
  'Attachments',
]

const Slide6 = () => {
  return (
    <SlideLayout
      eyebrow="ER Diagram"
      title="Data relationships built for compliance and auditability"
      subtitle="Entity-first modeling with append-only audit events."
    >
      <div className="grid two-col align-center">
        <div className="card">
          <div className="card-icon">
            <FiFileText />
          </div>
          <h3>Entities</h3>
          <div className="tag-cloud">
            {entities.map((entity) => (
              <span key={entity} className="tag">
                {entity}
              </span>
            ))}
          </div>
          <p className="muted">
            Normalized core with referential integrity and encrypted PHI columns, plus
            append-only audit events. Monthly partitions for messages, daily/weekly for audits,
            and region-aware shards.
          </p>
          <p className="muted">
            Indexes: email/phone, clinician + time, conversation + timestamp, and JSONB metadata
            for search. Signed URLs for attachment access.
          </p>
          <a className="button ghost" href="/er-diagram.svg" download>
            <FiDownloadCloud />
            Download ERD (SVG)
          </a>
        </div>
        <div className="card diagram-card">
          <div className="card-icon">
            <FiDownloadCloud />
          </div>
          <h3>Preview</h3>
          <img src="/er-diagram.svg" alt="ER diagram placeholder" className="diagram" />
          <div className="button-row">
            <a className="button" href="/telemedicine-deck.pdf" download>
              Deck PDF
            </a>
            <a className="button ghost" href="/architecture-diagram.svg" download>
              Architecture PNG/SVG
            </a>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide6
