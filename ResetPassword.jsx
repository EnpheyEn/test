import React, { useState } from "react";
import { Eye, EyeOff, KeyRound } from "lucide-react";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4">
      {/* Header Section */}
      <div className="w-full max-w-4xl h-72 mt-20">
        <img src="./image2.png" className="w-full h-full rounded-2xl object-cover" alt="Main" />
      </div>

      {/* Title */}
      <div className="flex items-center text-[#D5223A] font-medium justify-center text-lg mt-4">
        <h4>Reset Password</h4>
        <KeyRound color="#d5223a" className="ml-2" />
      </div>

      {/* Form */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mt-6">
        {[
          { label: "Old Password", name: "old" },
          { label: "Password", name: "new" },
          { label: "Confirm Password", name: "confirm" },
        ].map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-sm font-medium text-[#D5223A] mb-1">
              {field.label}
            </label>
            <div className="relative">
              <input
                type={showPassword[field.name] ? "text" : "password"}
                placeholder={`${field.label} *`}
                className="w-full border rounded-lg p-2 pr-10 bg-white text-gray-700"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => togglePassword(field.name)}
              >
                {showPassword[field.name] ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="bg-[#D5223A] text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600">
            Update
          </button>
          <button className="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
