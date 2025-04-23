'use client'

import { useState, useEffect } from "react";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"

export default function SignUp() {
  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')



  return (
    <>
      <div className="h-[100vh] flex justify-center items-center bg-gray-100">
          <div className="h-[60vh] w-[50vh] shadow-2xl rounded-2xl bg-yellow-400 flex   flex-col justify-start pt-[4%] gap-6 items-center">
            <div className="w-[80%] flex flex-col gap-2">
              <Label>Username</Label>
              <Input className="border-black" />
            </div>
            <div className="w-[80%] flex flex-col gap-2">
              <Label>Email</Label>
              <Input className="border-black" />
            </div>
            <div className="w-[80%] flex flex-col gap-2">
              <Label>Password</Label>
              <Input className="border-black" />
            </div>
            <div className="flex gap-2 " >
            <Button variant="outline">Register</Button>
            </div>
            <div className="mt-6">
              <span className="text-gray-600">Already have an account ? </span>
              <Button variant="ghost" className="text-gray-600">Login Here</Button>
            </div>
          </div>
      </div>
    </>
  )
}
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });
  
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth) ;


//   useEffect(() => {
//     if (submitted) {
//       console.log("Form Submitted:", formData);
//       // You can add API request here (e.g., fetch or axios)
//     }
//   }, [submitted]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.username.trim()) newErrors.username = "Username is required";
//     if (!formData.email.includes("@")) newErrors.email = "Invalid email";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const res = await createUserWithEmailAndPassword(formData.email, formData.password)
//         console.log({res})
//         sessionStorage.setItem('user', true)
//         setFormData({setFormData.email, '', });
//         setPassword('')
  
//     } catch(e){
//         console.error(e)
//     }
//       setSubmitted(true);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-yellow-400 p-8 rounded-2xl shadow-lg w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

//         {/* Username */}
//         <div className="mb-4">
//           <label className="block text-black">Username</label>
//           <input
//             name="username"
//             type="text"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-black">Email</label>
//           <input
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>

//         {/* Password */}
//         <div className="mb-6">
//           <label className="block text-black">Password</label>
//           <input
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full mt-1 p-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#0f4e64] text-white py-2 rounded-xl hover:bg-blue-900 transition"
//         >
//           Sign Up
//         </button>

//         {submitted && (
//           <p className="mt-4 text-green-500 text-center">Form submitted successfully!</p>
//         )}
//       </form>
//     </div>
//   );
// }
