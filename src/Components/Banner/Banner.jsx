
const Banner = () => {
  return (
    <div className="my-16">
      <div className="hero min-h-screen rounded-xl" style={{backgroundImage: "url(https://i.ibb.co/1QvvMZX/Rectangle-1.png)"}} >
          <div className="hero-overlay bg-opacity-0"></div>
           <div className="hero-content text-center text-neutral-content">
            <div className="w-3/4">
              <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
              <p className="mb-5">Find healthy, delicious calorie recipes including low-calorie and high-calorie breakfast, lunch, dinner and snacks from the food and nutrition experts at EatingWell.</p>
              <div className="flex gap-5 items-center justify-center ">
              <button className="btn border-none bg-[#0BE58A] rounded-3xl text-lg font-semibold">Explore Now</button>
              <button className="btn btn-ghost border-solid border-white rounded-3xl text-lg font-semibold">Our Feedback</button>
              </div>
            </div>
          </div>
         </div>
    </div>
  );
};

export default Banner;