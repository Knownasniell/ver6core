/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */
"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "dah berapa lama sii nunggu dia??",
    answer:
      "lama banget jir, kalo dijadikan hari, mungkin adalah 11 tahun 4 bulan 28 hari. tapi gapapa sih, namanya juga ak sayang dia, hhe",
  },
  {
    question: "kenapa ga nyerah aja milih yang lain?",
    answer:
      "gbakal. ya sebenarnya hampir nyerah, tapi makasih buat temen-temen yang ngedukung ak yaa, jadinya semangat deh nunggu diaa :p",
  },
  {
    question: "yakin dia bakalan milih lu?",
    answer:
      "yakin dong, perihal timingnya doang salah. ntar juga kalo emang jodohnya (aamiin ya allah) pasti milihnya ak, eakk :p ",
  },
  {
    question: "bingung gw mau nanya apa lagi?",
    answer:
      "yaudah gausa nanya lagi anjim, gw juga bingung jawab apa awoakwok",
  },
  {
    question: "sayang dia ga bang?",
    answer:
      "yaiyalah gila, sayang banget gw anjir, cok woila pake nanya. sayangnya gw ke dia tuh ibaratkan lautan, luasnya tak terhinggaa waduhh :p",
  },
]

export function FAQ() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Pertanyaan random</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            pertanyaan yang mungkin my crush tanyakan atau orang nanya, dah kujawab tuh jir.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/40 rounded-2xl px-6 hover:border-primary/40 transition-all"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  )
}
