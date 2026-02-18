import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState('');

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        {/* <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
          <MapPin size={18} className="text-white" />
        </div> */}
        <div>
          <h2 className="text-xl font-bold text-gray-900" style={{ letterSpacing: '-0.02em' }}>
            Change Address
          </h2>
          <p className="text-sm text-gray-500">Update your delivery address</p>
        </div>
      </div>

      <label className="form-label mb-1 block">New delivery address</label>
      <input
        type="text"
        placeholder="Enter your full address..."
        className="form-input mb-6"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        autoFocus
      />

      <div className="flex gap-3">
        <button
          className="flex-1 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="flex-1 py-2.5 text-sm font-semibold text-white bg-black rounded-full transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-800"
          onClick={() => {
            if (newAddress.trim()) {
              setAddress(newAddress);
              setIsModelOpen(false);
            }
          }}
          disabled={!newAddress.trim()}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
