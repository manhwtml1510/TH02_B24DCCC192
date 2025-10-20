import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StudentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!student) return <p>Đang tải...</p>;

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>Chi tiết sinh viên</h2>
        <p><strong>Tên:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Điện thoại:</strong> {student.phone}</p>
        <p><strong>Website:</strong> {student.website}</p>
        <Link to="/bai2" style={backLink}>
          ← Quay lại danh sách
        </Link>
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
  lineHeight: "1.8",
};

const title: React.CSSProperties = {
  fontSize: "26px",
  fontWeight: "700",
  marginBottom: "20px",
};

const backLink: React.CSSProperties = {
  color: "#5a2ca0",
  textDecoration: "none",
  fontWeight: "500",
  display: "inline-block",
  marginTop: "15px",
};

export default StudentDetail;
