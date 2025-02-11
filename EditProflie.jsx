import React, { useState } from 'react';
import { Pencil,CalendarFold } from "lucide-react";

function EditProflie() {
  const [birthday, setBirthday] = useState("");

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center p-6">
      <div className="mt-16 p-3 sm:mt-12 w-full max-w-2xl">
        {/* รูปโปรไฟล์ */}
        <div className="w-full h-72">
          <img src="./image2.png" className="w-full h-full rounded-2xl object-cover" alt="Main" />
        </div>

        {/* หัวข้อ */}
        <div className="flex items-center text-[#D5223A] font-medium justify-center text-lg mt-4">
          <h4>Edit Profile</h4>
          <Pencil color="#d5223a" className="ml-2" />
        </div>

        {/* ฟอร์มแก้ไขข้อมูล */}
        <form className="mt-6 space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#D5223A]">First Name</label>
              <input type="text" className="w-full border rounded-lg p-2 bg-white" placeholder="Ex Member" />
            </div>
            <div>
              <label className="block text-sm text-[#D5223A]">Last Name</label>
              <input type="text" className="w-full border rounded-lg p-2 bg-white" placeholder="Last name*" />
            </div>
          </div>

          {/* Phone & Birthday */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#D5223A]">Phone</label>
              <input type="text" className="w-full border rounded-lg p-2 bg-white" placeholder="0891111112" />
            </div>
            <div>
              <label className="block text-sm text-[#D5223A]">Birthday</label>
              <input type="date" class=" w-full border rounded-lg p-2 pr-10 bg-white " />
              

            </div>
          </div>

          {/* ID Card & Email */}
          <div>
            <label className="block text-sm text-[#D5223A]">ID Card / Password No.</label>
            <input type="text" className="w-full border rounded-lg p-2 bg-white" placeholder="1111111111111" />
          </div>
          <div>
            <label className="block text-sm text-[#D5223A]">Email address</label>
            <input type="email" className="w-full border rounded-lg p-2 bg-white" placeholder="0891111112@gmail.com" />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm text-[#D5223A]">Address</label>
            <textarea className="w-full border rounded-lg p-2 bg-white" placeholder="Address"></textarea>
          </div>

          {/* จังหวัด อำเภอ ตำบล รหัสไปรษณีย์ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#D5223A]">Province</label>
              <select className="w-full border rounded-lg p-2 bg-white">
                <option>กรุณาเลือก</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#D5223A]">District</label>
              <select className="w-full border rounded-lg p-2 bg-white">
                <option>กรุณาเลือก</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#D5223A]">Sub District</label>
              <select className="w-full border rounded-lg p-2 bg-white">
                <option>กรุณาเลือก</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#D5223A]">Postal Code</label>
              <input type="text" className="w-full border rounded-lg p-2 bg-white" placeholder="Postal Code" />
            </div>
          </div>

          {/* ปุ่ม Update & Back */}
          <div className="flex gap-4 mt-6">
            <button className="w-full bg-[#D5223A] text-white p-2 rounded-lg font-medium hover:bg-[#a03030] transition-colors ease-in-out">Update</button>
            <button className="w-full border border-[#D5223A] text-[#D5223A] p-2 rounded-lg font-medium">Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProflie;
