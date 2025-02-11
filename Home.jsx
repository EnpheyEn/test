import React from "react";

function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="mt-0 p-3 sm:mt-24">
        {/* รูปภาพหลัก */}
        <div className="w-full max-w-4xl h-72 ">
          <img src="./image2.png" className="w-full h-full rounded-2xl object-cover" alt="Main" />
        </div>

        {/* ส่วนข้อมูล */}
        <div className="flex text-[#D5223A] justify-center items-center flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-2">
            <img src="./icon.png" className="w-20 h-auto sm:w-24 md:w-28 lg:w-32" alt="Ex Member" />
            <p className="text-lg">: Ex Member</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="./iconCup.png" className="w-20 h-auto sm:w-24 md:w-28 lg:w-32" alt="Cups" />
            <p className="text-lg">: 50</p>
          </div>
        </div>

        {/* ข้อความสิทธิพิเศษ */}
        <div className="bg-[#D5223A] text-white p-4 text-start rounded-lg mt-6 max-w-md mx-auto text-sm font-medium">
          <p>🎉 Exclusive Member Benefits</p>
          <p>รับส่วนลด 10 บาท ต่อแก้ว ตลอดจนถึง 31 ธันวาคม 2568</p>
          <p>Enjoy a 10 Baht discount on every drink until 31 December 2025</p>
        </div>

        {/* ปุ่ม Edit Profile */}
        <div className="mt-6">
          <button className="bg-[#D5223A] text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
