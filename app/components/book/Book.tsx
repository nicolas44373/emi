"use client";

import React, { useEffect, useRef, useState } from "react";
import type { ChapterData } from "@/app/components/data/chapters";
import ChaptersMenu from "./ChaptersMenu";
import Chapter from "./Chapter";
import { motion } from "framer-motion";

export default function Book({
  chapters,
}: {
  chapters: ChapterData[];
}) {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const current = chapters.find((c) => c.id === selectedChapter) || null;

  // Ref al artículo para scrollear al inicio y manejar el foco
  const articleRef = useRef<HTMLDivElement | null>(null);

  // Cuando cambia el capítulo seleccionado: scroll al inicio del contenido
  useEffect(() => {
    if (selectedChapter != null) {
      requestAnimationFrame(() => {
        articleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        articleRef.current?.focus({ preventScroll: true });
      });
    }
  }, [selectedChapter]);

  // IDs ordenados por si no son 1..N exactos
  const minId = Math.min(...chapters.map((c) => c.id));
  const maxId = Math.max(...chapters.map((c) => c.id));

  return (
    <div className="relative z-20 min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 text-zinc-800 dark:text-zinc-100">
      {/* Topbar */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
        {/* franja de color */}
        <div className="h-1 w-full bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <button
            onClick={() => {
              if (current) {
                setSelectedChapter(null);
              } else {
                setMenuOpen(true);
              }
            }}
            className="md:hidden inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            aria-label="Abrir índice"
          >
            <span className="text-lg">📚</span>
            Índice
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xl leading-none">📖</span>
            <p className="text-sm sm:text-base font-semibold tracking-tight">
              {current ? current.title : "Tu libro"}
            </p>
          </div>

          <div className="w-[72px] md:w-0" aria-hidden />
        </div>
      </header>

      {/* Contenido principal */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-10 grid grid-cols-1 md:grid-cols-[320px,1fr] gap-6 md:gap-8">
        {/* Índice: visible solo cuando NO hay capítulo seleccionado (también en desktop) */}
        {!current && (
          <aside className="hidden md:block">
            <nav className="sticky top-20">
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="px-1 py-2 text-sm font-semibold tracking-tight text-zinc-600 dark:text-zinc-300">
                    Índice de capítulos
                  </h2>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-gradient-to-r from-pink-200 to-rose-200 text-zinc-700 dark:from-zinc-800 dark:to-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60">
                    {chapters.length} en total
                  </span>
                </div>
                <div className="border-t border-zinc-200/70 dark:border-zinc-800/70 my-2" />
                <ChaptersMenu
                  onSelect={(id) => {
                    setSelectedChapter(id);
                  }}
                />
              </div>
            </nav>
          </aside>
        )}

        {/* Área de lectura */}
        <section>
          {/* Landing si no hay capítulo seleccionado */}
          {!current && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-auto max-w-3xl"
            >
              <div className="rounded-3xl border border-rose-100/70 dark:border-rose-900/30 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-rose-100/70 via-white to-rose-100/70 dark:from-rose-900/20 dark:via-zinc-950 dark:to-rose-900/20 px-6 py-10 sm:px-10 sm:py-14 relative">
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-center bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
                    Nuestro Libro
                  </h1>
                  <p className="mt-3 text-center text-zinc-600 dark:text-zinc-300">
                    Nuestra Pequeña historia
                  </p>
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                    >
                      Subir arriba
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Capítulo actual */}
          {current && (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-auto max-w-4xl"
            >
              <div className="rounded-[28px] border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 overflow-hidden shadow-xl">
                {/* Barra superior de capítulo */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-lg">📘</span>
                    <h2 className="truncate text-base sm:text-lg font-semibold tracking-tight">
                      {current.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedChapter(null)}
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                  >
                    Índice
                  </button>
                </div>

                {/* Contenido del capítulo */}
                <article
                  ref={articleRef}
                  tabIndex={-1}
                  className="min-h-[60vh] md:min-h-[72vh] px-5 sm:px-7 md:px-8 py-6 md:py-8 leading-relaxed text-[15.5px] sm:text-base md:text-[17px]"
                >
                  {/* ✅ ChapterData tiene paragraphs: string[] */}
                  <Chapter
                    title={current.title}
                    paragraphs={current?.paragraphs ?? []}
                    onBack={() => setSelectedChapter(null)}
                  />
                </article>

                {/* Pie */}
                <div className="px-4 sm:px-6 py-3 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <span>
                    Capítulo {current.id} de {chapters.length}
                  </span>
                  <span>💕</span>
                </div>
              </div>

              {/* Navegación entre capítulos */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="flex gap-2">
                  <NavButton
                    label="⟵ Anterior"
                    disabled={current.id === minId}
                    onClick={() => {
                      const prevId = previousChapterId(chapters, current.id);
                      if (prevId != null) setSelectedChapter(prevId);
                    }}
                  />
                  <NavButton
                    label="Siguiente ⟶"
                    disabled={current.id === maxId}
                    onClick={() => {
                      const nextId = nextChapterId(chapters, current.id);
                      if (nextId != null) setSelectedChapter(nextId);
                    }}
                  />
                </div>

                {/* Mini progreso */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="h-2 w-36 bg-zinc-200/70 dark:bg-zinc-800/70 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500"
                      style={{
                        width: `${(chapterIndex(chapters, current.id) + 1) * (100 / chapters.length)}%`,
                      }}
                    />
                  </div>
                  <span>
                    {chapterIndex(chapters, current.id) + 1}/{chapters.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </main>

      {/* FAB índice en móvil */}
      {!current && (
        <button
          onClick={() => setMenuOpen(true)}
          className="fixed bottom-4 right-4 z-50 md:hidden rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500"
          aria-label="Abrir índice"
        >
          📚 Índice
        </button>
      )}

      {/* Drawer móvil del índice */}
      {!current && (
        <div
          className={`fixed inset-0 z-50 md:hidden ${menuOpen ? "" : "pointer-events-none"}`}
          aria-hidden={!menuOpen}
        >
          {/* backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setMenuOpen(false)}
          />
          {/* panel */}
          <div
            className={`absolute bottom-0 left-0 right-0 rounded-t-2xl bg-white dark:bg-zinc-950 shadow-2xl transition-transform duration-300 ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
          >
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Índice de capítulos</h3>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-1 text-sm border border-zinc-200 dark:border-zinc-800"
                aria-label="Cerrar índice"
              >
                ✕
              </button>
            </div>
            <div className="p-3">
              <ChaptersMenu
                onSelect={(id) => {
                  setSelectedChapter(id);
                  setMenuOpen(false);
                }}
              />
            </div>
            <div className="h-[env(safe-area-inset-bottom)]" />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8">
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          Hecho con cariño • 📖💕
        </p>
      </footer>
    </div>
  );
}

/* Helpers */
function chapterIndex(list: ChapterData[], id: number) {
  return list.findIndex((c) => c.id === id);
}
function nextChapterId(list: ChapterData[], id: number) {
  const sorted = [...list].sort((a, b) => a.id - b.id);
  const idx = sorted.findIndex((c) => c.id === id);
  const next = sorted[idx + 1];
  return next?.id ?? null;
}
function previousChapterId(list: ChapterData[], id: number) {
  const sorted = [...list].sort((a, b) => a.id - b.id);
  const idx = sorted.findIndex((c) => c.id === id);
  const prev = sorted[idx - 1];
  return prev?.id ?? null;
}

function NavButton({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold border border-transparent bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 text-white shadow hover:brightness-110 active:scale-[.98] disabled:opacity-40 disabled:cursor-not-allowed transition"
    >
      {label}
    </button>
  );
}
