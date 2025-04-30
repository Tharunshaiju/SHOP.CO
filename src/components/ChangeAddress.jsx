import React, { useState } from 'react';

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState('');

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Change Delivery Address</h2>
        
        <input
          type="text"
          placeholder="Enter your new address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          onChange={(e) => setNewAddress(e.target.value)}
          value={newAddress}
          autoFocus
        />
        
        <div className="flex justify-end space-x-3 mt-6">
          <button
            className="px-5 py-2 text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            onClick={() => setIsModelOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              setAddress(newAddress);
              setIsModelOpen(false);
            }}
            disabled={!newAddress.trim()}
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAddress;