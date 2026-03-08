import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Bhajan } from "@/data/albums";

interface BhajanAccordionProps {
  bhajan: Bhajan;
}

const BhajanAccordion = ({ bhajan }: BhajanAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const tekSection = bhajan.sections.find((s) => s.type === "tek");
  const tekPreview = tekSection?.lines[0] ?? "";

  return (
    <div className="border-b border-border/15">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <div className="flex items-start gap-5">
          <span className="text-[10px] text-muted-foreground/50 font-light pt-1 w-6 shrink-0">
            {String(bhajan.number).padStart(2, "0")}
          </span>
          <div className="space-y-1.5">
            <h3 className="font-serif text-base md:text-lg text-foreground/80 group-hover:text-foreground transition-colors duration-300">
              {bhajan.title}
            </h3>
            {!isOpen && (
              <p className="text-[11px] text-muted-foreground/40 font-light italic line-clamp-1">
                {tekPreview}
              </p>
            )}
          </div>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground/30 text-lg shrink-0 mt-1"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-11 pr-4 space-y-8">
              {bhajan.preNote && (
                <div className="space-y-1">
                  {bhajan.preNote.split("\n").map((line, i) => (
                    <p key={i} className="text-[11px] text-muted-foreground/40 italic">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              {bhajan.sections.map((section, si) => (
                <div key={si} className="space-y-3">
                  {/* Section label */}
                  {section.type === "tek" && (
                    <p className="text-[9px] tracking-[0.3em] uppercase text-primary/40 font-light">
                      टेक
                    </p>
                  )}
                  {section.type === "antara" && section.label && (
                    <p className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/30 font-light">
                      {section.label}
                    </p>
                  )}
                  {section.type === "samapan" && (
                    <p className="text-[9px] tracking-[0.3em] uppercase text-primary/30 font-light">
                      समापन
                    </p>
                  )}

                  {/* Lines */}
                  <div className={`space-y-1 ${section.type === "tek" ? "border-l-2 border-primary/20 pl-4" : section.type === "samapan" ? "border-l-2 border-primary/15 pl-4" : "pl-4"}`}>
                    {section.lines.map((line, li) => {
                      if (line === "") return <div key={li} className="h-3" />;
                      const isCallResponse = line.startsWith("*") || line.includes("—");
                      return (
                        <p
                          key={li}
                          className={`text-sm leading-relaxed ${
                            section.type === "tek"
                              ? "text-foreground/70 font-medium"
                              : isCallResponse && section.type === "antara"
                              ? "text-primary/50 italic text-[13px]"
                              : section.type === "samapan"
                              ? "text-foreground/60 font-medium"
                              : "text-muted-foreground/60 font-light"
                          }`}
                        >
                          {line}
                        </p>
                      );
                    })}
                  </div>

                  {/* Repeat tek after each antara */}
                  {section.type === "antara" && tekSection && (
                    <div className="border-l-2 border-primary/10 pl-4 mt-4 opacity-50">
                      {tekSection.lines.map((line, li) => (
                        <p key={li} className="text-[12px] text-foreground/40 font-light">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BhajanAccordion;
