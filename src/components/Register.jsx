import React from 'react';

const Register = ({ openLogin }) => (
  <div className="p-8">
    <div className="mb-7">
      <h2 className="text-2xl font-bold text-gray-900 mb-1" style={{ letterSpacing: '-0.02em' }}>
        Create account 🎉
      </h2>
      <p className="text-sm text-gray-500">Sign up to get started</p>
    </div>

    <form className="space-y-4">
      {[
        { label: 'Full Name', type: 'text', placeholder: 'John Doe', autoComplete: 'name' },
        { label: 'Email address', type: 'email', placeholder: 'you@example.com', autoComplete: 'email' },
        { label: 'Password', type: 'password', placeholder: '••••••••', autoComplete: 'new-password' },
      ].map(({ label, type, placeholder, autoComplete }) => (
        <div key={label}>
          <label className="form-label">{label}</label>
          <input type={type} className="form-input" placeholder={placeholder} autoComplete={autoComplete} required />
        </div>
      ))}

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-black" />
        <span className="text-gray-600">
          I agree to the{' '}
          <a href="#" className="text-black font-semibold hover:underline underline-offset-2">Terms</a>
          {' and '}
          <a href="#" className="text-black font-semibold hover:underline underline-offset-2">Privacy Policy</a>
        </span>
      </label>

      <button
        type="submit"
        className="w-full py-3 bg-black text-white font-semibold rounded-full text-sm tracking-wide hover:bg-gray-800 transition-all duration-200 mt-2"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
      >
        Create account
      </button>
    </form>

    <p className="mt-6 text-sm text-center text-gray-500">
      Already have an account?{' '}
      <button onClick={openLogin} className="text-black font-bold hover:underline underline-offset-2">
        Sign in
      </button>
    </p>
  </div>
);

export default Register;
