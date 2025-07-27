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
    <div className="h-[100vh] grid  grid-cols-[60%_40%] p-4 bg-gradient-to-r from-yellow-100 via-purple-100">
      <div className="h-[70%]  p-24 grid gap-6">
        <div className="font-bold text-5xl ">Customer Support</div>
        <div className="text-gray-700 font-bold text-xl font-sans">
          {' '}
          Email: <span className="text-orange-500">support@BiteBuzz.com</span>
        </div>
        <div>
          <div className="text-2xl font-extrabold ">Find Us On</div>
          <div>icons icons icons</div>
        </div>
        <div className="text-2xl font-extrabold">Corporate Office</div>
        <div className="font-medium text-gray-600">
          BiteBuzz Headquarters 7th Floor, Zenith Square Koramangala 1st Block,
          Bengaluru – 560034 Karnataka, India
        </div>
      </div>
      <div className="h-[90%] p-8 flex items-center">
        <div className="bg-white/40 h-[90%] border-2 border-white w-[80%] grid grid-rows-[5%_80%_15%] rounded-3xl  p-7 ">
          <div className="text-2xl font-bold  ">Let's Get in Touch</div>
          <form className="flex flex-col justify-center  gap-6" onSubmit={handleSubmit} noValidate>
            <div>
              <input
                type="text"
                name="name"
                className="bg-white shadow-lg rounded-sm h-12 pl-[10%] w-full"
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
                className="bg-white shadow-lg rounded-sm h-12 pl-[10%] w-full"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                className="bg-white shadow-lg rounded-sm h-32 pl-[10%] pt-2 w-full resize-none"
                placeholder="Enter Message"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-orange-500 w-[25%] ml-4 mb-3 rounded-xl text-white p-2 flex justify-center items-center"
            >
              Submit
            </button>
          </form>
          <div className="text-sm text-gray-600">By contacting us you agree to the <span className="text-orange-500">Terms and Conditions</span> and <span className="text-orange-500">Privacy Policy</span></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
