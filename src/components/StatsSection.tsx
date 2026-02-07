import { motion, useMotionValue, useSpring, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  animate?: boolean;
}

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 60, 
    stiffness: 100 
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix, prefix]);

  return <span ref={ref}>0</span>;
}

function StaticCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  return <span>{prefix + value.toLocaleString() + suffix}</span>;
}

function StatItem({ icon, value, label, suffix, prefix, animate = true }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="mb-4 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <div className="text-4xl mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          {animate ? (
            <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
          ) : (
            <StaticCounter value={value} suffix={suffix} prefix={prefix} />
          )}
        </div>
        <p className="text-gray-600">{label}</p>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [shouldAnimate] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }
    return sessionStorage.getItem('statsAnimated') !== 'true';
  });

  useEffect(() => {
    if (!shouldAnimate || typeof window === 'undefined') {
      return;
    }
    sessionStorage.setItem('statsAnimated', 'true');
  }, [shouldAnimate]);

  const stats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      value: 500,
      suffix: '+',
      label: 'Properties Sold',
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 1200,
      suffix: '+',
      label: 'Happy Clients',
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 15,
      suffix: '+',
      label: 'Years of Experience',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Our Track Record Speaks
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Numbers that showcase our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} animate={shouldAnimate} />
          ))}
        </div>
      </div>
    </section>
  );
}