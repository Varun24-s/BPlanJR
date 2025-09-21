"use client";
import Qr from "../assets/QrCode.jpg";
import Qr2 from "../assets/QrCode2.jpeg";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterNow = () => {
  const [name, setName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [phone, setPhone] = useState("");
  const [manit, setManit] = useState("");
  const [utrId, setUtrId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAltQR, setShowAltQR] = useState(false);

  const [participationType, setParticipationType] = useState("");
  const [scholarNo, setScholarNo] = useState("");
  const [participants, setParticipants] = useState([""]);

  const handleParticipantChange = (i, value) => {
    const updated = [...participants];
    updated[i] = value;
    setParticipants(updated);
  };

  const addParticipant = () => {
    setParticipants([...participants, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email) {
      toast.error("Please fill in your email.");
      setIsSubmitting(false);
      return;
    }

    if (manit === "no" && !org) {
      toast.error("Please enter your College / School name.");
      setIsSubmitting(false);
      return;
    }

    const url = "https://script.google.com/macros/s/AKfycbw4SNoGGFDHrNu3lOZ1tC-MmSo-JlRAuIcxd4uOLHmMc3fz5UWVpU0Uhes2cAEr4kys/exec"; // <-- replace with your Web App URL

    try {
      const body = new URLSearchParams({
        Name: name,
        TeamName: teamName,
        Email: email,
        College: org,
        Phone: phone,
        Manit: manit,
        ScholarNo: scholarNo,
        UTR: utrId,
        ParticipationType: participationType,
        Participants: participants.join(", ")
      });

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      toast.success("Thanks! Your form has been submitted successfully.");

      // Reset fields
      setName("");
      setTeamName("");
      setPhone("");
      setEmail("");
      setOrg("");
      setManit("");
      setUtrId("");
      setParticipationType("");
      setScholarNo("");
      setParticipants([""]);
      setShowAltQR(false);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 bg-transparent relative">
      <ToastContainer
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{
          backgroundColor: "#1F1F1F", 
          color: "#FFD700", 
          fontWeight: "bold",
          border: "1px solid #FFD700"
        }}
      />
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
            <select
              value={participationType}
              onChange={(e) => setParticipationType(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
            >
              <option value="" disabled>Select Participation Type</option>
              <option value="individual">Individual</option>
              <option value="team">Team</option>
            </select>

            {participationType && (
              <>
                {participationType === "team" && (
                  <>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Leader's Name" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <input type="tel" value={phone} onChange={(e) => /^\d*$/.test(e.target.value) && e.target.value.length <= 10 && setPhone(e.target.value)} placeholder="Leader's Phone" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Leader's Email" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Team Name" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    {participants.map((p, i) => (
                      <input key={i} type="text" value={p} onChange={(e) => handleParticipantChange(i, e.target.value)} placeholder={`Team Member ${i + 1} Name`} className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    ))}
                    <button type="button" onClick={addParticipant} className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">+ Add Participant</button>
                  </>
                )}

                {participationType === "individual" && (
                  <>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <input type="tel" value={phone} onChange={(e) => /^\d*$/.test(e.target.value) && e.target.value.length <= 10 && setPhone(e.target.value)} placeholder="Your Phone number" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </>
                )}

                <div className="space-y-2">
                  <p className="text-white font-semibold">Are you from MANIT?</p>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 text-white">
                      <input type="radio" name="manit" value="yes" checked={manit === "yes"} onChange={(e) => setManit(e.target.value)} className="accent-yellow-400" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="radio" name="manit" value="no" checked={manit === "no"} onChange={(e) => setManit(e.target.value)} className="accent-yellow-400" />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* College / School field only if MANIT = No */}
                {manit === "no" && (
                  <input type="text" value={org} onChange={(e) => setOrg(e.target.value)} placeholder="College / School" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                )}

                {/* Scholar Number if MANIT = Yes */}
                {manit === "yes" && (
                  <input type="text" value={scholarNo} onChange={(e) => setScholarNo(e.target.value)} placeholder="Scholar Number" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                )}

                {/* Payment section if MANIT = No */}
                {manit === "no" && (
                  <div className="space-y-4 text-center">
                    <div>
                      <p className="text-white font-semibold mb-2">QR Code</p>
                      <img src={Qr} alt="Payment QR Code" className="mx-auto w-40 h-40 rounded-lg border border-yellow-500/20" />
                    </div>

                    {!showAltQR && (
                      <button type="button" onClick={() => setShowAltQR(true)} className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">This QR is not working? Show Alternate</button>
                    )}

                    {showAltQR && (
                      <div>
                        <p className="text-white font-semibold mb-2">Alternate QR Code</p>
                        <img src={Qr2} alt="Alternate Payment QR Code" className="mx-auto w-40 h-40 rounded-lg border border-yellow-500/20" />
                        <p className="text-sm text-gray-400 mt-2">Use this alternate QR only if the first one does not work.</p>
                      </div>
                    )}

                    <p className="text-sm text-gray-400">{participationType === "team" ? "Pay ₹499 for Team registration." : "Pay ₹149 for Individual registration."}</p>

                    <input type="text" value={utrId} onChange={(e) => setUtrId(e.target.value)} placeholder="Enter UTR ID for payment verification" className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-lg shadow-md shadow-yellow-500/30 hover:scale-105 hover:shadow-yellow-400/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Register Now"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterNow;
