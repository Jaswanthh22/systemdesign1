import React from 'react'
import { FiActivity, FiArrowRight, FiMessageCircle, FiShield, FiVideo } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide1 = () => {
  return (
    <SlideLayout
      eyebrow="Telemedicine Platform"
      title="System Design & Architecture"
      subtitle="Secure multi-region virtual care: video, messaging, scheduling, and e-prescriptions."
      align="center"
    >
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="pill-row">
            <span className="pill">Real-time video</span>
            <span className="pill">Encrypted chat</span>
            <span className="pill">E-prescriptions</span>
          </div>
          <p className="lede">
            Designed for 99.95% availability with HIPAA/GDPR controls, adaptive media, and audited
            workflows for every stakeholder.
          </p>
          <div className="hero-actions">
            <div className="cta">
              <span>Scroll / Click Next</span>
              <FiArrowRight />
            </div>
            <div className="hero-meta">
              <div className="stat">
                <span className="stat-value">99.95%</span>
                <p>Uptime target</p>
              </div>
              <div className="stat">
                <span className="stat-value">HIPAA</span>
                <p>and GDPR ready</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-icon">
            <FiVideo />
          </div>
          <h3>Unified Virtual Care</h3>
          <p className="muted">
            Streamlined workflows for clinicians and patients with protected media, messaging, and
            prescriptions.
          </p>
          <div className="hero-icons">
            <div className="mini-chip">
              <FiActivity />
              <span>Edge SFU</span>
            </div>
            <div className="mini-chip">
              <FiMessageCircle />
              <span>Realtime chat</span>
            </div>
            <div className="mini-chip">
              <FiShield />
              <span>Zero-trust</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide1
