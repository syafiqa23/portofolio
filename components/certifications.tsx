"use client";

import { useState } from "react";
import { certificationsData, Certification } from "@/data/certifications";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  FileText,
  ShieldCheck,
  X,
} from "lucide-react";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 bg-[#FFFDF8] border-b border-[#E7E0D8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="space-y-3 mb-16 text-left max-w-2xl">
          <span className="text-xs font-mono text-[#686868] uppercase tracking-widest block">
            CREDENTIALS &amp; RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#252525] font-serif-heading tracking-tight">
            Certifications &amp; Achievements
          </h2>
          <p className="text-sm text-[#686868] leading-relaxed">
            Internship credentials, conference participation, technical workshops, and online course certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <article
              key={cert.id}
              className="bg-[#FFF8F3] border border-[#E7E0D8] rounded-2xl overflow-hidden shadow-2xs group flex flex-col"
            >
              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full text-left"
                aria-label={`View ${cert.title}`}
              >
                <div className={`h-56 border-b border-[#E7E0D8] ${cert.pastelBg} p-4`}>
                  <div className="h-full rounded-xl bg-[#FFFDF8] border border-[#E7E0D8] overflow-hidden shadow-2xs flex items-center justify-center">
                    {cert.imageUrl ? (
                      <img
                        src={cert.imageUrl}
                        alt={`${cert.title} preview`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-[#252525]">
                        <ExternalLink className="w-8 h-8" />
                        <span className="text-xs font-mono uppercase tracking-widest">
                          External Credential
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>

              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-md text-xs font-mono font-medium border border-[#E7E0D8] ${cert.pastelBg}`}>
                      {cert.organization}
                    </span>
                    {cert.badge && (
                      <span className="px-3 py-1 rounded-md bg-[#FFFDF8] border border-[#E7E0D8] text-xs font-mono font-semibold text-[#252525]">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-normal text-[#252525] font-serif-heading group-hover:underline underline-offset-4 decoration-1">
                    {cert.title}
                  </h3>

                  <div className="space-y-1.5 text-xs font-mono text-[#686868]">
                    <div>Issued: <strong className="text-[#252525]">{cert.issueDate}</strong></div>
                    {cert.credentialId && (
                      <div>Credential ID: <strong className="text-[#252525]">{cert.credentialId}</strong></div>
                    )}
                    {cert.performance && (
                      <div>Performance: <strong className="text-[#252525]">{cert.performance}</strong></div>
                    )}
                    {cert.role && (
                      <div>Role: <strong className="text-[#252525]">{cert.role}</strong></div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E0D8] flex items-center justify-between gap-3 text-xs font-mono text-[#686868]">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-[#252525] hover:underline underline-offset-4"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{cert.documentUrl ? "View document" : "View credential"}</span>
                  </button>
                  {(cert.documentUrl || cert.credentialUrl) && (
                    <a
                      href={cert.documentUrl ?? cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#686868] hover:text-[#252525]"
                    >
                      <span>Open</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-[#FFFDF8] border border-[#E7E0D8] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-xl relative space-y-6 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#FFF8F3] hover:bg-[#E7E0D8] text-[#252525] transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-3 pr-12">
                <div className="inline-block px-3 py-1 rounded bg-[#F8D8C8] text-xs font-mono font-medium text-[#252525]">
                  OFFICIAL CREDENTIAL
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#252525] font-serif-heading">
                  {selectedCert.title}
                </h3>
                <p className="text-xs font-mono text-[#686868]">
                  Issuer: {selectedCert.organization} &bull; {selectedCert.issueDate}
                </p>
              </div>

              {selectedCert.documentUrl ? (
                <div className="h-[68vh] min-h-[420px] rounded-xl bg-[#FFF8F3] border border-[#E7E0D8] overflow-hidden">
                  <object
                    data={selectedCert.documentUrl}
                    type="application/pdf"
                    className="h-full w-full"
                    aria-label={`${selectedCert.title} document`}
                  >
                    <div className="h-full flex flex-col items-center justify-center gap-3 text-[#686868] p-6 text-center">
                      <FileText className="w-10 h-10" />
                      <p className="text-sm">This browser cannot preview the PDF inline.</p>
                    </div>
                  </object>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-[#FFF8F3] border border-[#E7E0D8] space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-[#252525]" />
                    <span>Credential is available through the linked external profile.</span>
                  </div>
                </div>
              )}

              <div className="p-5 rounded-xl bg-[#FFF8F3] border border-[#E7E0D8] grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {selectedCert.credentialId && (
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#252525]" />
                    <span>Credential ID: <strong className="text-[#252525]">{selectedCert.credentialId}</strong></span>
                  </div>
                )}
                {selectedCert.performance && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#252525]" />
                    <span>Final Performance: <strong className="text-[#252525]">{selectedCert.performance}</strong></span>
                  </div>
                )}
                {selectedCert.role && (
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#252525]" />
                    <span>Role: <strong className="text-[#252525]">{selectedCert.role}</strong></span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#686868]">Verified credential display</span>
                <div className="flex flex-wrap items-center gap-2">
                  {selectedCert.documentUrl && (
                    <a
                      href={selectedCert.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#252525] text-white text-xs font-medium"
                    >
                      <span>Open Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFF8F3] hover:bg-[#F8D8C8]/40 border border-[#E7E0D8] text-xs font-medium text-[#252525] transition-all"
                    >
                      <span>{selectedCert.credentialLabel ?? "View Credential"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
