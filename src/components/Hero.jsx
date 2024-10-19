const Hero = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 border-b-2 border-slate-100 ">
          <div className="space-y-12 ">
            <h1 className=" text-4xl font-bold ">
              Stay Timeless,Grow Wiser <br />
              <span className="text-orange-300"> Each Day _^.^_</span>
            </h1>
            <h1 className=" text-xl  ">
              Uncover A World Of Knowledge And Inspiration At Your
              Fingertips.StayEnergized With Knowledge That Never Grows Old.
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-5 md:mt-10 ">
          <img className=" " src="src/assets/Books.png" alt="Books" />
        </div>
      </div>
    </>
  );
};

export default Hero;
