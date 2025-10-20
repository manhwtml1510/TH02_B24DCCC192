import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Student {
  id: number;
  name: string;
  email: string;
}

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>Danh sách sinh viên</h2>
        <ul style={list}>
          {students.map((sv) => (
            <li key={sv.id} style={item}>
              <Link to={`/bai2/${sv.id}`} style={link}>
                {sv.name}
              </Link>
              <p style={email}>{sv.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const page: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  backgroundColor: "#f5f5f5",
};
const card: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  width: "90%",
  maxWidth: "700px",
};
const title: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "20px",
};
const list: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};
const item: React.CSSProperties = {
  padding: "10px 0",
  borderBottom: "1px solid #eee",
};
const link: React.CSSProperties = {
  fontSize: "18px",
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "500",
};
const email: React.CSSProperties = {
  margin: "4px 0 0 0",
  color: "#666",
};

export default StudentList;
