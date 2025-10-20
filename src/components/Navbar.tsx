import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#1976d2", padding: "10px" }}>
      <Link to="/" style={linkStyle}>Trang chủ</Link>
      <Link to="/bai1" style={linkStyle}>Bài 1</Link>
      <Link to="/bai2" style={linkStyle}>Bài 2</Link>
      <Link to="/bai3" style={linkStyle}>Bài 3</Link>
    </nav>
  );
};

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  marginRight: "20px",
  fontWeight: "bold",
};

export default Navbar;
