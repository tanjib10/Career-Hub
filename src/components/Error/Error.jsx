import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="text-center">
        <h3 className="text-4xl text-center">Oops!!</h3>
        <p>404 Not Found.</p> 
        <Link to="/" className="text-sky-800">Go back</Link>
      </div>
   );
};

export default Error;