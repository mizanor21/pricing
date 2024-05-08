import propTypes from "prop-types";

const Phone = ({ phone }) => {
  const { brand, phone_name, slug, image } = phone;
  return (
    <div className="bg-green-700 p-5 rounded-md">
      <img className="w-full" src={image} alt="" />
      <h2>{phone_name}</h2>
      <h3>{brand}</h3>
      <p>{slug}</p>
    </div>
  );
};
Phone.propTypes = {
  phone: propTypes.object,
};

export default Phone;
