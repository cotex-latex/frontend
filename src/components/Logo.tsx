import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src="/img/logo.svg" className="max-h-16 mx-auto" alt="Logo app" />
    </Link>
  );
};

export default Logo;
