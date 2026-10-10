import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { certifications, type Certification } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

export default function CertificateModal({
  cert,
  onClose,
  onSelect,
}: {
  cert: Certification;
  onClose: () => void;
  onSelect: (c: Certification) => void;
}) {
  useScrollLock(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const nextIdx = (certifications.findIndex((c) => c.id === cert.id) + 1) % certifications.length;
        onSelect(certifications[nextIdx]);
      }
      if (e.key === 'ArrowLeft') {
        const prevIdx = (certifications.findIndex((c) => c.id === cert.id) - 1 + certifications.length) % certifications.length;
        onSelect(certifications[prevIdx]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cert, onClose, onSelect]);

  const copyId = async () => {
    if (!cert.credentialId) return;
    try {
      await navigator.clipboard.writeText(cert.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  const currentIndex = certifications.findIndex((c) => c.id === cert.id);
  const prevCert = certifications[(currentIndex - 1 + certifications.length) % certifications.length];
  const nextCert = certifications[(currentIndex + 1) % certifications.length];

  return (
    <motion.div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6 lg:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
      onClick={onClose}
    >
      <motion.div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-ink-2 shadow-2xl ring-1 ring-white/15"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-black/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ring-1 ring-white/20">
              {cert.issuerBadge}
            </span>
            <span className="text-xs text-smoke">
              {currentIndex + 1} of {certifications.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelect(prevCert)}
              aria-label="Previous certificate"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone transition hover:bg-white/20 cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => onSelect(nextCert)}
              aria-label="Next certificate"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone transition hover:bg-white/20 cursor-pointer"
            >
              →
            </button>
            <button
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close modal"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone transition hover:bg-white/20 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8 items-start">
            {/* Certificate Preview Frame */}
            <div className="relative overflow-hidden rounded-xl bg-black/80 p-2 ring-1 ring-white/10">
              <a href={cert.image} target="_blank" rel="noreferrer" title="Click to view full image in new tab">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-auto w-full rounded-lg object-contain transition duration-300 hover:scale-[1.01]"
                />
              </a>
              <p className="mt-2 text-center text-[11px] text-smoke">
                Click image to open high-resolution certificate in full window ↗
              </p>
            </div>

            {/* Details Panel */}
            <div className="flex flex-col">
              {cert.hasOnlineVerification ? (
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#46e3a8]">
                  <span>✓</span>
                  <span>Official Verified Credential</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-mist">
                  <span>✦</span>
                  <span>Course Completion Certificate</span>
                </div>
              )}

              <h3 className="mt-2 font-sans text-xl font-bold leading-snug text-bone sm:text-2xl">
                {cert.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-mist">{cert.issuer}</p>

              {/* Credential ID Card */}
              {cert.credentialId && (
                <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-smoke">
                      {cert.hasOnlineVerification ? 'Credential ID' : 'Certificate Reference No.'}
                    </span>
                    <button
                      type="button"
                      onClick={copyId}
                      className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-bone transition hover:bg-white/20 cursor-pointer"
                    >
                      {copied ? '✓ Copied' : 'Copy ID'}
                    </button>
                  </div>
                  <p className="mt-2 font-mono text-sm font-semibold text-bone select-all">{cert.credentialId}</p>
                </div>
              )}

              {/* Dates */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-smoke">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-smoke/70">Issued</span>
                  <span className="font-medium text-bone">{cert.date}</span>
                </div>
                {cert.validity && (
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-smoke/70">Validity</span>
                    <span className="font-medium text-[#46e3a8]">{cert.validity}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-bone/80">{cert.description}</p>

              {/* Verified Competencies */}
              <div className="mt-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-smoke">
                  {cert.hasOnlineVerification ? 'Verified Competencies' : 'Key Skills Covered'}
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-mist ring-1 ring-white/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                {cert.hasOnlineVerification && cert.link ? (
                  <>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="flex flex-1 min-h-12 items-center justify-center gap-2 rounded-md bg-bone px-6 text-sm font-bold text-ink transition hover:bg-white"
                    >
                      Verify on Official Issuer Portal ↗
                    </a>
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold text-bone transition hover:bg-white/10"
                    >
                      Open Image ↗
                    </a>
                  </>
                ) : (
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 min-h-12 items-center justify-center gap-2 rounded-md bg-bone px-6 text-sm font-bold text-ink transition hover:bg-white"
                  >
                    Open High-Resolution Certificate ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
