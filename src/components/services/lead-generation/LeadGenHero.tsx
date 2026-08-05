import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Bell, CalendarCheck, Mail, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { staggerContainer, fadeUp, easeOut } from '@/lib/motion';

const BARS = [38, 52, 44, 68, 60, 78, 92];
const PIPELINE = [
  { label: 'New', value: 24, color: 'bg-block-lilac' },
  { label: 'Qualified', value: 16, color: 'bg-block-mint' },
  { label: 'Booked', value: 9, color: 'bg-accent-magenta' },
];

const LeadGenHero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pb-32 bg-ink overflow-hidden">
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.32 }}
        transition={{ duration: 2 }}
        className="absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full bg-block-mint/30 blur-[130px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -bottom-40 -right-20 w-[560px] h-[560px] rounded-full bg-accent-magenta/25 blur-[140px]"
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center lg:text-left">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 font-mono uppercase text-caption tracking-[0.6px] rounded-pill bg-white/10 text-inverse-ink border border-white/10"
            >
              <Target className="h-3.5 w-3.5" />
              Lead Generation &amp; Paid Advertising
            </motion.span>

            <motion.h1 variants={fadeUp} className="text-inverse-ink mb-6 text-[clamp(2rem,1.2rem+3.4vw,3.75rem)] leading-[1.08]">
              Generate More Qualified Leads.
              <br />
              <span className="text-block-mint">Close More Customers.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-inverse-ink/70 mb-10 max-w-xl mx-auto lg:mx-0">
              Full-funnel paid advertising and automation systems that turn ad spend into booked
              appointments — tracked, optimized and reported on every step of the way.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto rounded-pill px-8 py-6 text-base group bg-white text-ink hover:bg-white/90 id-calendly-booking">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button variant="outline" className="w-full sm:w-auto rounded-pill px-8 py-6 text-base border-white/25 bg-transparent text-inverse-ink hover:bg-white/10" asChild>
                <a href="#services">Generate More Leads</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Premium ads/leads dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="relative"
          >
            <div className="relative rounded-block border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] space-y-4">
              {/* Platform stat tiles */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Google Ads', cpl: '$18.40' },
                  { name: 'Meta Ads', cpl: '$14.90' },
                ].map((platform) => (
                  <div key={platform.name} className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-inverse-ink/70">{platform.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-block-mint" />
                    </div>
                    <div className="flex items-end gap-0.5 h-8 mb-2">
                      {BARS.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.6, delay: 0.5 + i * 0.05, ease: easeOut }}
                          className="flex-1 rounded-sm bg-block-mint/70"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-inverse-ink/50">Cost / Lead {platform.cpl}</span>
                  </div>
                ))}
              </div>

              {/* Conversion graph */}
              <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-semibold text-inverse-ink/70">Conversion Graph</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-block-mint font-semibold">
                    <TrendingUp className="h-3 w-3" /> +38%
                  </span>
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {BARS.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.7, delay: 0.7 + i * 0.06, ease: easeOut }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-accent-magenta/70 to-accent-magenta/30"
                    />
                  ))}
                </div>
              </div>

              {/* Lead pipeline strip */}
              <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3.5">
                <span className="text-[11px] font-semibold text-inverse-ink/70 block mb-2.5">Lead Pipeline</span>
                <div className="flex gap-2">
                  {PIPELINE.map((stage) => (
                    <div key={stage.label} className="flex-1 rounded-md bg-white/[0.04] border border-white/10 p-2.5 text-center">
                      <span className={`inline-block w-2 h-2 rounded-full ${stage.color} mb-1.5`} />
                      <div className="text-lg font-bold text-inverse-ink tabular-nums">{stage.value}</div>
                      <div className="text-[10px] text-inverse-ink/50">{stage.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification chips */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 hidden sm:flex items-center gap-2 bg-canvas border border-hairline rounded-pill px-3.5 py-2 shadow-card"
            >
              <Bell className="h-3.5 w-3.5 text-accent-magenta" />
              <span className="text-xs font-semibold text-ink">New Lead: J. Rivera</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute top-1/2 -right-6 hidden sm:flex items-center gap-2 bg-canvas border border-hairline rounded-pill px-3.5 py-2 shadow-card"
            >
              <CalendarCheck className="h-3.5 w-3.5 text-block-mint" />
              <span className="text-xs font-semibold text-ink">Appointment Booked</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
              className="absolute -bottom-5 left-1/3 hidden sm:flex items-center gap-2 bg-canvas border border-hairline rounded-pill px-3.5 py-2 shadow-card"
            >
              <Mail className="h-3.5 w-3.5 text-block-lilac" />
              <span className="text-xs font-semibold text-ink">Follow-up Sent</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="absolute -bottom-8 -right-3 hidden md:flex items-center gap-2 bg-canvas border border-hairline rounded-pill px-3.5 py-2 shadow-card"
            >
              <Users className="h-3.5 w-3.5 text-accent-magenta" />
              <span className="text-xs font-semibold text-ink">CRM Synced</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenHero;
