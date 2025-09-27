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
  const [idCardLink, setIdCardLink] = useState("");
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
    if (participants.length < 4) {
      setParticipants([...participants, ""]);
    } else {
      toast.error("Maximum 4 participants allowed.");
    }
  };

  const validateForm = () => {
    if (!participationType) return "Please select participation type.";
    if (!name) return "Name is required.";
    if (!phone) return "Phone number is required.";
    if (phone.length !== 10) return "Phone number must be 10 digits.";
    if (!email) return "Email is required.";
    if (participationType === "team" && !teamName)
      return "Team Name is required.";
    if (participationType === "team" && participants.some((p) => !p))
      return "All team member names are required.";
    if (!manit) return "Please specify if you are from MANIT.";
    if (manit === "yes" && !scholarNo) return "Scholar Number is required.";
    if (manit === "no" && !org) return "College / School name is required.";
    if (!idCardLink) return "Please provide your ID Card Google Drive link.";
    if (manit === "no" && !utrId) return "UTR ID is required for Non-MANIT.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const error = validateForm();
    if (error) {
      toast.error(error);
      setIsSubmitting(false);
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycby6pdxwVnehWAsfrhjd_ShvcyAVuaS_gypV3UNjsNmF5nLBbGQi9LWoOdoEGxl4b01G/exec";

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
        Participants: participants.join(", "), // includes leader + members
        IdCardLink: idCardLink, // only leader
      });

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
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
      setIdCardLink("");
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
          border: "1px solid #FFD700",
        }}
      />

      <div className="relative w-full px-6 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Register Now
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Be part of India’s most prestigious Business Plan Competition. Pitch
            your idea, get mentored, and win big.
          </p>

          <div className="bg-black/40 border border-yellow-500/30 rounded-xl p-6 shadow-md shadow-yellow-500/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Rules & Regulations
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>
                Non-MANIT participants must provide their College/School name and valid UTR ID.
              </li>
              <li>
                MANIT participants must provide their Scholar Number (Registration is Free).
              </li>
              <li>
                A valid Google Drive link of your ID Card is mandatory for all.(Provide public view access link)
              </li>
              <li>Maximum 4 participants allowed per team (including team leader).</li>
            </ul>

            <div className="mt-6 p-4 bg-black/60 border border-yellow-500/20 rounded-lg text-sm text-gray-200">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                Pricing Details
              </h4>
              <ul className="space-y-1">
                <li>
                  <span className="font-semibold text-yellow-300">MANIT Students:</span> Free
                </li>
                <li>
                  <span className="font-semibold text-yellow-300">Non-MANIT Individual:</span> ₹149
                </li>
                <li>
                  <span className="font-semibold text-yellow-300">Non-MANIT Team:</span> ₹499
                </li>
              </ul>
              <p className="mt-2 text-lg">
                <span className="text-yellow-300 mt-2">Note:</span> Without payment your registration will be cancelled (Non-MANIT participants)
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/5 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-8 shadow-lg shadow-yellow-500/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <select
              value={participationType}
              onChange={(e) => setParticipationType(e.target.value)}
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
              required
            >
              <option value="" disabled>
                Select Participation Type
              </option>
              <option value="individual">Individual</option>
              <option value="team">Team</option>
            </select>

            {participationType && (
              <>
                {participationType === "team" && (
                  <>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Leader's Name"
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                      required
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) =>
                        /^\d*$/.test(e.target.value) &&
                        e.target.value.length <= 10 &&
                        setPhone(e.target.value)
                      }
                      placeholder="Leader's Phone"
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Leader's Email"
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="Team Name"
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                      required
                    />
                    {participants.map((p, i) => (
                      <input
                        key={i}
                        type="text"
                        value={p}
                        onChange={(e) =>
                          handleParticipantChange(i, e.target.value)
                        }
                        placeholder={`Team Member ${i + 1} Name`}
                        className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                        required
                      />
                    ))}
                    {participants.length < 4 && (
                      <button
                        type="button"
                        onClick={addParticipant}
                        className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
                      >
                        + Add Participant
                      </button>
                    )}
                  </>
                )}

                {participationType === "individual" && (
                  <>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                      required
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) =>
                        /^\d*$/.test(e.target.value) &&
                        e.target.value.length <= 10 &&
                        setPhone(e.target.value)
                      }
                      placeholder="Your Phone number"
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                      required
                    />
                  </>
                )}

                {/* MANIT Radio */}
                <div className="space-y-2">
                  <p className="text-white font-semibold">
                    Are you from MANIT? <span className="text-red-500">*</span>
                  </p>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 text-white">
                      <input
                        type="radio"
                        name="manit"
                        value="yes"
                        checked={manit === "yes"}
                        onChange={(e) => setManit(e.target.value)}
                        className="accent-yellow-400"
                        required
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
                        required
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {manit === "no" && (
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="College / School"
                    className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                    required
                  />
                )}

                {manit === "yes" && (
                  <input
                    type="text"
                    value={scholarNo}
                    onChange={(e) => setScholarNo(e.target.value)}
                    placeholder="Scholar Number"
                    className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                    required
                  />
                )}

                <input
                  type="url"
                  value={idCardLink}
                  onChange={(e) => setIdCardLink(e.target.value)}
                  placeholder={
                    participationType === "team"
                      ? "Leader's ID Card Google Drive Link"
                      : "Your ID Card Google Drive Link"
                  }
                  className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                  required
                />


                {manit === "no" && (
                  <div className="space-y-4 text-center">
                    <p className="text-white font-semibold mb-2">QR Code</p>
                    <img
                      src={Qr}
                      alt="Payment QR Code"
                      className="mx-auto w-40 h-40 rounded-lg border border-yellow-500/20"
                    />
                    {!showAltQR && (
                      <button
                        type="button"
                        onClick={() => setShowAltQR(true)}
                        className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
                      >
                        This QR is not working? Show Alternate
                      </button>
                    )}
                    {showAltQR && (
                      <div>
                        <p className="text-white font-semibold mb-2">
                          Alternate QR Code
                        </p>
                        <img
                          src={Qr2}
                          alt="Alternate Payment QR Code"
                          className="mx-auto w-40 h-40 rounded-lg border border-yellow-500/20"
                        />
                        <p className="text-sm text-gray-400 mt-2">
                          Use this alternate QR only if the first one does not
                          work.
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-gray-400">
                      {participationType === "team"
                        ? "Pay ₹499 for Team registration."
                        : "Pay ₹149 for Individual registration."}
                    </p>
                    <input
                      type="text"
                      value={utrId}
                      onChange={(e) => setUtrId(e.target.value)}
                      placeholder="Enter UTR ID for payment verification"
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:scale-105 transition-all disabled:opacity-70"
                >
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
