const Banner = () => {
  return (
    <div className="max-w-5xl mx-auto flex justify-evenly items-center my-16">
      <div className="flex-1 my-2">
        <h3 className="text-5xl">One Step Closer To Your Dream Job</h3>
        <p className=" mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-sky-600 text-white p-4 mt-3">Get Started</button>
      </div>
      <div className="flex-1">
        <img src="../../../assets/images/user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
