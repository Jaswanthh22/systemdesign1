import React from 'react'
import { FiClipboard, FiHeadphones, FiShield, FiUsers } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide3 = () => {
  return (
    <SlideLayout
      eyebrow="Stakeholders & Stories"
      title="People-first journeys across the platform"
      subtitle="Patients, clinicians, pharmacists, admins, security, and DevOps."
    >
      <div className="grid two-col">
        <div className="card">
          <div className="card-icon">
            <FiUsers />
          </div>
          <h3>Stakeholders</h3>
          <div className="tag-cloud">
            <span className="tag">Patients</span>
            <span className="tag">Clinicians</span>
            <span className="tag">Pharmacists</span>
            <span className="tag">Schedulers</span>
            <span className="tag">Administrators</span>
            <span className="tag">Security &amp; IT</span>
            <span className="tag">DevOps</span>
            <span className="tag">EHR/Lab partners</span>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiClipboard />
          </div>
          <h3>User stories</h3>
          <ul className="bullet-list">
            <li>Video consults with waiting rooms, triage, and audio fallback</li>
            <li>Secure messaging with attachments, alerts, and redaction</li>
            <li>Scheduling with reminders and status tracking</li>
            <li>E-prescriptions with legal signatures and pharmacy visibility</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiShield />
          </div>
          <h3>Guardrails</h3>
          <ul className="bullet-list">
            <li>Role-aware access at every layer</li>
            <li>Least-privilege admin and ops tooling</li>
            <li>Regional data residency options</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiHeadphones />
          </div>
          <h3>Support & Ops</h3>
          <ul className="bullet-list">
            <li>Live session monitoring</li>
            <li>Ops playbooks with observability baked in</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide3
