import React from 'react'

export default function ForcedMessage({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="forced-message">
      <h2>No importa si elegias si o no Igual lo veras 💫</h2>
      <p>TEAMO 🎭✨</p>
      <button className="continue-btn" onClick={onContinue}>Abri mi amor 📚✨</button>
    </section>
  )
}



