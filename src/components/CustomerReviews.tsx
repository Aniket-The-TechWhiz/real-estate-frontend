import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Property Buyer',
    rating: 5,
    comment: 'PrimeBuild Brokers made my home buying experience seamless. Their team was professional, knowledgeable, and helped me find the perfect property within my budget. Highly recommended!',
    date: 'January 2026'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Rental Client',
    rating: 5,
    comment: 'Outstanding service from start to finish. They found me an amazing rental property in downtown Manhattan. The entire process was smooth and efficient.',
    date: 'December 2025'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Home Seller',
    rating: 5,
    comment: 'I was impressed by their market knowledge and negotiation skills. They sold my property above asking price in just two weeks. Truly exceptional service!',
    date: 'November 2025'
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Investment Client',
    rating: 5,
    comment: 'As an investor, I value expertise and professionalism. PrimeBuild Brokers exceeded my expectations in helping me build my real estate portfolio.',
    date: 'October 2025'
  },
  {
    id: '5',
    name: 'Jessica Martinez',
    role: 'First-Time Buyer',
    rating: 5,
    comment: 'As a first-time homebuyer, I was nervous about the process. The team guided me every step of the way and made it stress-free. Couldn\'t be happier with my new home!',
    date: 'September 2025'
  },
  {
    id: '6',
    name: 'Robert Kim',
    role: 'Rental Client',
    rating: 5,
    comment: 'They helped me find the perfect apartment in less than a week. Their knowledge of the local market and responsiveness were outstanding.',
    date: 'August 2025'
  },
  {
    id: '7',
    name: 'Amanda Foster',
    role: 'Property Seller',
    rating: 5,
    comment: 'Professional, attentive, and results-driven. They handled every detail of selling my condo with expertise. Would definitely work with them again!',
    date: 'July 2025'
  },
  {
    id: '8',
    name: 'James Wilson',
    role: 'Luxury Buyer',
    rating: 5,
    comment: 'Looking for a luxury property requires a special touch. PrimeBuild Brokers delivered beyond my expectations with their exclusive listings and white-glove service.',
    date: 'June 2025'
  }
];

export function CustomerReviews() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-6 min-w-max px-2">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all w-80 flex-shrink-0 border border-gray-100"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-5 h-5 ${
                          index < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-blue-600/20 absolute -top-2 -left-2" />
                    <p className="text-gray-700 text-sm leading-relaxed pl-4">
                      {review.comment}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.role}</p>
                    <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-lg shadow-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-700">
              <span className="">4.9/5</span> from over 500+ reviews
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}