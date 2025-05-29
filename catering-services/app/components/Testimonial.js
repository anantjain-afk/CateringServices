'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
    {
      title: "Ez Cater is the best",
      content: "EZ Cater has thought of everything so that I can focus on my business...",
      author: "Katie Mott, November 27",
    },
    {
      title: "Outstanding service",
      content: "Incredibly easy to order, great communication...",
      author: "Nick C, November 25",
    },
    {
        title: 'Communication was excellent',
        content:'Communication was excellent. I would receive text message to let me know the status of my order. I really liked that I ...',
        author: 'Anant, November 24'
    },
    {
        title: 'Great website with many options',
        content:'I had an event that I needed several luncheons catered and found this website very he...',
        author: 'Suryansh, November 27'
    },
    {
        title: 'Reliability Rockstars!',
        content:"I really appreciate the regular status updates. When I'm catering a meeting for our c...",
        author: 'Kaustubh, November 29'
    },
    {
        title: 'Best first time experience.',
        content:'This was my first time using ezCater and I must say that it was so easy and convenien...',
        author: 'Hardik, december 2'
    },
    {
        title: 'A+ Customer Service',
        content:"The food is great, but it's the ease of customer service what keeps me coming back...",
        author: 'Ajeesh, december 3'
    }
  ];
function Testimonial() {
  const [hasMounted, setHasMounted] = React.useState(false);  
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  

  return (
    <>
        <div className="px-10 py-10 bg-emerald-500">
          <h2 className="text-6xl font-bold text-center text-gray-800 mb-8">
            See why customers love us
          </h2>
          {hasMounted && (
            <div className="-mx-2">
                <Slider {...settings}>
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="p-5 bg-gray-100 rounded shadow-md  h-60 mx-4"
                >
                  <div className="text-orange-400 mb-2">★★★★★</div>
                  <div className="font-semibold text-lg mb-2">{t.title}</div>
                  <div className="text-gray-600 text-sm">{t.content}</div>
                  <div className="mt-2 text-gray-800 font-semibold text-sm">
                    {t.author}
                  </div>
                </div>
              ))}
            </Slider>
            </div>
            
          )}
        </div>

    </>
  );
}
export default Testimonial;
