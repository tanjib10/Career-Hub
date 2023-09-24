import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className=" my-16">
      <h3 className="text-5xl text-center mb-2">
        Featured Jobs : {jobs.length}
      </h3>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn flex justify-center bg-sky-600 text-white text-center"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
