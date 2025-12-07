import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiArrowLeft,
  FiArrowRight,
  FiDownloadCloud,
  FiMaximize2,
  FiMinimize2,
  FiPlay,
} from 'react-icons/fi'
import slides from './slides'
import './App.css'

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
  }),
}

function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const totalSlides = slides.length

  const goNext = useCallback(() => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const CurrentSlide = useMemo(() => slides[index].Component, [index])

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'ArrowRight') goNext()
      if (event.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  useEffect(() => {
    const handleChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', handleChange)
    return () => document.removeEventListener('fullscreenchange', handleChange)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }, [])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <FiPlay />
          <span>Telemedicine Platform</span>
        </div>
        <div className="downloads">
          <button
            className="download-link fs-toggle"
            onClick={toggleFullscreen}
            aria-pressed={isFullscreen}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
            {isFullscreen ? 'Minimize' : 'Fullscreen'}
          </button>
          <a href="/telemedicine-deck.pdf" download className="download-link">
            <FiDownloadCloud />
            Deck PDF
          </a>
          <a href="/architecture-diagram.svg" download className="download-link">
            Architecture
          </a>
          <a href="/er-diagram.svg" download className="download-link">
            ERD
          </a>
        </div>
      </header>

      <div className="slide-frame">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: 'easeInOut' }}
            className="slide-shell"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="controls">
        <div className="progress">
          <span className="progress-label">
            {String(index + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${((index + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
        <div className="nav-buttons">
          <button className="nav-button ghost" onClick={goPrev} aria-label="Previous slide">
            <FiArrowLeft />
            Prev
          </button>
          <button className="nav-button" onClick={goNext} aria-label="Next slide">
            Next
            <FiArrowRight />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
