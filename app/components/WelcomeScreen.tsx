import React from 'react'

export default function WelcomeScreen({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  return (
    <section className="welcome-screen">
      <h1>Hola Mi Amor Emi ✨💖</h1>
      <p>¿Querés vivir una experiencia Pipu?</p>
      <div className="choice-buttons">
        <button className="choice-btn" onClick={onYes}>¡Sí! ✨</button>
        <button className="choice-btn" onClick={onNo}>No... 🤔</button>
      </div>
    </section>
  )
}