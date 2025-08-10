import React from "react";

const App = () => {
  return (
    <>
      <div
        className="relative h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('assests/Images/bg.jpg')" }}
      >
        <nav className="max-w-[75vw] mx-auto flex justify-between items-center h-[13vh] py-6 px-6 relative z-10">
          <span>
            <img
              width="53"
              src="assests/Images/logo.svg"
              alt=""
              className="w-[9.25rem] h-[2.5rem]"
            />
          </span>
          <div className="flex gap-2">
            <button className="btn px-2 py-1 font-medium text-white bg-white/10 rounded border border-white/10 cursor-pointer">
              English
            </button>
            <button className="btn btn-red-sm px-2 py-1 font-medium text-white bg-red-600 rounded border border-white/10 cursor-pointer">
              Sign In
            </button>
          </div>
        </nav>
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-70"></div>
        <div className="flex flex-col justify-center items-center h-[80%] relative text-white gap-6 px-8 font-['Martel_Sans',sans-serif]">
          <span className="max-w-[70vw] text-center font-bold text-4xl md:text-2xl">
            The biggest Indian hits. Ready to watch here from ₹149.
          </span>
          <span className="text-center font-medium text-2xl md:text-lg">
            Join today. Cancel anytime.
          </span>
          <span className="font-normal text-center text-xl md:text-base">
            Ready to watch? Enter your email to create or restart your membership.
          </span>
          <div className="flex gap-4 items-center justify-center md:flex-col">
            <input
              type="text"
              placeholder="Email address"
              className="font-bold px-4 py-3 text-base rounded bg-black/70 border border-white/50 text-white"
            />
            <button className="btn btn-red px-3 py-2 font-semibold text-white bg-red-600 rounded text-2xl md:text-lg">
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="my-14 h-[1vh] bg-gray-800"></div>
      <section className="flex justify-center items-center mx-auto max-w-[80vw] text-white gap-12 md:flex-wrap">
        <div className="flex flex-col">
          <span className="text-4xl md:text-2xl font-bold">Enjoy on your TV</span>
          <span className="text-2xl md:text-lg">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </span>
        </div>
        <div className="relative z-10 flex items-center">
          <img
            src="assests/Images/tv.png"
            alt=""
            className="relative z-10 w-[395px] md:w-full"
          />
          <video
            src="assests/Video/video-tv-in-0819.m4v"
            autoPlay
            loop
            muted
            className="absolute top-16 right-12 w-[290px] md:static md:w-full z-0"
          ></video>
        </div>
      </section>
      <div className="my-14 h-[1vh] bg-gray-800"></div>
      <section className="flex flex-row-reverse justify-center items-center mx-auto max-w-[80vw] text-white gap-12 md:flex-col-reverse second">
        <div className="relative z-10">
          <img
            src="assests/Images/mobile-0819.jpg"
            alt=""
            className="w-[395px] md:w-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-4xl md:text-2xl font-bold">
            Download your shows to watch offline
          </span>
          <span className="text-2xl md:text-lg">
            Save your favourites easily always have somthing to watch.
          </span>
        </div>
      </section>
      <div className="my-14 h-[1vh] bg-gray-800"></div>
      <section className="flex justify-center items-center mx-auto max-w-[80vw] text-white gap-12 md:flex-col-reverse third">
        <div className="flex flex-col">
          <span className="text-4xl md:text-2xl font-bold">Watch everywhere</span>
          <span className="text-2xl md:text-lg">
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </span>
        </div>
        <div className="relative z-10">
          <img
            src="assests/Images/device.png"
            alt=""
            className="w-[395px] md:w-full"
          />
          <video
            src="assests/Video/video-devices-in.m4v"
            autoPlay
            loop
            muted
            className="absolute top-9 right-20 w-[250px] md:static md:w-full z-0"
          ></video>
        </div>
      </section>
      <div className="my-14 h-[1vh] bg-gray-800"></div>
      <section className="flex flex-row-reverse justify-center items-center mx-auto max-w-[80vw] text-white gap-12 md:flex-col-reverse fourth">
        <div className="relative z-10">
          <img
            src="assests/Images/kids.png"
            alt=""
            className="w-[395px] md:w-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-4xl md:text-2xl font-bold">Create profiles for kids</span>
          <span className="text-2xl md:text-lg">
            Send children on adventures with their favourite characters in a space made just for them--free with your membership.
          </span>
        </div>
      </section>
      <div className="mt-14 h-[1vh] bg-gray-800"></div>
      <section className="bg-black text-white py-10 px-8">
        <h2 className="text-center py-8 text-4xl md:text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="rounded transition-all duration-200 flex bg-gray-700 p-5 justify-between max-w-[60vw] mx-auto cursor-pointer text-2xl md:text-lg faq-box hover:bg-gray-500 hover:rounded-xl">
          <span>Where can I watch it?</span>
          <span>+</span>
        </div>
        <div className="rounded transition-all duration-200 flex bg-gray-700 p-5 justify-between max-w-[60vw] mx-auto cursor-pointer text-2xl md:text-lg faq-box hover:bg-gray-500 hover:rounded-xl">
          <span>What are the plans?</span>
          <span>+</span>
        </div>
        <div className="rounded transition-all duration-200 flex bg-gray-700 p-5 justify-between max-w-[60vw] mx-auto cursor-pointer text-2xl md:text-lg faq-box hover:bg-gray-500 hover:rounded-xl">
          <span>Is there any limitation?</span>
          <span>+</span>
        </div>
        <div className="rounded transition-all duration-200 flex bg-gray-700 p-5 justify-between max-w-[60vw] mx-auto cursor-pointer text-2xl md:text-lg faq-box hover:bg-gray-500 hover:rounded-xl">
          <span>Can I get refund?</span>
          <span>+</span>
        </div>
        <div className="rounded transition-all duration-200 flex bg-gray-700 p-5 justify-between max-w-[60vw] mx-auto cursor-pointer text-2xl md:text-lg faq-box hover:bg-gray-500 hover:rounded-xl">
          <span>How do I cancel my subscription?</span>
          <span>+</span>
        </div>
        <div className="rounded transition-all duration-200 flex bg-gray-700 p-5 justify-between max-w-[60vw] mx-auto cursor-pointer text-2xl md:text-lg faq-box hover:bg-gray-500 hover:rounded-xl">
          <span>Do I need to pay additional cost for new movies?</span>
          <span>+</span>
        </div>
      </section>
      <div
        id="hero-foot"
        className="text-white text-center flex flex-col items-center justify-center max-w-[65vw] mx-auto gap-5 text-xl md:text-base"
      >
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="flex items-center justify-center gap-4 md:flex-col">
          <input
            id="foot-input"
            type="text"
            placeholder="Email address"
            className="font-bold px-4 py-3 text-base rounded bg-black/70 border border-white/50 text-white"
          />
          <button className="btn btn-red px-3 py-2 font-semibold text-white bg-red-600 rounded text-2xl md:text-lg">
            Get Started &gt;
          </button>
        </div>
      </div>
      <div className="mt-14 h-[1vh] bg-gray-800"></div>
      <footer className="text-white max-w-[60vw] mx-auto py-6">
        <div className="grid grid-cols-4 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-xs text-white">FAQ</a>
            <a href="#" className="text-xs text-white">Investor Relations</a>
            <a href="#" className="text-xs text-white">Privacy</a>
            <a href="#" className="text-xs text-white">Speed Test</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-xs text-white">Help Centre</a>
            <a href="#" className="text-xs text-white">Jobs</a>
            <a href="#" className="text-xs text-white">Cookie Preferences</a>
            <a href="#" className="text-xs text-white">Legal Notices</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-xs text-white">Account</a>
            <a href="#" className="text-xs text-white">Ways to Watch</a>
            <a href="#" className="text-xs text-white">Corporate Information</a>
            <a href="#" className="text-xs text-white">Only on Netflix</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="text-xs text-white">Media Centre</a>
            <a href="#" className="text-xs text-white">Terms of Use</a>
            <a href="#" className="text-xs text-white">Contact Us</a>
          </div>
        </div>
        <div className="py-6">
          &copy; Netflix India
          <div>
            Cloned by Danesh ➡{" "}
            <a
              className="text-red-600 mx-4"
              href="https://www.instagram.com/thedanesh7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact-Here
            </a>
          </div>
          /
        </div>
      </footer>
    </>
  );
};

export default App;
