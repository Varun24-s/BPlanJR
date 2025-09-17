"use client";
import Qr from "../assets/QrCode.jpg";
import React, { useState } from "react";

const RegisterNow = () => {
  const [name, setName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null);
  const [manit, setManit] = useState(""); // Track if from MANIT
  const [utrId, setUtrId] = useState(""); // Track UTR ID input

  const [isSubmitting, setIsSubmitting] = useState(false);

  // NEW: Participation Type
  const [participationType, setParticipationType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email) {
      setStatus({ type: "error", msg: "Please fill in your name and email." });
      return;
    }

    setIsSubmitting(true);

    const url =
      "https://script.google.com/macros/s/AKfycbwm3nW5pzTQKbceKWrXtd_il4hSl63COo1zTp6hgHfGsA_aoZmsoLTCFsRTJlH4HHt5/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${encodeURIComponent(name)}&TeamName=${encodeURIComponent(
          teamName
        )}&Email=${encodeURIComponent(email)}&College=${encodeURIComponent(
          org
        )}&Year=${encodeURIComponent(year)}&Phone=${encodeURIComponent(
          phone
        )}&Manit=${encodeURIComponent(manit)}&UTR=${encodeURIComponent(
          utrId
        )}&Count=${encodeURIComponent(participationType)}`,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      console.log(data);

      setStatus({
        type: "success",
        msg: "Thanks! Your form has been submitted successfully.",
      });
      setName("");
      setTeamName("");
      setPhone("");
      setEmail("");
      setOrg("");
      setYear("");
      setManit("");
      setUtrId("");
      
      setParticipationType("");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 bg-transparent relative">
      <div className="relative w-full px-6 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent text-glow">
              Register Now
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Be part of India’s most prestigious Business Plan Competition. Pitch
            your idea, get mentored, and win big.
          </p>
          <div className="hidden lg:block">
            <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-8 shadow-lg shadow-yellow-500/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Leader's Name"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
            />
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Team Name"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
            />
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Leader's Phone"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Leader's Email"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
            />
            <input
              type="text"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder="College / School"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
            />

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year / Standard"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
            >
              <option value="" disabled className="bg-black text-white">
                Select Year / Standard
              </option>
              <option value="6th Standard" className="bg-black text-white">
                6th Standard
              </option>
              <option value="7th Standard" className="bg-black text-white">
                7th Standard
              </option>
              <option value="8th Standard" className="bg-black text-white">
                8th Standard
              </option>
              <option value="9th Standard" className="bg-black text-white">
                9th Standard
              </option>
              <option value="10th Standard" className="bg-black text-white">
                10th Standard
              </option>
              <option value="11th Standard" className="bg-black text-white">
                11th Standard
              </option>
              <option value="12th Standard" className="bg-black text-white">
                12th Standard
              </option>
              <option value="1st year" className="bg-black text-white">
                1st Year
              </option>
              <option value="2nd year" className="bg-black text-white">
                2nd Year
              </option>
              <option value="3rd year" className="bg-black text-white">
                3rd Year
              </option>
              <option value="4th year" className="bg-black text-white">
                4th Year
              </option>
            </select>

            {/* Are you from MANIT? */}
            <div className="space-y-2">
              <p className="text-white font-semibold">Are you from MANIT?</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2 text-white">
                  <input
                    type="radio"
                    name="manit"
                    value="yes"
                    checked={manit === "yes"}
                    onChange={(e) => setManit(e.target.value)}
                    className="accent-yellow-400"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2 text-white">
                  <input
                    type="radio"
                    name="manit"
                    value="no"
                    checked={manit === "no"}
                    onChange={(e) => setManit(e.target.value)}
                    className="accent-yellow-400"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {/* Show QR code, Participation Type and UTR input only if "No" is selected */}
            {/* Show QR code, Participation Type and UTR input only if "No" is selected */}
{manit === "no" && (
  <div className="space-y-4">
    {/* Participation Type Dropdown */}
    <select
      value={participationType}
      onChange={(e) => setParticipationType(e.target.value)}
      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
    >
      <option value="" disabled className="bg-black text-white">
        Select Participation Type
      </option>
      <option value="individual" className="bg-black text-white">
        Individual (₹119)
      </option>
      <option value="team" className="bg-black text-white">
        Team (₹399)
      </option>
    </select>

    {/* QR + Price Info + Download */}
    <div className="text-center space-y-3">
      {/* Click-to-Download QR */}
      
        <img
          src={Qr}
          alt="Payment QR Code"
          className="mx-auto w-50 h-50  "
        />
     

      <p className="text-sm text-gray-400">
        {participationType === "team"
          ? "Scan this QR code to pay ₹399 for Team registration."
          : participationType === "individual"
          ? "Scan this QR code to pay ₹119 for Individual registration."
          : "Scan this QR code to make the payment."}
      </p>

      {/* Download Button */}
     <a
  href={Qr}
  download="PaymentQR.png"
  className="inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition-colors"
  style={{ textShadow: "1px 1px 2px black" }}
>
  Download QR
</a>

    </div>

    {/* UTR Input */}
    <input
      type="text"
      value={utrId}
      onChange={(e) => setUtrId(e.target.value)}
      placeholder="Enter UTR ID for payment verification"
      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
    />
  </div>
)}


            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-lg shadow-md shadow-yellow-500/30 hover:scale-105 hover:shadow-yellow-400/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Register Now"}
            </button>

            {status && (
              <div
                className={`p-3 rounded-lg mt-2 text-sm text-center font-semibold ${
                  status.type === "success"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-red-500/20 text-red-300"
                }`}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterNow;
