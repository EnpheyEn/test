import React, { useState } from "react";
import { Phone } from "lucide-react";

function ChangeNumber() {
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [otp, setOtp] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-6">
      <div className="mt-16 p-3 sm:mt-12 w-full max-w-2xl">
        {/* รูปโปรไฟล์ */}
        <div className="w-full h-72">
          <img src="./image2.png" className="w-full h-full rounded-2xl object-cover" alt="Main" />
        </div>

        {/* Title */}
        <div className="flex items-center text-[#D5223A] font-medium justify-center text-lg mt-4">
          <h4>Change Number</h4>
          <Phone color="#d5223a" className="ml-2" />
        </div>

        {/* Form */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full mt-6">
          {/* Registered Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#D5223A] mb-1">
              Register Phone Number (เบอร์โทร)
            </label>
            <input
              type="text"
              value="0891111112"
              className="w-full border rounded-lg p-2 bg-[#D5223A] text-white "
              
            />
          </div>

          {/* New Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#D5223A] mb-1">
              New Phone Number (เบอร์โทรใหม่)
            </label>
            <input
              type="text"
              placeholder="New Phone Number*"
              className="w-full border rounded-lg p-2 bg-white text-gray-700"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {/* Request OTP */}
          <button className="w-full bg-[#D5223A] text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 mb-4">
            Request OTP
          </button>

          {/* OTP Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#D5223A] mb-1">
              OTP
            </label>
            <input
              type="text"
              placeholder="OTP*"
              className="w-full border rounded-lg p-2 bg-white text-gray-700"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="bg-[#D5223A] text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600">
              Confirm
            </button>
            <button className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeNumber;
