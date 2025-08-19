// ======================= components/Effects.tsx =======================
'use client'
import React, { useEffect } from 'react'

export default function Effects() {
  useEffect(() => {
    // particles
    const pContainer = document.querySelector('.magic-particles') as HTMLElement | null
    if (pContainer && pContainer.childElementCount === 0) {
      const count = 50
      for (let i = 0; i < count; i++) {
        const d = document.createElement('div')
        d.className = 'particle'
        d.style.left = Math.random() * 100 + '%'
        d.style.top = Math.random() * 100 + '%'
        d.style.animationDelay = Math.random() * 4 + 's'
        d.style.animationDuration = String(Math.random() * 2 + 3) + 's'
        pContainer.appendChild(d)
      }
    }
    // hearts
    const hContainer = document.querySelector('.hearts') as HTMLElement | null
    let interval: any
    if (hContainer) {
      interval = setInterval(() => {
        if (Math.random() > 0.7) {
          const h = document.createElement('div')
          h.className = 'heart'
          const symbols = ['💖','💕','💗','💓','💞','💘','🌹','✨']
          h.textContent = symbols[Math.floor(Math.random() * symbols.length)]
          h.style.left = Math.random() * 100 + '%'
          h.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 70%)`
          h.style.animationDuration = String(Math.random() * 5 + 12) + 's'
          hContainer.appendChild(h)
          setTimeout(() => h.parentNode && h.parentNode.removeChild(h), 17000)
        }
      }, 2000)
    }
    return () => interval && clearInterval(interval)
  }, [])

  return (
    <>
      <div className="magic-particles" />
      <div className="hearts" />
    </>
  )
}
