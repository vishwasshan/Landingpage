"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_5i81cw9", // 🔁 Replace with your actual service ID
        "template_8qwo1an", // 🔁 Replace with your template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: `Name: ${formData.name}\nPhone: ${formData.phone}\nEmailId: ${formData.email}`,
        },
        "yWRIaBfHypNGLcBTu" // 🔁 Replace with your public key
      )
      .then(
        () => {
          setSent(true);
          setFormData({ name: "", email: "", phone: "", postcode: "" });
        },
        (error) => {
          alert("Failed to send. Try again.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
<div className="bg-white bg-opacity-90 backdrop-blur-md p-4 rounded-xl shadow-xl max-w-xs w-full text-black text-sm">
    <p className="text-gray-700 mb-3 text-sm leading-snug">
      Great design begins with a conversation. <span className="text-black font-semibold">Connect with Homaloid Interiors</span> and let’s create a space that inspires every day.
    </p>
  
    {sent ? (
      <p className="text-green-600 font-semibold text-sm">
        Thank you! We’ll get in touch soon.
      </p>
    ) : (
      <form className="flex flex-col gap-2" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-1.5 rounded-md focus:outline-none text-sm"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-1.5 rounded-md focus:outline-none text-sm"
          required
        />
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-1 text-sm">
            🇮🇳 <span>+91</span>
          </div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-1.5 rounded-md flex-1 focus:outline-none text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white py-1.5 text-sm rounded-md font-semibold"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    )}
  </div>
  
  );
};

export default LeadForm;
