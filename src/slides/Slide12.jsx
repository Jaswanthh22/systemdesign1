import React from 'react'
import { FiActivity, FiBarChart2, FiRadio } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide12 = () => {
  return (
    <SlideLayout
      eyebrow="Observability"
      title="Visibility without PHI leakage"
      subtitle="Logs, metrics, tracing (OpenTelemetry), and SLO dashboards."
    >
      <div className="grid three-col">
        <div className="card">
          <div className="card-icon">
            <FiRadio />
          </div>
          <h3>Telemetry</h3>
          <ul className="bullet-list">
            <li>Structured logs with PHI redaction and sampling</li>
            <li>Trace media and API paths with OpenTelemetry</li>
            <li>Metrics for SFU health, API latency, queue depth, handshake success</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiBarChart2 />
          </div>
          <h3>SLOs</h3>
          <ul className="bullet-list">
            <li>Availability: 99.95% API; video connect success &gt; 99%</li>
            <li>Latency: p95 &lt; 250ms API; p99 &lt; 1s end-to-end</li>
            <li>Error budget burn + SLA/regional health dashboards</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiActivity />
          </div>
          <h3>Ops-ready</h3>
          <ul className="bullet-list">
            <li>Runbooks linked from alerts</li>
            <li>Session replay for troubleshooting (no PHI)</li>
            <li>Anomaly detection across media quality, queues, and errors</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide12
