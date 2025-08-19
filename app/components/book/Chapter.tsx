import React from 'react'

export default function Chapter({ title, paragraphs, onBack }: { title: string; paragraphs: string[]; onBack: () => void }) {
  return (
    <div className="chapter-content">
      <h3>{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <button className="back-btn" onClick={onBack}>← Volver al índice mágico</button>
    </div>
  )
}

