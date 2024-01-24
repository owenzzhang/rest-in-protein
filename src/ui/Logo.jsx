import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img className="w-[180px]" src="/assets/bearLogo.png" alt="gym logo" />
      </Link>
    </div>
  );
}

export default Logo;
