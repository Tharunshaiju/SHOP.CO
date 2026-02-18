import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  useEffect(() => {
    if (isModelOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModelOpen]);

  if (!isModelOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
        onClick={() => setIsModelOpen(false)}
      />

      {/* Dialog */}
      <div
        className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden"
        style={{
          boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
          animation: 'scaleIn 0.25s ease both',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <button
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-all duration-200"
          onClick={() => setIsModelOpen(false)}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
