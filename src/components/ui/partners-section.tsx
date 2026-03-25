import React from "react"
import { AnimatedGroup } from "@/components/ui/animated-group"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export interface PartnerLogo {
  src: string
  alt: string
  height: number
  imgClassName?: string
}

interface PartnersSectionProps {
  partners: PartnerLogo[]
  className?: string
}

export function PartnersSection({ partners = [], className }: PartnersSectionProps) {
  return (
    <section className={`pb-16 pt-16 md:pb-32 ${className ?? ""}`}>
      <div className="relative m-auto max-w-5xl px-6">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mx-auto grid max-w-4xl grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-14 place-items-center"
        >
          {partners.map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-full">
              <img
                className={`max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain ${logo.imgClassName ?? ""}`}
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
