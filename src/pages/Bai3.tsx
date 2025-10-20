import axios from "axios";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  published_at: string;
  image_url: string;
}

const Bai3 = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results))
      .catch((err) => console.error("Lỗi khi tải dữ liệu:", err));
  }, []);

  const getDomain = (url: string): string => {
    try {
      const hostname = new URL(url).hostname.replace("www.", "");
      return hostname;
    } catch {
      return "nguồn tin";
    }
  };

  return (
    <div style={container}>
      <h2>Tin tức</h2>
      {articles.map((a) => (
        <div key={a.id} style={card}>
          <img
            src={a.image_url}
            width="150"
            alt="thumb"
            style={{ borderRadius: "8px" }}
          />
          <div>
            <h4>{a.title}</h4>
            <p>{a.summary}</p>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Đọc thêm tại {getDomain(a.url)}
            </a>
            <p style={{ marginTop: "8px", color: "#555" }}>
              Ngày đăng: {new Date(a.published_at).toLocaleDateString("vi-VN")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const container: React.CSSProperties = { padding: "20px" };
const card: React.CSSProperties = {
  display: "flex",
  gap: "15px",
  marginBottom: "20px",
  borderBottom: "1px solid #ddd",
  paddingBottom: "15px",
  alignItems: "flex-start",
};

export default Bai3;
