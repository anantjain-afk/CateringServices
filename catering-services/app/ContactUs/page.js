'use client'
import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Invalid email address.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    // If valid, open Gmail compose in a new tab
    const to = encodeURIComponent('contact@bitebuzz.com');
    const subject = encodeURIComponent('New Contact Request from Website');
    const body = encodeURIComponent(form.message);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[60%_40%] p-2 sm:p-4 bg-gradient-to-r from-yellow-100 via-purple-100">
      <div className="h-auto md:h-[70%] p-4 sm:p-8 md:p-24 grid gap-4 sm:gap-6 order-2 md:order-1">
        <div className="font-bold text-3xl sm:text-4xl md:text-5xl">Customer Support</div>
        <div className="text-gray-700 font-bold text-lg sm:text-xl font-sans">
          Email: <span className="text-orange-500">support@BiteBuzz.com</span>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-extrabold">Find Us On</div>
          <div>icons icons icons</div>
        </div>
        <div className="text-xl sm:text-2xl font-extrabold">Corporate Office</div>
        <div className="font-medium text-gray-600">
          BiteBuzz Headquarters 7th Floor, Zenith Square Koramangala 1st Block,
          Bengaluru – 560034 Karnataka, India
        </div>
      </div>
      <div className="h-auto md:h-[90%] p-4 sm:p-8 flex items-center order-1 md:order-2">
        <div className="bg-white/40 border-2 border-white w-full sm:w-[90%] md:w-[80%] grid grid-rows-[auto_1fr_auto] rounded-3xl p-4 sm:p-7">
          <div className="text-xl sm:text-2xl font-bold mb-2">Let's Get in Touch</div>
          <form className="flex flex-col justify-center gap-4 sm:gap-6" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="name"
                className="bg-white shadow-lg rounded-sm h-12 pl-4 w-full"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="bg-white shadow-lg rounded-sm h-12 pl-4 w-full"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                className="bg-white shadow-lg rounded-sm h-32 pl-4 pt-2 w-full resize-none"
                placeholder="Enter Message"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-orange-500 w-full sm:w-[50%] md:w-[25%] mx-auto mb-3 rounded-xl text-white p-2 flex justify-center items-center"
            >
              Submit
            </button>
          </form>
          <div className="text-xs sm:text-sm text-gray-600 text-center mt-2">By contacting us you agree to the <span className="text-orange-500">Terms and Conditions</span> and <span className="text-orange-500">Privacy Policy</span></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
