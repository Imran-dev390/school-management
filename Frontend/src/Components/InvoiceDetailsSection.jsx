import React, { useState } from 'react';

const InvoiceDetailsSection = () => {
  const [invoiceTitle, setInvoiceTitle] = useState('');
  const [description, setDescription] = useState('');
  const [allowPartial, setAllowPartial] = useState(false);
  const [totalAmount, setTotalAmount] = useState('');
  const [payableAmount, setPayableAmount] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [discountAmount, setDiscountAmount] = useState('');
  const [feeTypeAmount, setFeeTypeAmount] = useState('');
  const [issuedDate, setIssuedDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueDateAmount, setDueDateAmount] = useState('');

  return (
    <div className="w-full mt-8 bg-white p-4 rounded shadow">
      {/* Section Title */}
      <div className="mb-4">
        <h3 className="text-lg font-bold">Fee Voucher</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Invoice Title */}
        <div>
          <label className="font-semibold block mb-1">Invoice Title:</label>
          <input
            type="text"
            placeholder="Enter invoice title"
            value={invoiceTitle}
            onChange={(e) => setInvoiceTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold block mb-1">Description:</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="2"
            className="w-full border resize-none border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Partial Payment */}
      <div className="mt-4 flex items-center gap-3">
        <input
          type="checkbox"
          id="partialPayment"
          checked={allowPartial}
          onChange={(e) => setAllowPartial(e.target.checked)}
          className="form-checkbox"
        />
        <label htmlFor="partialPayment" className="font-semibold">
          Allow Partial Payments?
        </label>
      </div>

      {/* Amount Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Conditionally Shown Fee Type Amount */}
        {feeTypeAmount && (
          <div>
            <label className="font-semibold block mb-1">Total Fee Type Amount:</label>
            <input
              type="number"
              value={feeTypeAmount}
              readOnly
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        )}

        <div>
          <label className="font-semibold block mb-1">Total Amount:</label>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="Enter invoice amount"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Payable Amount:</label>
          <input
            type="number"
            value={payableAmount}
            onChange={(e) => setPayableAmount(e.target.value)}
            placeholder="Enter payable amount"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Discount Percentage:</label>
          <input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="Enter discount %"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {/* Optional info text */}
          {discountPercent && (
            <span className="text-sm text-red-500 block mt-1">
              Enter the percent of amount (e.g., 5%)
            </span>
          )}
        </div>

        <div>
          <label className="font-semibold block mb-1">Discount Amount:</label>
          <input
            type="number"
            value={discountAmount}
            onChange={(e) => setDiscountAmount(e.target.value)}
            placeholder="Enter discount amount"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Recalculate Button */}
      <div className="mt-4">
        <button
          type="button"
          className="btn btn-success text-white px-4 py-2 rounded bg-green-600 hover:bg-green-700"
          style={{ display: feeTypeAmount ? 'inline-block' : 'none' }}
        >
          Recalculate Total Fee Types
        </button>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mt-6">
        <div>
          <label className="font-semibold block mb-1">Date Issued:</label>
          <input
            type="date"
            value={issuedDate}
            onChange={(e) => setIssuedDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">
            Due Date Amount: <span className="text-sm text-gray-500">(This will be added to amount)</span>
          </label>
          <input
            type="text"
            value={dueDateAmount}
            onChange={(e) => setDueDateAmount(e.target.value)}
            placeholder="Enter due date amount"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailsSection;
