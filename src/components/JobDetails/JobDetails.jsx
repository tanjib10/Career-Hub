import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  const handleApply = () => {
    saveJobApplication(parseInt(id));
  };

  return (
    <div className="mb-16">
      <h3 className="text-5xl text-center font-bold my-12">Job Details</h3>
      <div className="flex max-w-5xl gap-4 mx-auto items-center justify-between">
        <div className="border-2 flex-1 font-medium border-sky-200 rounded-lg p-4">
          <h5>
            Job Description : <small>{job.job_description}</small>
          </h5>
          <h3>
            Job Responsibility : <small>{job.job_responsibility}</small>
          </h3>
          <h3>
            Educational Requirements:{" "}
            <small>{job.educational_requirements}</small>
          </h3>
          <h3>
            Experience : <small>{job.experiences}</small>
          </h3>
        </div>
        <div className="flex-1 bg-blue-100 pl-6 border-2 border-sky-200 rounded-lg p-2 ">
          <h1 className="font-bold">Job Details</h1>
          <p>Salary : {job.salary}</p>
          <p>Job Title : {job.job_title}</p>
          <h3 className="font-bold my-2">Contact Info</h3>
          <p>Phone : {job.contact_information.phone}</p>
          <p>Email : {job.contact_information.email}</p>
          <p>Address : {job.contact_information.address}</p>
          <div className="flex justify-center">
            <button
              onClick={handleApply}
              className="btn bg-sky-400 text-white w-full mt-3"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
