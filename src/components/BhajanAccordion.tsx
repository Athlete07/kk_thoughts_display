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
    <div className="border-b border-border/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex items-start justify-between gap-4 text-left group"
      >
        <div className="flex items-start gap-5">
          <span className="text-sm text-muted-foreground font-light pt-0.5 w-8 shrink-0 tabular-nums">
            {String(bhajan.number).padStart(2, "0")}
          </span>
          <div className="space-y-1.5">
            <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300 font-medium">
              {bhajan.title}
            </h3>
            {!isOpen && (
              <p className="text-sm text-muted-foreground italic line-clamp-1">
                {tekPreview}
              </p>
            )}
          </div>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground text-xl shrink-0 mt-1 font-light"
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
            <div className="pb-12 pl-13 pr-4 space-y-10" style={{ paddingLeft: "3.25rem" }}>
              {bhajan.preNote && (
                <div className="space-y-1.5 bg-card/50 px-4 py-3 border-l-2 border-muted-foreground/20">
                  {bhajan.preNote.split("\n").map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground italic leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              )}

              {bhajan.sections.map((section, si) => (
                <div key={si} className="space-y-4">
                  {/* Section label */}
                  {section.type === "tek" && (
                    <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
                      टेक
                    </p>
                  )}
                  {section.type === "antara" && section.label && (
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">
                      {section.label}
                    </p>
                  )}
                  {section.type === "samapan" && (
                    <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
                      समापन
                    </p>
                  )}

                  {/* Lines */}
                  <div
                    className={`space-y-2 ${
                      section.type === "tek"
                        ? "border-l-2 border-primary/40 pl-5"
                        : section.type === "samapan"
                        ? "border-l-2 border-primary/30 pl-5"
                        : "pl-5"
                    }`}
                  >
                    {section.lines.map((line, li) => {
                      if (line === "") return <div key={li} className="h-4" />;
                      const isCallResponse = line.startsWith("*") || line.includes("—");
                      return (
                        <p
                          key={li}
                          className={`text-base leading-relaxed ${
                            section.type === "tek"
                              ? "text-foreground font-medium"
                              : isCallResponse && section.type === "antara"
                              ? "text-primary italic"
                              : section.type === "samapan"
                              ? "text-foreground font-medium"
                              : "text-foreground/90"
                          }`}
                        >
                          {line}
                        </p>
                      );
                    })}
                  </div>

                  {/* Repeat tek after each antara */}
                  {section.type === "antara" && tekSection && (
                    <div className="border-l-2 border-primary/20 pl-5 mt-5 opacity-60">
                      {tekSection.lines.map((line, li) => (
                        <p key={li} className="text-sm text-foreground/70 leading-relaxed">
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
