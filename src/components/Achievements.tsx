import { useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications, type Certification } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements({ onOpenCert }: { onOpenCert?: (c: Certification) => void }) {
  const rail = useRef<HTMLDivElement>(null);

  const handleOpenCert = (c: Certification) => {
    onOpenCert?.(c);
  };

  const openCertById = (id?: string) => {
    if (!id) return;
    const found = certifications.find((c) => c.id === id);
    if (found) handleOpenCert(found);
  };

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      {/* Top Moments Grid */}
      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.certId ? (
                  <button
                    type="button"
                    onClick={() => openCertById(a.certId)}
                    data-cursor="play"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1.5 pt-5 text-xs font-semibold tracking-wide text-[#d9b46a] underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    <span>View certificate</span>
                    <span className="text-[10px]">👁</span>
                  </button>
                ) : a.link ? (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View details ↗
                  </a>
                ) : null}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Official Verified Certifications Section */}
      <div className="mt-20">
        <div className="gutter mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#46e3a8] animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#46e3a8]">Credentials & Specializations</p>
            </div>
            <h3 className="mt-1 font-sans text-2xl font-bold tracking-tight text-bone sm:text-3xl">
              Certificates & Credentials <span className="text-mist font-normal">({certifications.length})</span>
            </h3>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-smoke">
            Click any certificate to inspect the full high-resolution document, view competencies, and verify accredited licenses on official portals.
          </p>
        </div>

        {/* Certificate Cards Rail */}
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-2">
            {certifications.map((c, i) => (
              <motion.article
                key={c.id}
                className="group relative flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10 transition duration-500 hover:-translate-y-1.5 hover:ring-white/30 sm:w-[360px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                {/* Certificate Preview Image */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleOpenCert(c)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenCert(c)}
                  data-cursor="play"
                  aria-label={`Inspect ${c.name}`}
                  className="relative aspect-[16/11] w-full cursor-pointer overflow-hidden bg-black/85"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 transition duration-700 group-hover:scale-105"
                  />
                  {/* Top Dark Scrim Gradient guaranteeing contrast behind badges on any certificate image */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/90 via-black/55 to-transparent pointer-events-none z-[5]" />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-ink-2 via-ink-2/60 to-transparent pointer-events-none opacity-90" />

                  {/* Issuer Badge Top Tag - SOLID HIGH-CONTRAST OPAQUE DARK PILL */}
                  <div className="absolute left-3 top-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#050508] px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-white shadow-[0_4px_16px_rgba(0,0,0,0.95)] ring-1 ring-white/35">
                      <span className="h-1.5 w-1.5 rounded-full bg-crimson-2" />
                      {c.issuerBadge}
                    </span>
                  </div>

                  {/* Verification Checkmark (only shown for verifiable certificates) */}
                  {c.hasOnlineVerification && (
                    <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-[#050508] px-2.5 py-1 text-[10px] font-bold text-[#46e3a8] ring-1 ring-[#46e3a8]/60 shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                      <span className="text-xs">✓</span>
                      <span>Verified</span>
                    </div>
                  )}

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 z-[8] flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-xs transition duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-bone px-4 py-2 text-xs font-bold text-ink shadow-2xl">
                      🔍 View Full Certificate
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-crimson-2">{c.issuer}</p>
                    <span className="rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white ring-1 ring-white/20">
                      {c.issuerBadge}
                    </span>
                  </div>
                  <h4 className="mt-1 font-sans text-base font-bold leading-snug text-bone line-clamp-2">
                    {c.name}
                  </h4>

                  {c.credentialId && (
                    <div className="mt-3 flex items-center justify-between rounded-lg bg-black/40 px-3 py-1.5 ring-1 ring-white/5">
                      <span className="text-[10px] uppercase tracking-wider text-smoke">
                        {c.hasOnlineVerification ? 'Credential ID' : 'Certificate No.'}
                      </span>
                      <code className="text-[11px] font-mono font-semibold text-mist">{c.credentialId}</code>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between text-xs text-smoke">
                    <span>{c.date}</span>
                    {c.validity && <span className="text-[11px] text-[#46e3a8]">{c.validity}</span>}
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex items-center gap-2 pt-3 border-t border-white/5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleOpenCert(c);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-crimson-2 border border-white/15 hover:border-crimson-2 py-2.5 text-center text-xs font-bold text-bone hover:text-white transition duration-200 cursor-pointer shadow-sm hover:shadow-lg"
                    >
                      <span>🔍</span>
                      <span>View Full Certificate</span>
                    </button>
                    {c.hasOnlineVerification && c.link && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="link"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Verify ${c.name} on official portal`}
                        title="Verify on official portal"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-xs text-mist transition hover:border-bone hover:text-bone hover:bg-white/5"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>
    </>
  );
}
