import React from 'react'
import {
  FiCpu,
  FiGitBranch,
  FiPlayCircle,
  FiRefreshCw,
  FiSettings,
  FiShield,
  FiShuffle,
} from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const patterns = [
  {
    icon: <FiPlayCircle />,
    title: 'Builder (e-Rx)',
    description: 'Compose validated prescription payloads with dosage, drug, and pharmacy data.',
  },
  {
    icon: <FiSettings />,
    title: 'Factory',
    description: 'Provision partner connectors (EHR, labs, pharmacy, payments) behind stable APIs.',
  },
  {
    icon: <FiCpu />,
    title: 'Command',
    description: 'Intent-based actions for scheduling, messaging, and prescriptions.',
  },
  {
    icon: <FiGitBranch />,
    title: 'Saga',
    description: 'Coordinate booking → consult → e-Rx → notifications with compensation steps.',
  },
  {
    icon: <FiShuffle />,
    title: 'Adapter',
    description: 'Normalize external APIs for media, SMS, push, and billing.',
  },
  {
    icon: <FiShield />,
    title: 'Proxy',
    description: 'Service mesh + gateway enforce authz, throttling, and audit everywhere.',
  },
  {
    icon: <FiRefreshCw />,
    title: 'Observer',
    description: 'Event streams drive audit logging, fanout, and state projections.',
  },
]

const Slide7 = () => {
  return (
    <SlideLayout
      eyebrow="Design Patterns"
      title="Patterns that keep the platform safe and composable"
      subtitle="Command, Builder, Factory, Saga, Proxy, Adapter, Observer patterns for clinical workflows."
    >
      <div className="grid three-col">
        {patterns.map((pattern) => (
          <div key={pattern.title} className="card pattern-card">
            <div className="card-icon">{pattern.icon}</div>
            <h3>{pattern.title}</h3>
            <p className="muted">{pattern.description}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}

export default Slide7
