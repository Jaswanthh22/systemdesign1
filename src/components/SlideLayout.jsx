import React from 'react'

const SlideLayout = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  children,
  actions,
}) => {
  return (
    <section className={`slide ${align === 'center' ? 'slide-center' : ''}`}>
      <div className="halo halo-a" />
      <div className="halo halo-b" />
      <div className="slide-inner">
        <div className="slide-header">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="slide-title">{title}</h1>
          {subtitle && <p className="slide-subtitle">{subtitle}</p>}
        </div>
        <div className="slide-content">{children}</div>
        {actions && <div className="slide-actions">{actions}</div>}
      </div>
    </section>
  )
}

export default SlideLayout
