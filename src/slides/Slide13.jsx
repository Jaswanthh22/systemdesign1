import React from 'react'
import { FiBox, FiCloud, FiLayers, FiMonitor } from 'react-icons/fi'
import SlideLayout from '../components/SlideLayout'

const Slide13 = () => {
  return (
    <SlideLayout eyebrow="Tech Stack" title="Modern, composable tooling" subtitle="Built for developer velocity and operational control.">
      <div className="grid two-col">
        <div className="card">
          <div className="card-icon">
            <FiMonitor />
          </div>
          <h3>Product</h3>
          <div className="stack-row">
            <span className="pill strong">Frontend</span>
            <span className="tag">React / Next.js</span>
            <span className="tag">React Native</span>
            <span className="tag">TypeScript</span>
          </div>
          <div className="stack-row">
            <span className="pill strong">Backend</span>
            <span className="tag">Go</span>
            <span className="tag">Kotlin</span>
            <span className="tag">Node/Python (ML &amp; triage)</span>
          </div>
          <div className="stack-row">
            <span className="pill strong">Media</span>
            <span className="tag">Janus</span>
            <span className="tag">Mediasoup</span>
            <span className="tag">Agora/Twilio</span>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <FiLayers />
          </div>
          <h3>Data & Infra</h3>
          <div className="stack-row">
            <span className="pill strong">Data</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Redis</span>
            <span className="tag">MongoDB</span>
            <span className="tag">Object storage</span>
          </div>
          <div className="stack-row">
            <span className="pill strong">Infra</span>
            <span className="tag">Kubernetes</span>
            <span className="tag">Kafka</span>
            <span className="tag">Service mesh</span>
          </div>
          <div className="stack-row">
            <span className="pill strong">Security</span>
            <span className="tag">OIDC</span>
            <span className="tag">MFA</span>
            <span className="tag">KMS</span>
          </div>
        </div>
        <div className="card highlight">
          <div className="card-icon">
            <FiCloud />
          </div>
          <h3>DevEx</h3>
          <p className="muted">
            CI/CD with automated quality gates, ephemeral environments, smoke tests for media + API
            paths, and blue/green + canary deploys.
          </p>
          <div className="stack-row compact">
            <span className="tag">OpenTelemetry</span>
            <span className="tag">OpenAPI</span>
            <span className="tag">Prometheus/Grafana</span>
            <span className="tag">ELK/EFK</span>
            <span className="tag">Terraform</span>
            <span className="tag">Helm</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

export default Slide13
