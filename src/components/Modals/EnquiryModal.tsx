import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.inquiryType) {
      alert('Please select an option for "You’re looking for"');
      return;
    }

    console.log(formData); // Handle the submitted data
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      {/* Main Modal Container */}
      <div
        className="bg-white rounded-lg shadow-lg flex overflow-visible relative"
        style={{ width: '1000px' }} // Modal width
      >
        {/* Left Section */}
        <div
          className="bg-white text-[#081F5C] flex flex-col justify-center items-center"
          style={{ width: '499px', padding: '32px' }} // Left section width and padding
        >
          <h2
            className="font-bold text-center"
            style={{ fontSize: '36px', marginBottom: '16px' }} // Font size and margin
          >
            Let's Collaborate
          </h2>
          <p
            className="italic text-center"
            style={{ fontSize: '16px' }} // Font size
          >
            A <span className="font-semibold">spark</span> starts here
          </p>
        </div>

        {/* Right Section (Form Section) */}
        <div
          className="bg-[#081F5C] text-white relative rounded-lg z-10"
          style={{
            width: '501px',
            height: '527px',
            marginTop: '-32px',
            marginLeft: '-32px',
            marginBottom: '32px',
            padding: '32px', // Form section width, height, margins, and padding
          }}
        >
          <div className="w-full h-full">
            <div className="flex justify-end items-center">
            <button
                className="text-gray-300 hover:text-gray-100 border-1 border-gray-100 rounded-full focus:ring-2 focus:ring-gray-100"
                onClick={onClose}
                style={{ fontSize: '16px' }} // Font size
              >
                ✕
              </button>
                </div>
            <div
              className="flex justify-between items-center"
              style={{ marginBottom: '16px' }} // Margin bottom
            >
              <h2
                className="font-semibold"
                style={{ fontSize: '16px' }} // Font size
              >
                You're looking for (Please Select)
              </h2>
             
            </div>
            {/* Buttons for Inquiry Type Selection */}
            <div className="flex space-x-2" style={{ marginBottom: '16px' }}>
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, inquiryType: 'Custom Learning' })
                }
                className={`rounded-lg font-semibold focus:outline-none text-xs flex items-center justify-center ${
                  formData.inquiryType === 'Custom Learning'
                    ? 'bg-[#FFBF23] text-[#081F5C]'
                    : 'bg-gray-200 text-[#081F5C]'
                }`}
                style={{
                  width: '141px',
                  height: '46px',
                  padding: '7px',
                  fontSize: '12px',
                }}
              >
                Custom Learning
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, inquiryType: 'General Inquiry' })
                }
                className={`rounded-lg font-semibold focus:outline-none text-xs flex items-center justify-center ${
                  formData.inquiryType === 'General Inquiry'
                    ? 'bg-[#FFBF23] text-[#081F5C]'
                    : 'bg-gray-200 text-[#081F5C]'
                }`}
                style={{
                  width: '141px',
                  height: '46px',
                  padding: '7px',
                  fontSize: '12px',
                }}
              >
                General Inquiry
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({ ...formData, inquiryType: 'Consult Experts' })
                }
                className={`rounded-lg font-semibold focus:outline-none text-xs flex items-center justify-center ${
                  formData.inquiryType === 'Consult Experts'
                    ? 'bg-[#FFBF23] text-[#081F5C]'
                    : 'bg-gray-200 text-[#081F5C]'
                }`}
                style={{
                  width: '141px',
                  height: '46px',
                  padding: '7px',
                  fontSize: '12px',
                }}
              >
                Consult Experts
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Email Fields Side by Side */}
              <div className="flex space-x-4">
                <div style={{ width: '50%' }}>
                  <label
                    className="font-medium"
                    style={{ fontSize: '16px' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full border rounded-lg focus:outline-none bg-[#53628D] text-white placeholder-gray-200"
                    style={{
                      marginTop: '4px',
                      padding: '8px',
                      borderColor: '#E5E7EB',
                      fontSize: '12px',
                    }}
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div style={{ width: '50%' }}>
                  <label
                    className="font-medium"
                    style={{ fontSize: '16px' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full border rounded-lg focus:outline-none bg-[#53628D] text-white placeholder-gray-200"
                    style={{
                      marginTop: '4px',
                      padding: '8px',
                      borderColor: '#E5E7EB',
                      fontSize: '12px',
                    }}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>
              {/* Phone Field */}
              <div>
                <label
                  className="font-medium"
                  style={{ fontSize: '16px' }}
                >
                  Your Phone
                </label>
                <div className="flex" style={{ marginTop: '4px' }}>
                  <span
                    className="inline-flex items-center bg-[#53628D] border rounded-l-lg text-gray-200"
                    style={{
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      borderColor: '#E5E7EB',
                      fontSize: '12px',
                      height: '40px',
                    }}
                  >
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full border rounded-r-lg focus:outline-none bg-[#53628D] text-white placeholder-gray-200"
                    style={{
                      paddingLeft: '8px',
                      paddingRight: '8px',
                      borderColor: '#E5E7EB',
                      fontSize: '12px',
                      height: '40px',
                    }}
                    placeholder="00000 00000"
                    required
                  />
                </div>
              </div>
              {/* Description Field */}
              <div>
                <label
                  className="font-medium"
                  style={{ fontSize: '16px' }}
                >
                  Brief description about your requirements (Optional)
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="block w-full border rounded-lg focus:outline-none bg-[#53628D] text-white placeholder-gray-200"
                  style={{
                    marginTop: '4px',
                    padding: '8px',
                    borderColor: '#E5E7EB',
                    fontSize: '12px',
                  }}
                  placeholder="Describe your requirements"
                  rows={3}
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#53B553] text-white rounded-lg hover:bg-green-700 focus:outline-none"
                style={{
                  width: '446px',
                  height: '46px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  fontSize: '16px',
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
