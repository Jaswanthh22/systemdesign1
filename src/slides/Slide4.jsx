import React from 'react'
import { FiCpu, FiServer } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide4 = () => {
  return (
    <SlideLayout
      eyebrow="Architecture Overview"
      title="Microservices + event-driven core"
      subtitle="API Gateway + WAF → Auth → Scheduling, Messaging, Media SFU, e-Rx, Notifications, Audit."
    >
      <div className="grid two-col align-center">
        <div className="card">
          <div className="card-icon">
            <FiCpu />
          </div>
          <h3>Core ideas</h3>
          <ul className="bullet-list">
            <li>API Gateway with WAF, rate limits, throttling, and observability</li>
            <li>Auth/Policy service: OIDC, MFA, RBAC + ABAC for encounter-scoped access</li>
            <li>Domain services: scheduling, messaging, WebRTC media, prescriptions, notifications</li>
            <li>Event bus (Kafka/PubSub) for async workflows, retries, and outbox/idempotency</li>
            <li>Audit/event store for immutable, append-only PHI interactions</li>
            <li>Data: PostgreSQL core, MongoDB for notes, object storage for attachments</li>
          </ul>
        </div>
        <div className="card diagram-card">
          <div className="card-icon">
            <FiServer />
          </div>
          <h3>System diagram</h3>
          <img src="/architecture-diagram.svg" alt="Architecture diagram placeholder" className="diagram" />
          <p className="muted">Replace with your exported architecture graphic.</p>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide4
