import React from 'react';
import { Star, Quote } from 'lucide-react';

const feedbacks = [
  {
    stars: 5,
    name: 'Sarah M.',
    avatar: 'S',
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece has exceeded my expectations.",
  },
  {
    stars: 5,
    name: 'Alex K.',
    avatar: 'A',
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.",
  },
  {
    stars: 5,
    name: 'James L.',
    avatar: 'J',
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is not only diverse but also on-point with the latest trends.",
  },
];

const Feedbacks = () => (
  <section className="w-full py-16 bg-white" style={{ borderTop: '1px solid #F3F0EA' }}>
    <div className="container-app">
      <div className="text-center mb-12" style={{ animation: 'fadeInUp 0.5s ease both' }}>
        <h2
          className="font-black text-black mb-3"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            letterSpacing: '-0.04em',
          }}
        >
          OUR HAPPY CUSTOMERS
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          Don't take our word for it. Here's what our community has to say.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-6 relative"
            style={{
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              animation: 'fadeInUp 0.5s ease both',
              animationDelay: `${index * 0.1}s`,
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.10)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Quote icon */}
            <div className="absolute top-5 right-5 opacity-10">
              <Quote size={32} />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: feedback.stars }).map((_, i) => (
                <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
              "{feedback.text}"
            </p>

            {/* Reviewer */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #111 0%, #444 100%)' }}
              >
                {feedback.avatar}
              </div>
              <div>
                <p className="font-semibold text-sm text-black">{feedback.name}</p>
                <p className="text-xs text-gray-400">Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Feedbacks;
