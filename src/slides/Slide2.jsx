import React from 'react'
import { FiLock, FiServer, FiVideo } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide2 = () => {
  return (
    <SlideLayout
      eyebrow="Executive Summary"
      title="Secure, scalable telemedicine ecosystem"
      subtitle="Everything needed to deliver virtual care with reliability and compliance."
    >
      <div className="grid two-col">
        <div className="card">
          <div className="card-icon">
            <FiVideo />
          </div>
          <h3>Experience</h3>
          <ul className="bullet-list">
            <li>WebRTC video with adaptive bitrate, screen share, and audio fallback</li>
            <li>Encrypted messaging with attachments, notifications, and PHI redaction</li>
            <li>Scheduling with reminders + legal e-prescriptions routed to pharmacies</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiLock />
          </div>
          <h3>Compliance & Resilience</h3>
          <ul className="bullet-list">
            <li>PHI encrypted in transit/at rest; HIPAA/GDPR with immutable audit trails</li>
            <li>99.95% availability, p99 API &lt; 1s, message delivery &lt; 1s</li>
            <li>99% WebRTC handshake success; throttling + WAF at the edge</li>
            <li>Zero-trust defaults with RBAC/ABAC and least-privilege ops</li>
          </ul>
        </div>
        <div className="card highlight">
          <div className="card-icon">
            <FiServer />
          </div>
          <h3>Platform</h3>
          <ul className="bullet-list">
            <li>Microservices + event bus (Kafka/PubSub) with idempotent workflows</li>
            <li>API Gateway + WAF, Auth (OIDC/MFA), scheduling, messaging, e-Rx, notifications</li>
            <li>PostgreSQL core, MongoDB for notes, object storage for attachments</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide2
