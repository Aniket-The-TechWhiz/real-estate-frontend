import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do I schedule a property viewing?',
    answer: 'Once you\'ve logged in and selected a property you\'re interested in, you can contact us directly through the floating contact button on the website. Our team will promptly schedule a viewing at your convenience.',
  },
  {
    question: 'What documents do I need to rent a property?',
    answer: 'Typically, you\'ll need a valid ID, proof of income (pay stubs or employment letter), previous rental references, and a security deposit. Our team will guide you through the specific requirements for each property.',
  },
  {
    question: 'Can I negotiate the price?',
    answer: 'Yes, we welcome negotiations! Our experienced brokers work closely with property owners to find the best deal for both parties. Contact us to discuss pricing options for your selected property.',
  },
  {
    question: 'What is the security deposit policy?',
    answer: 'Security deposits typically range from one to two months\' rent, depending on the property. The deposit is fully refundable at the end of your lease, subject to property condition assessment.',
  },
  {
    question: 'Are pets allowed in rental properties?',
    answer: 'Pet policies vary by property. Many of our listings are pet-friendly, though some may require an additional pet deposit. You can filter properties by pet-friendly status or contact us for specific property policies.',
  },
  {
    question: 'How long does the property buying process take?',
    answer: 'The timeline varies based on financing, inspections, and negotiations. On average, the process takes 30-60 days from offer acceptance to closing. Our team ensures smooth coordination throughout.',
  },
  {
    question: 'Do you offer virtual tours?',
    answer: 'Yes! We offer high-quality virtual tours and video walkthroughs for all our properties. This allows you to explore properties from anywhere before scheduling an in-person viewing.',
  },
  {
    question: 'What are your broker fees?',
    answer: 'Our broker fees are competitive and transparent. Typically, rental fees are one month\'s rent, and sales commissions are based on the property value. Contact us for detailed fee information.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-6 text-left transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8"
        >
          <h3 className="text-xl mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Reach out to us anytime!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
