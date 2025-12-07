import React from 'react'
import { FiGlobe, FiServer, FiWifi } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide5 = () => {
  return (
    <SlideLayout
      eyebrow="Deployment Architecture"
      title="Multi-region Kubernetes with edge media"
      subtitle="CDN + WAF + Load balancer in front of stateless services and media edge."
    >
      <div className="grid two-col align-center">
        <div className="card diagram-card">
          <div className="card-icon">
            <FiGlobe />
          </div>
          <h3>Deployment view</h3>
          <img src="/deployment-diagram.svg" alt="Deployment diagram placeholder" className="diagram" />
          <p className="muted">Full-screen diagram ready for replacement.</p>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiWifi />
          </div>
          <h3>Key elements</h3>
          <ul className="bullet-list">
            <li>Global CDN + WAF + DDoS protection ahead of API gateways</li>
            <li>Multi-AZ + multi-region Kubernetes with blue/green + canary rollouts</li>
            <li>Edge SFU/TURN close to users; L4 for media, L7 for APIs</li>
            <li>Autoscaling on CPU, RTT/packet loss, and queue depth</li>
            <li>Service mesh for mTLS, retries, circuit breakers, and traffic policy</li>
            <li>IaC-driven clusters with KMS-backed secrets and hardened images</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide5
