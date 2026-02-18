import React from 'react';

const Login = ({ openSignUp }) => (
  <div className="p-8">
    <div className="mb-7">
      <h2 className="text-2xl font-bold text-gray-900 mb-1" style={{ letterSpacing: '-0.02em' }}>
        Welcome back
      </h2>
      <p className="text-sm text-gray-500">Sign in to your account</p>
    </div>

    <form className="space-y-4">
      <div>
        <label className="form-label">Email address</label>
        <input type="email" className="form-input" placeholder="you@example.com" autoComplete="email" required />
      </div>
      <div>
        <label className="form-label">Password</label>
        <input type="password" className="form-input" placeholder="••••••••" autoComplete="current-password" required />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-black" />
          <span className="text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-black font-semibold hover:underline underline-offset-2">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-black text-white font-semibold rounded-full text-sm tracking-wide hover:bg-gray-800 transition-all duration-200 mt-2"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
      >
        Sign in
      </button>
    </form>

    <p className="mt-6 text-sm text-center text-gray-500">
      Don't have an account?{' '}
      <button onClick={openSignUp} className="text-black font-bold hover:underline underline-offset-2">
        Sign up
      </button>
    </p>
  </div>
);

export default Login;
