import React from 'react'
import { FiClock, FiFlag, FiTrendingUp } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const roadmap = [
  {
    title: 'MVP',
    icon: <FiFlag />,
    items: ['Video consults', 'Messaging + attachments', 'Scheduling + e-Rx with audit'],
  },
  {
    title: 'Integrations',
    icon: <FiClock />,
    items: ['FHIR/EHR connectors', 'Pharmacy + billing partners', 'Labs + remote monitoring'],
  },
  {
    title: 'Scale & Compliance',
    icon: <FiTrendingUp />,
    items: ['Multi-region GA + SLA dashboards', 'Analytics for operations', 'SOC2/HIPAA + DR drills'],
  },
]

const Slide14 = () => {
  return (
    <SlideLayout
      eyebrow="Roadmap"
      title="Focused on safe scale and integrations"
      subtitle="From MVP to enterprise-grade with compliance and reliability."
    >
      <div className="timeline">
        {roadmap.map((entry) => (
          <div key={entry.title} className="timeline-item">
            <div className="timeline-icon">{entry.icon}</div>
            <div>
              <h3>{entry.title}</h3>
              <ul className="bullet-list tight">
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}

export default Slide14
