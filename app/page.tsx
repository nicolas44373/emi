'use client'
import React, { useState } from 'react'
import { Dancing_Script, Playfair_Display } from 'next/font/google'
import Effects from '@/app/components/Effects'
import WelcomeScreen from '@/app/components/WelcomeScreen'
import ForcedMessage from '@/app/components/ForcedMessage'
import Book from '@/app/components/book/Book'
import { chapters } from '@/app/components/data/chapters'

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-dancing' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600'], style: ['normal','italic'], variable: '--font-playfair' })

export default function Page() {
  const [stage, setStage] = useState<'welcome' | 'forced' | 'book'>('welcome')
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null)

  return (
    <main className={`${playfair.variable} ${dancing.variable} emi-root`}>
      <Effects />

      {stage === 'welcome' && (
        <WelcomeScreen onYes={() => setStage('forced')} onNo={() => setStage('forced')} />
      )}

      {stage === 'forced' && (
        <ForcedMessage onContinue={() => setStage('book')} />
      )}

      {stage === 'book' && (
  <Book chapters={chapters} />
)}


      {/* GLOBAL STYLES (ported from your HTML, kept together for simplicity) */}
      <style jsx global>{`
        :root { --primary-rose:#FFB6C1; --deep-rose:#FF69B4; --soft-pink:#FFC0CB; --rose-gold:#E8B4A0; --cream:#FFF0F5; --magical-purple:#DDA0DD; --sparkle-gold:#FFD700; --blush:#FFCCCB; --pearl-white:#F8F8FF }
        .emi-root { min-height:100dvh; display:flex; justify-content:center; align-items:center; overflow-x:hidden; position:relative; padding:16px; background: radial-gradient(ellipse at center,#2D1B40 0%,#4A2C5A 20%,#6B4C7B 40%,#8B5A9F 60%,#A569BD 80%,#C39BD3 100%); font-family: var(--font-playfair), serif }
        .magic-particles { position:fixed; inset:0; pointer-events:none; z-index:1 }
        .particle { position:absolute; width:6px; height:6px; border-radius:50%; background: radial-gradient(circle,var(--sparkle-gold) 0%, var(--deep-rose) 50%, transparent 70%); animation: sparkle 4s ease-in-out infinite; filter: drop-shadow(0 0 8px rgba(255,215,0,.8)) }
        @keyframes sparkle { 0%,100%{opacity:0; transform:scale(0) rotate(0)} 25%{opacity:.6; transform:scale(.8) rotate(90deg)} 50%{opacity:1; transform:scale(1.2) rotate(180deg); filter: drop-shadow(0 0 15px rgba(255,182,193,1))} 75%{opacity:.8; transform:scale(.9) rotate(270deg)} }
        .welcome-screen { text-align:center; color:var(--pearl-white); max-width:700px; padding:60px; z-index:10; position:relative; background: linear-gradient(145deg, rgba(255,182,193,.15) 0%, rgba(221,160,221,.2) 50%, rgba(255,192,203,.15) 100%); backdrop-filter: blur(15px); border-radius:35px; border:3px solid rgba(255,182,193,.4); box-shadow: 0 25px 70px rgba(255,105,180,.3), inset 0 0 40px rgba(255,215,0,.1), 0 0 50px rgba(255,182,193,.5); animation: gentleGlow 3s ease-in-out infinite }
        @keyframes gentleGlow { 0%,100%{box-shadow:0 25px 70px rgba(255,105,180,.3), inset 0 0 40px rgba(255,215,0,.1), 0 0 50px rgba(255,182,193,.5)} 50%{box-shadow:0 30px 80px rgba(255,105,180,.4), inset 0 0 50px rgba(255,215,0,.2), 0 0 60px rgba(255,182,193,.7)} }
        .welcome-screen h1 { font-family:var(--font-dancing), cursive; font-size: clamp(2.4rem,6vw,4.5rem); font-weight:700; margin-bottom:40px; background: linear-gradient(45deg, var(--sparkle-gold), var(--deep-rose), var(--magical-purple), var(--primary-rose)); background-size:300% 300%; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation: rainbowText 4s ease-in-out infinite, float 6s ease-in-out infinite; text-shadow:0 0 30px rgba(255,215,0,.6); filter: drop-shadow(0 0 20px rgba(255,182,193,.8)) }
        @keyframes rainbowText {0%,100%{background-position:0% 50%}25%{background-position:50% 25%}50%{background-position:100% 50%}75%{background-position:50% 75%}}
        @keyframes float {0%,100%{transform:translateY(0) rotate(0)}33%{transform:translateY(-12px) rotate(1deg)}66%{transform:translateY(-6px) rotate(-1deg)}}
        .welcome-screen p { font-size: clamp(1.1rem,3vw,2.2rem); margin-bottom:50px; line-height:1.8; text-shadow:3px 3px 6px rgba(255,105,180,.7); animation: pulse 3s ease-in-out infinite; background: linear-gradient(45deg, var(--pearl-white), var(--blush)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent }
        @keyframes pulse {0%,100%{opacity:.9; transform:scale(1)}50%{opacity:1; transform:scale(1.02)}}
        .choice-buttons { display:flex; gap:40px; justify-content:center; flex-wrap:wrap }
        .choice-btn { background: linear-gradient(135deg, var(--deep-rose), var(--primary-rose), var(--rose-gold), var(--sparkle-gold)); background-size:300% 300%; color:#fff; border:none; padding:25px 50px; border-radius:30px; font-size:1.2rem; font-weight:600; cursor:pointer; transition: all .5s cubic-bezier(.175,.885,.32,1.275); box-shadow: 0 15px 35px rgba(255,105,180,.4), inset 0 0 25px rgba(255,255,255,.2), 0 0 30px rgba(255,215,0,.3); min-width:180px; position:relative; overflow:hidden; text-shadow:2px 2px 4px rgba(0,0,0,.3); animation: buttonSparkle 2s ease-in-out infinite }
        @keyframes buttonSparkle {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .choice-btn::before { content:''; position:absolute; top:-50%; left:-50%; width:200%; height:200%; background: linear-gradient(45deg, transparent, rgba(255,255,255,.4), transparent); transition: transform .6s; transform: rotate(45deg) translate(-100%, -100%) }
        .choice-btn:hover::before { transform: rotate(45deg) translate(100%, 100%) }
        .choice-btn:hover { transform: translateY(-10px) scale(1.1); box-shadow: 0 25px 55px rgba(255,105,180,.6), 0 0 50px rgba(255,215,0,.5), inset 0 0 30px rgba(255,255,255,.3); background-position: 100% 100% }
        .choice-btn:active { transform: translateY(-6px) scale(1.08) }

        .forced-message { text-align:center; color: var(--pearl-white); max-width:600px; padding:50px; z-index:10; background: linear-gradient(145deg, rgba(221,160,221,.2) 0%, rgba(255,105,180,.15) 50%, rgba(255,192,203,.2) 100%); backdrop-filter: blur(20px); border-radius:30px; border:3px solid rgba(221,160,221,.4); animation: magicalShake 1s ease-in-out; box-shadow: 0 0 60px rgba(221,160,221,.5), inset 0 0 40px rgba(255,215,0,.1) }
        @keyframes magicalShake {0%,100%{transform:translateX(0) rotate(0)}25%{transform:translateX(-20px) rotate(-3deg)}75%{transform:translateX(20px) rotate(3deg)}}
        .forced-message h2 { font-family: var(--font-dancing), cursive; font-size: clamp(1.8rem, 5vw, 3rem); margin-bottom:30px; background: linear-gradient(45deg, var(--deep-rose), var(--sparkle-gold)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation: neonGlow 2.5s ease-in-out infinite; filter: drop-shadow(0 0 20px rgba(255,105,180,.8)) }
        @keyframes neonGlow {0%,100%{filter: drop-shadow(0 0 20px rgba(255,105,180,.8))}50%{filter: drop-shadow(0 0 35px rgba(255,105,180,1)) drop-shadow(0 0 45px rgba(255,215,0,.6))}}

        .book-container { perspective: 1800px; width:100%; max-width:950px; height: 750px; position: relative; z-index: 10 }
        .book { width:100%; height:100%; position:relative; transform-style: preserve-3d; animation: bookMagicalOpen 4s cubic-bezier(.175,.885,.32,1.275) forwards; filter: drop-shadow(0 25px 50px rgba(255,105,180,.4)) }
        @keyframes bookMagicalOpen { 0%{ transform:rotateY(0) scale(.7); filter: brightness(.4) blur(8px) drop-shadow(0 25px 50px rgba(255,105,180,.4)) } 30%{ transform:rotateY(-10deg) scale(.85); filter: brightness(.7) blur(4px) drop-shadow(0 30px 60px rgba(255,105,180,.5)) } 70%{ transform:rotateY(-20deg) scale(.95); filter: brightness(.9) blur(1px) drop-shadow(0 35px 70px rgba(255,105,180,.6)) } 100%{ transform:rotateY(-25deg) scale(1); filter: brightness(1) blur(0) drop-shadow(0 40px 80px rgba(255,105,180,.4)) } }
        .book-page { position:absolute; width:50%; height:100%; background: linear-gradient(145deg, var(--cream) 0%, #FFF8F0 30%, var(--pearl-white) 70%, #FFFAF0 100%); border:4px solid var(--deep-rose); border-radius:20px; box-shadow: 0 20px 50px rgba(255,105,180,.3), inset 0 0 30px rgba(255,192,203,.2), 0 0 40px rgba(255,215,0,.1); padding:50px; overflow-y:auto; position:relative }
        .book-page::before { content:''; position:absolute; inset:0; background: radial-gradient(circle at 25% 85%, rgba(255,105,180,.08) 0%, transparent 60%), radial-gradient(circle at 75% 15%, rgba(255,215,0,.06) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(221,160,221,.04) 0%, transparent 80%); border-radius:16px; pointer-events:none }
        .left-page { left:0; transform-origin:right center }
        .right-page { right:0; transform-origin:left center; display:flex; justify-content:center; align-items:center; background: linear-gradient(145deg, var(--cream) 0%, var(--pearl-white) 100%) }
        .right-page-content { text-align:center; font-size:8rem; background: linear-gradient(45deg, var(--deep-rose), var(--magical-purple)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; opacity:.3; animation: bookIconFloat 5s ease-in-out infinite; filter: drop-shadow(0 0 25px rgba(255,105,180,.4)) }
        @keyframes bookIconFloat {0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-25px) rotate(8deg)}}
        .chapters-menu h2 { font-family: var(--font-dancing), cursive; background: linear-gradient(45deg, var(--deep-rose), var(--sparkle-gold), var(--magical-purple)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; font-size:3.2rem; margin-bottom:40px; text-align:center; animation: titleShimmer 4s ease-in-out infinite; filter: drop-shadow(0 0 15px rgba(255,105,180,.6)) }
        @keyframes titleShimmer {0%,100%{filter: drop-shadow(0 0 15px rgba(255,105,180,.6))}50%{filter: drop-shadow(0 0 25px rgba(255,105,180,.8)) drop-shadow(0 0 35px rgba(255,215,0,.4))}}
        .chapters-menu p { color:#8B4B85; font-size:1.4rem; margin-bottom:40px; font-style:italic; text-align:center; opacity:.9; text-shadow:1px 1px 2px rgba(255,182,193,.5) }
        .chapter-buttons { display:grid; gap:25px }
        .chapter-btn { background: linear-gradient(135deg, var(--deep-rose), var(--primary-rose), var(--rose-gold), var(--sparkle-gold)); background-size:300% 300%; color:#fff; border:none; padding:22px 35px; border-radius:20px; font-size:1.05rem; font-weight:500; cursor:pointer; transition: all .5s cubic-bezier(.175,.885,.32,1.275); box-shadow: 0 10px 25px rgba(255,105,180,.3), inset 0 0 20px rgba(255,255,255,.1); position:relative; overflow:hidden; text-shadow:2px 2px 4px rgba(0,0,0,.3); animation: buttonGlow 3s ease-in-out infinite }
        @keyframes buttonGlow {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .chapter-btn::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent); transition:left .6s }
        .chapter-btn:hover::before { left:100% }
        .chapter-btn:hover { transform: translateY(-8px) translateX(8px) scale(1.02); box-shadow: 0 20px 45px rgba(255,105,180,.5), 0 0 35px rgba(255,215,0,.4), inset 0 0 25px rgba(255,255,255,.2); background-position: 100% 100% }
        .chapter-content { animation: fadeInUp 1s ease-out forwards }
        @keyframes fadeInUp { from{opacity:0; transform: translateY(40px)} to{opacity:1; transform: translateY(0)} }
        .chapter-content h3 { font-family: var(--font-dancing), cursive; background: linear-gradient(45deg, var(--deep-rose), var(--sparkle-gold)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; font-size:2.1rem; margin-bottom:35px; text-align:center; border-bottom:3px solid transparent; border-image: linear-gradient(90deg, transparent, var(--deep-rose), var(--sparkle-gold), var(--deep-rose), transparent) 1; padding-bottom:20px; filter: drop-shadow(0 0 10px rgba(255,105,180,.5)) }
        .chapter-content p { color:#6B4C7B; font-size:1.05rem; line-height:2.1; text-align:justify; margin-bottom:25px; text-indent:35px; position:relative; padding-left:15px; animation: textReveal 1s ease-out forwards; text-shadow:1px 1px 2px rgba(255,192,203,.3) }
        @keyframes textReveal { from{opacity:0; transform:translateX(-30px)} to{opacity:1; transform:translateX(0)} }
        .chapter-content p:first-of-type::first-letter { font-size:3.2rem; font-weight:700; float:left; line-height:2.4rem; margin:12px 12px 0 0; background: linear-gradient(45deg, var(--deep-rose), var(--sparkle-gold)); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; filter: drop-shadow(2px 2px 4px rgba(255,105,180,.3)) }
        .back-btn { background: linear-gradient(135deg, var(--deep-rose), var(--magical-purple)); color:#fff; border:none; padding:15px 30px; border-radius:15px; cursor:pointer; margin-top:35px; font-size:1rem; transition: all .4s ease; box-shadow:0 8px 20px rgba(255,105,180,.3); text-shadow:1px 1px 2px rgba(0,0,0,.3) }
        .back-btn:hover { transform: translateY(-5px) scale(1.05); box-shadow:0 12px 30px rgba(255,105,180,.5) }
        .continue-btn { background: linear-gradient(135deg, var(--magical-purple), var(--deep-rose), var(--sparkle-gold)); background-size:200% 200%; color:#fff; border:none; padding:22px 45px; border-radius:20px; font-size:1.1rem; font-weight:600; cursor:pointer; transition: all .5s ease; box-shadow: 0 15px 35px rgba(221,160,221,.4), 0 0 30px rgba(255,215,0,.2); text-shadow:2px 2px 4px rgba(0,0,0,.3); animation: continueGlow 2s ease-in-out infinite }
        @keyframes continueGlow {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .hearts { position:fixed; inset:0; pointer-events:none; z-index:5 }
        .heart { position:absolute; font-size:28px; animation: heartFloat 15s linear infinite; filter: drop-shadow(0 0 15px rgba(255,182,193,.8)) }
        @keyframes heartFloat { 0%{ transform: translateY(100vh) rotate(0) scale(0); opacity:0 } 5%{ opacity:.8; transform: translateY(95vh) rotate(18deg) scale(.8) } 10%{ opacity:1; transform: translateY(90vh) rotate(36deg) scale(1) } 90%{ opacity:1; transform: translateY(-10vh) rotate(324deg) scale(1) } 95%{ opacity:.6; transform: translateY(-15vh) rotate(342deg) scale(.8) } 100%{ transform: translateY(-25vh) rotate(360deg) scale(0); opacity:0 } }
        .book-page::-webkit-scrollbar { width:10px }
        .book-page::-webkit-scrollbar-track { background: rgba(255,182,193,.1); border-radius:6px }
        .book-page::-webkit-scrollbar-thumb { background: linear-gradient(135deg, var(--deep-rose), var(--sparkle-gold)); border-radius:6px; box-shadow:0 0 10px rgba(255,105,180,.3) }
        .book-page::-webkit-scrollbar-thumb:hover { background: linear-gradient(135deg, var(--primary-rose), var(--deep-rose)) }
        @media (max-width: 1024px) { .book-container{height:85vh} .book-page{padding:30px; font-size:.95rem} .chapter-content h3{font-size:1.8rem} .chapter-content p{font-size:1.02rem; line-height:1.9} .right-page-content{font-size:6rem} }
        @media (max-width: 560px) { .book-page{padding:20px} .chapter-content h3{font-size:1.5rem} .chapter-content p{font-size:1rem; line-height:1.8} .particle{width:4px; height:4px} .heart{font-size:22px} }
      `}</style>
    </main>
  )
}
