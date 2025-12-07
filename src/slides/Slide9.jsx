import React from 'react'
import { FiActivity, FiAperture, FiCpu } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide9 = () => {
  return (
    <SlideLayout
      eyebrow="Performance & Scaling"
      title="Responsive experiences under load"
      subtitle="Caching, CDNs, backpressure, and autoscaling keep consults smooth."
    >
      <div className="grid three-col">
        <div className="card">
          <div className="card-icon">
            <FiActivity />
          </div>
          <h3>Acceleration</h3>
          <ul className="bullet-list">
            <li>Redis for sessions, tokens, and hot patient/clinician data</li>
            <li>Global CDN for static assets; signed URLs for uploads/downloads</li>
            <li>Edge SFU/TURN to minimize RTT and keep handshake success &gt; 99%</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiCpu />
          </div>
          <h3>Resilience</h3>
          <ul className="bullet-list">
            <li>Kafka backpressure and retries for bursty messaging + notifications</li>
            <li>Autoscaling on CPU, queue depth, RTT/packet loss for SFU nodes</li>
            <li>API latency target &lt; 250ms and message delivery &lt; 1s</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiAperture />
          </div>
          <h3>Optimization</h3>
          <ul className="bullet-list">
            <li>Adaptive bitrate + audio-only fallback to keep consults stable</li>
            <li>Prepared statements, read replicas, and pagination tuned to p99 &lt; 1s</li>
            <li>Queue-first heavy jobs (transcode, redact) with backpressure handling</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide9
