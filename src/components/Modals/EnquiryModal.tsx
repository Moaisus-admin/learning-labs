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
        className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-visible relative max-w-[90%] lg:max-w-[1000px]"
      >
        {/* Left Section */}
        <div
          className="hidden lg:flex bg-white text-[#081F5C] flex-col justify-center items-center rounded-lg"
          style={{
            backgroundImage: "url('/images/communities/GreenLoginBg.svg')",
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '540px',
            padding: '32px',
          }}
        >
          <h2
            className="font-extrabold text-left"
            style={{
              fontSize: '74px',
              marginBottom: '16px',
              fontFamily: 'satoshi',
              letterSpacing: '-2.96px',
              lineHeight: '74px',
            }}
          >
            Let's
            <br />
            <span className="text-[#53B553]">Collaborate</span>
          </h2>
          <p
            className="italic text-left text-[#212121] font-normal"
            style={{ fontSize: '36px' }}
          >
            A <span className="font-semibold">spark</span> starts here
          </p>
        </div>

        {/* Right Section (Form Section) */}
        <div
          className="bg-[#081F5C] text-white relative rounded-lg z-10 w-full lg:w-[501px] lg:mt-[-32px] lg:mr-[32px] lg:mb-[32px]"
          style={{
            // marginTop: '0',
            marginLeft: '0',
            padding: '32px',
          }}
        >
          <div className="w-full h-full">
          <div className="flex justify-end">
  <button
    onClick={onClose}
    className="flex items-center justify-center w-[34px] h-[34px] text-[16px] bg-white bg-opacity-40 text-white hover:text-gray-200 rounded-full focus:outline-none"
  >
    ✕
  </button>
</div>

            <div
              className="flex justify-between items-center"
              style={{ marginBottom: '16px' }}
            >
              <h2
                className="font-semibold"
                style={{ fontSize: '16px' }}
              >
                You're looking for (Please Select)
              </h2>
            </div>
            {/* Buttons for Inquiry Type Selection */}
            <div className="flex space-x-2 mb-4">
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
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div style={{ width: '100%', marginBottom: '16px' }}>
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
                <div style={{ width: '100%', marginBottom: '16px' }}>
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
                  width: '100%',
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
