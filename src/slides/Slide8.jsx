import React from 'react'
import { FiDatabase, FiLayers } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide8 = () => {
  return (
    <SlideLayout
      eyebrow="Database & Indexing"
      title="Balanced reads and writes for clinical workflows"
      subtitle="Normalized core, denormalized views for speed, and thoughtful indexing."
    >
      <div className="grid two-col">
        <div className="card">
          <div className="card-icon">
            <FiDatabase />
          </div>
          <h3>Data model</h3>
          <ul className="bullet-list">
            <li>PostgreSQL for users, appointments, conversations, prescriptions, audit events</li>
            <li>MongoDB for clinical notes; object storage for attachments via signed URLs</li>
            <li>Denormalized read models for chat history and operational dashboards</li>
            <li>Monthly message partitions; daily/weekly audit partitions; region-based shards</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiLayers />
          </div>
          <h3>Index strategy</h3>
          <ul className="bullet-list">
            <li>Email/phone, clinician + time, and conversation + timestamp composites</li>
            <li>Partial indexes for active appointments and open tasks</li>
            <li>GIN indexes on JSONB metadata for triage/search</li>
            <li>Covering indexes tuned for cursor pagination and latency &lt; 250ms</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide8
