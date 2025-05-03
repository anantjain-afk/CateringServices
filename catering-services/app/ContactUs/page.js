function Contact() {
  return (
    <div className="h-[100vh] grid  grid-cols-[60%_40%] p-4 bg-gradient-to-r from-yellow-100 via-purple-100">
      <div className="h-[70%]  p-24 grid gap-6">
        <div className="font-bold text-5xl ">Customer Support</div>
        <div className="text-gray-700 font-bold text-xl font-sans">
          {" "}
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
          <div className="flex flex-col justify-center  gap-6">

          <input type="text" className="bg-white shadow-lg rounded-sm h-[15%] pl-[10%]" placeholder="Enter Name"
            
          /> 
          <input type="email" className="bg-white  shadow-lg rounded-sm h-[15%] pl-[10%]" placeholder="Enter Email"/>
          <input type='message' className="bg-white shadow-lg rounded-sm h-[45%] pl-[10%] "placeholder="Enter Message"  />
          </div>
          <div>
          <button className="bg-orange-500 w-[25%] ml-4 mb-3 rounded-xl text-white p-2">Submit</button>
          <div className="text-sm text-gray-600">By contacting us you agree to the <span className="text-orange-500">Terms and Conditions</span> and <span className="text-orange-500">Privacy Policy</span></div>
          </div>
          

        </div>
      
      </div>
    </div>
  );
}

export default Contact;
