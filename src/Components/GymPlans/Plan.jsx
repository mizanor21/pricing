import propTypes from "prop-types";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Plan = ({ plan }) => {
  const { name, price, duration, includes } = plan;
  return (
    <div className="bg-green-700 rounded-md p-5 font-serif text-white flex flex-col">
      <div className="text-center">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="">/{duration}</span>
        <h1 className="font-bold ">{name}</h1>
      </div>
      <div className="my-5 flex-grow">
        {includes.map((include, i) => (
          <p className="flex items-center gap-2" key={i}>
            <IoCheckmarkCircleSharp className="text-green-800" /> {include}
          </p>
        ))}
      </div>
      <button className="btn btn-primary w-full">Buy Now</button>
    </div>
  );
};
Plan.propTypes = {
  plan: propTypes.object,
};

export default Plan;
