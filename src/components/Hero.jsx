import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../Images/Rectangle 2.png';

const stats = [
  { value: '200+',    label: 'International Brands'  },
  { value: '2,000+',  label: 'High-Quality Products' },
  { value: '30,000+', label: 'Happy Customers'       },
];

const brands = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein'];

const Hero = () => (
  <section className="w-full overflow-hidden">

    {/* ═══════════════════════════════════════════════════════════════
        HERO  —  full-bleed background image
        Layout:
          • The outer <div> is position:relative and sets min-height.
          • Layer 1 (z-0): the <img> fills it via object-fit:cover.
          • Layer 2 (z-10): gradient overlay dims the photo so white
            text stays readable on any screen size.
          • Layer 3 (z-20): all text content sits on top.
        ═══════════════════════════════════════════════════════════════ */}
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'calc(100vh - 72px)' }}
    >

      {/* ── LAYER 1 · Background image ──────────────────────────────
          Using an <img> tag (not CSS background-image) so Vite can
          hash and bundle the asset correctly and the browser can
          preload / decode it.

          Technique:
            position:absolute + inset:0 + width/height:100%
            → fills the parent exactly, like background-size:cover
          object-fit:cover
            → scales the photo to fill without distortion
          object-position:center top
            → keeps the models' faces visible on all aspect ratios
      ────────────────────────────────────────────────────────────── */}
      <img
        src={HeroImg}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        style={{
          position:      'absolute',
          inset:         0,
          width:         '100%',
          height:        '100%',
          objectFit:     'cover',
          objectPosition:'center top',
          zIndex:        0,
          /* Subtle contrast boost so the photo "pops" as a backdrop */
          filter:        'contrast(1.05) saturate(1.08) brightness(0.92)',
          /* GPU compositing for silky scroll performance */
          willChange:    'transform',
        }}
      />

      {/* ── LAYER 2 · Dark overlay ──────────────────────────────────
          Two-stop gradient:
            - left side is darker  → text column sits here, needs most contrast
            - right side is lighter → lets the fashion photo breathe
          On mobile the whole hero is one column, so we use a single
          bottom-to-top fade instead.
      ────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset:    0,
          zIndex:   10,
          /* Desktop: stronger dark veil on the left, lighter on right */
          background: [
            'linear-gradient(to right,',
            '  rgba(0,0,0,0.72) 0%,',
            '  rgba(0,0,0,0.55) 45%,',
            '  rgba(0,0,0,0.20) 75%,',
            '  rgba(0,0,0,0.10) 100%',
            ')',
          ].join(' '),
        }}
        /* Mobile override via a CSS class defined below */
        className="hero-overlay"
      />

      {/* ── LAYER 3 · Text content ──────────────────────────────── */}
      <div
        className="relative w-full h-full flex flex-col justify-center"
        style={{
          zIndex:  20,
          padding: 'clamp(3rem, 8vw, 6rem) clamp(1.25rem, 6vw, 5rem)',
          minHeight: 'calc(100vh - 72px)',
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center w-fit mb-6"
          style={{ animation: 'fadeInUp 0.5s ease 0.1s both' }}
        >
          <span
            className="px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
            style={{
              background:   'rgba(232,184,109,0.18)',
              color:        '#E8B86D',
              border:       '1px solid rgba(232,184,109,0.45)',
              backdropFilter: 'blur(6px)',
            }}
          >
            ✦ New Season
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-black text-white leading-none mb-6"
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.6rem, 7vw, 5.75rem)',
            letterSpacing: '-0.04em',
            lineHeight:    1.0,
            textShadow:    '0 2px 24px rgba(0,0,0,0.35)',
            animation:     'fadeInUp 0.6s ease 0.15s both',
            maxWidth:      '14ch',
          }}
        >
          FIND CLOTHES<br />
          <span style={{ color: '#E8B86D' }}>THAT MATCH</span><br />
          YOUR STYLE
        </h1>

        {/* Sub-text */}
        <p
          className="text-white mb-8 leading-relaxed"
          style={{
            fontSize:   'clamp(0.9375rem, 1.5vw, 1.0625rem)',
            opacity:    0.85,
            maxWidth:   '42ch',
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
            animation:  'fadeInUp 0.6s ease 0.25s both',
          }}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>

        {/* CTA Button */}
        <div style={{ animation: 'fadeInUp 0.6s ease 0.35s both' }}>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 font-bold rounded-full group transition-all duration-300 hover:-translate-y-0.5"
            style={{
              padding:         '0.9rem 2.25rem',
              background:      '#fff',
              color:           '#111',
              fontSize:        '0.9375rem',
              letterSpacing:   '0.03em',
              boxShadow:       '0 8px 32px rgba(0,0,0,0.35)',
              textDecoration:  'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background   = '#E8B86D';
              e.currentTarget.style.color        = '#111';
              e.currentTarget.style.boxShadow    = '0 12px 40px rgba(232,184,109,0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background   = '#fff';
              e.currentTarget.style.color        = '#111';
              e.currentTarget.style.boxShadow    = '0 8px 32px rgba(0,0,0,0.35)';
            }}
          >
            <span>Shop Now</span>
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
              style={{ background: 'rgba(0,0,0,0.08)' }}
            >
              →
            </span>
          </Link>
        </div>

        {/* Stats strip */}
        <div
          className="flex flex-wrap gap-8 mt-12 pt-10"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            animation: 'fadeInUp 0.6s ease 0.45s both',
          }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span
                className="font-black text-white leading-none"
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(1.75rem, 3.5vw, 2.75rem)',
                  letterSpacing: '-0.03em',
                  textShadow:    '0 2px 12px rgba(0,0,0,0.3)',
                }}
              >
                {value}
              </span>
              <span
                className="text-sm font-medium mt-1"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* ── end Layer 3 ── */}

    </div>
    {/* ── end hero wrapper ── */}

    {/* ═══════════════════════════════════════════════════════════════
        BRANDS MARQUEE
        ═══════════════════════════════════════════════════════════════ */}
    <div
      className="w-full bg-black py-5 overflow-hidden"
      style={{ borderTop: '1px solid #222' }}
    >
      <div
        className="flex items-center gap-16"
        style={{
          width:     'max-content',
          animation: 'marquee 18s linear infinite',
        }}
      >
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="text-white font-bold tracking-widest uppercase whitespace-nowrap flex-shrink-0"
            style={{
              fontFamily:  i % 2 === 0 ? 'var(--font-display)' : 'var(--font-body)',
              fontStyle:   brand === 'GUCCI' ? 'italic' : 'normal',
              opacity:     0.8,
              fontSize:    'clamp(0.875rem, 1.5vw, 1.25rem)',
            }}
          >
            {brand}
            <span className="mx-8 opacity-30">✦</span>
          </span>
        ))}
      </div>
    </div>

  </section>
);

export default Hero;
