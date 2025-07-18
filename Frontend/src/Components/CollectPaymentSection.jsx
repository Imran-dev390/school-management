import React, { useState } from 'react';

const CollectPaymentSection = () => {
  const [collectPayment, setCollectPayment] = useState(false);

  return (
    <div className="w-full bg-white p-4  rounded shadow mt-0">
      {/* Collect Payment Checkbox */}
      <div className="mb-4">
        <label className="flex items-center font-semibold text-gray-700">
          <input
            type="checkbox"
            checked={collectPayment}
            onChange={() => setCollectPayment(!collectPayment)}
            className="form-checkbox mr-3"
          />
          Collect Payment?
        </label>
        <hr className="my-4" />
      </div>

      {/* Payment Form (Conditional) */}
      {collectPayment && (
        <div>
          <h3 className="text-lg font-bold mb-4">Add New Payment</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="font-semibold block mb-1">Amount:</label>
                <input
                  type="number"
                  min="0"
                  placeholder="Enter amount"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Bank Name:</label>
                <input
                  type="text"
                  placeholder="Enter bank name"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Cheque Date:</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Payment Method:</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option value="">Select Payment Method</option>
                  <option value="cash">Cash</option>
                  <option value="cheque">Cheque</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">Payment Date:</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="font-semibold block mb-1">Transaction ID:</label>
                <input
                  type="text"
                  placeholder="Enter transaction ID"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Cheque Number:</label>
                <input
                  type="text"
                  placeholder="Enter cheque number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Authorized By:</label>
                <input
                  type="text"
                  placeholder="Enter authorized by"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Additional Note:</label>
                <textarea
                  placeholder="Enter additional note"
                  rows="3"
                  className="w-full border resize-none border-gray-300 rounded px-3 py-2"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectPaymentSection;
