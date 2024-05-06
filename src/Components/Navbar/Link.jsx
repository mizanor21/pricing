import propTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      <li className="mr-10">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: propTypes.object,
};

export default Link;
