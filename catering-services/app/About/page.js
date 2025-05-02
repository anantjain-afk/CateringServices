export default function About() {
  return (
    <>
      <div className="flex justify-center">
        <div className=" grid grid-cols-2  h-[60vh] gap-1 mt-20 w-[90vw]">
          <div className="border rounded-lg shadow-lg  m-2  h-[80%] bg-white font-light  p-[3%] flex flex-col gap-3">
            <div className="font-bold text-2xl mb-4"> About Us</div>
            <div>
              Welcome to <span className="font-bold">BiteBuzz</span> – your
              smart solution for discovering and booking top-rated catering
              services near you. Whether you're planning a private party,
              corporate event, wedding, or simply need reliable meal plans for
              your team, BiteBuzz makes it easy and hassle-free.
            </div>
            <div >
              We’re more than just a catering directory. BiteBuzz connects you
              with verified local caterers, allowing you to browse menus,
              compare prices, read reviews, and book with confidence — all in
              one seamless platform. From gourmet experiences to budget-friendly
              options, we help you find the perfect fit for any occasion.
            </div>
            <div>For businesses, we also offer customizable employee meal plans designed to keep your team nourished, happy, and productive. With flexible scheduling and a variety of cuisines, BiteBuzz brings convenience and quality to your workplace meals.</div>
          </div>
          <div className="  m-2  h-[80%] grid grid-rows-2 gap-4 font-light ">
            <div className="border rounded-lg shadow-lg  p-[3%] bg-white">
              <div className="font-bold text-2xl mb-3">Our Mission</div>
              <div>
                Our mission is to revolutionize the way people discover and
                access catering services. We aim to simplify event planning and
                corporate meal management by connecting individuals and
                businesses with trusted local caterers through a seamless
                digital platform.
              </div>
            </div>
            <div className="border rounded-lg shadow-lg  p-[3%] bg-white font-light ">
              <div className="font-bold text-2xl mb-3">Our Story</div>
              <div>
                BiteBuzz was born out of a simple idea: finding great food
                should be easier. Whether it’s a family gathering, a big
                celebration, or just everyday office meals, we realized people
                were spending too much time searching, comparing, and booking
                catering services.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
