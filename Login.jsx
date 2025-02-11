import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // เพิ่มข้อมูลผู้ใช้ตัวอย่าง (จำลองการดึงข้อมูลจาก JSON)
    const userData = [
        {
            usernameP: "1234567890", // ตัวอย่างหมายเลขโทรศัพท์
            password: "password123", // ตัวอย่างรหัสผ่าน
            username: "User1", // ชื่อผู้ใช้
            coins: 100 // จำนวนเหรียญของผู้ใช้
        },
        {
            usernameP: "0987654321", // ตัวอย่างหมายเลขโทรศัพท์
            password: "password456", // ตัวอย่างรหัสผ่าน
            username: "User2", // ชื่อผู้ใช้
            coins: 50 // จำนวนเหรียญของผู้ใช้
        }
    ];

    const handleLogin = () => {
        // ค้นหาผู้ใช้ที่มี usernameP และ password ตรงกัน
        const user = userData.find(user => user.usernameP === username && user.password === password);
        console.log(user); // ดูข้อมูลผู้ใช้ที่ได้
        if (user) {
            alert(`Welcome ${user.username}, You have ${user.coins} coins`);
            navigate("/Home"); // เปลี่ยนหน้าไปที่ "/home"
        } else {
            alert("Invalid Username or Password");
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-white p-8 bg-[#D5223A]">
                <img src="./MK_Ci.png" alt="Mikka Logo" className="mb-6 w-32 md:w-50" />
                <img src="./Menu1.png" alt="Coffee Cup" className="w-40 md:w-60 rounded-b-full" />
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 w-full bg-white flex flex-col justify-center items-center p-6 md:p-10">
                <div className="w-full max-w-md">
                    <label className="text-[#D5223A] block font-bold text-lg mb-1">
                        Username (Phone)
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Phone*"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label className="block text-[#D5223A] font-bold text-lg mb-1">Password</label>
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full border border-gray-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <img src="./Eye.png" className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="w-full flex justify-center">
                        <button
                            className="w-60 text-white font-bold rounded-md py-2 mt-6 hover:bg-red-700 bg-[#D5223A]"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>

                    <div className="flex justify-between mt-4 text-red-600 font-semibold text-sm">
                        <a href="/Register">Register</a>
                        <a href="/Forgot_Pass">Forgot Password</a>
                    </div>

                    <p className="text-gray-500 text-center mt-6 text-sm">
                        If you have any problem, contact our staff at
                        <a href="mailto:support@cafemikka.com" className="text-blue-600"> support@cafemikka.com</a>
                    </p>

                    <p className="text-gray-500 text-center mt-4 text-xs">
                        โปรดอ่านนโยบายความเป็นส่วนตัวของเราเพื่อรับทราบและทำความเข้าใจก่อนส่งข้อมูลทุกครั้ง
                        <a href="https://member.cafemikka.com/doc/TermsofService.pdf" className="text-blue-600"> ข้อกำหนดเงื่อนไข</a>
                        และ
                        <a href="https://member.cafemikka.com/doc/PrivacyPolicy.pdf" className="text-blue-600"> นโยบายความเป็นส่วนตัว</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
