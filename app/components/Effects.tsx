// ======================= components/Effects.tsx =======================
'use client'
import React, { useEffect } from 'react'

export default function Effects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 640px)').matches

    if (reduceMotion) return // 🔇 no animaciones si el usuario lo pide

    // particles
    const pContainer = document.querySelector('.magic-particles') as HTMLElement | null
    if (pContainer && pContainer.childElementCount === 0) {
      // 📉 menos partículas en mobile
      const count = isMobile ? 12 : 40
      const frag = document.createDocumentFragment()
      for (let i = 0; i < count; i++) {
        const d = document.createElement('div')
        d.className = 'particle will-change-transform'
        d.style.left = Math.random() * 100 + '%'
        d.style.top = Math.random() * 100 + '%'
        d.style.animationDelay = Math.random() * 4 + 's'
        d.style.animationDuration = String(Math.random() * 2 + 3) + 's'
        frag.appendChild(d)
      }
      pContainer.appendChild(frag)
    }

    // hearts
    const hContainer = document.querySelector('.hearts') as HTMLElement | null
    let interval: ReturnType<typeof setInterval> | null = null

    if (hContainer) {
      // ⏱️ corazones menos frecuentes en mobile
      const every = isMobile ? 3500 : 2000
      interval = setInterval(() => {
        if (Math.random() > (isMobile ? 0.86 : 0.7)) {
          const h = document.createElement('div')
          h.className = 'heart will-change-transform'
          const symbols = ['💖','💕','💗','💓','💞','💘','🌹','✨']
          h.textContent = symbols[Math.floor(Math.random() * symbols.length)]
          h.style.left = Math.random() * 100 + '%'
          h.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 70%)`
          h.style.animationDuration = String(Math.random() * 4 + (isMobile ? 10 : 12)) + 's'
          hContainer.appendChild(h)
          setTimeout(() => h.parentNode && h.parentNode.removeChild(h), 16000)
        }
      }, every)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div className="magic-particles pointer-events-none" />
      <div className="hearts pointer-events-none" />
    </>
  )
}
