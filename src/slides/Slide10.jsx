import React from 'react'
import { FiCheckCircle, FiLock, FiShield } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide10 = () => {
  return (
    <SlideLayout
      eyebrow="Security & Reliability"
      title="Defense-in-depth for clinical trust"
      subtitle="OIDC + MFA, RBAC/ABAC, TLS 1.3/SRTP, KMS encryption, circuit breakers, DR."
    >
      <div className="grid two-col">
        <div className="card">
          <div className="card-icon">
            <FiLock />
          </div>
          <h3>Security</h3>
          <ul className="bullet-list">
            <li>OIDC + MFA, device posture, short-lived tokens with rotation</li>
            <li>RBAC/ABAC scoped per encounter; request throttling + WAF</li>
            <li>TLS 1.3 + HSTS; SRTP/DTLS for media; AES-256 at rest via KMS</li>
            <li>Input validation, CSRF protection, and secure deserialization</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiShield />
          </div>
          <h3>Reliability</h3>
          <ul className="bullet-list">
            <li>Circuit breakers, retries with backoff, and bulkheads for core services</li>
            <li>Blue/green + canary rollouts; audio-only fallback for media</li>
            <li>Multi-region replication with RTO 1 hr, RPO 15 min</li>
            <li>Chaos, DR drills, and packet-loss simulation for media/API paths</li>
          </ul>
        </div>
        <div className="card highlight">
          <div className="card-icon">
            <FiCheckCircle />
          </div>
          <h3>Compliance posture</h3>
          <ul className="bullet-list">
            <li>Immutable audit trails, no PHI in logs, and signed access</li>
            <li>Data residency per region/tenant with sharded storage</li>
            <li>Vuln scanning, token expiry mgmt, and third-party access via proxy</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide10
