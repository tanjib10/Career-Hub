/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="w-3/4 mx-auto mt-4 flex border-2 border-sky-500 justify-between my-3 rounded-lg items-center">
      <div className="p-4">
        <img src={logo} />
        <h3 className="text-3xl font-semibold my-4">{job_title}</h3>
        <p className="font-bold mb-2">{company_name}</p>
        <div className="flex">
          <button className="bg-sky-400 text-white p-2  rounded-lg mr-3">
            {remote_or_onsite}
          </button>
          <button className="bg-sky-400 p-2 rounded-lg text-white">
            {job_type}
          </button>
        </div>
        <div className="flex mt-2">
          <p className="mr-4">
            <span className="text-lg font-semibold">Salary: </span>
            {salary}
          </p>
          <p>
            <span className="text-lg font-semibold">Location: </span>
            {location}
          </p>
        </div>
      </div>
      <Link to={`/job/${id}`}>
        <button className=" mr-2 p-3 btn bg-sky-600 mt-2  text-white rounded-lg">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AppliedJob;
