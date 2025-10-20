const Home = () => {
  return (
    <div style={container}>
      <h2>Bài thực hành 02:</h2>
      <p>-Mục tiêu: Áp dụng các kiến thức liên quan đến React trong lập trình web: Props, State, Lifecycle, Axios, Typescript, React-Router.</p>
      <p>-Thời gian làm bài từ: 08h15 đến 11h45, sinh viên tạo repo trên Github, đặt tên là TH02_Mã sinh viên, vd: TH02_B24DCCC014</p>
      <p><b>Bài 1: Ứng dụng thời tiết</b></p>
      <p>- Sinh viên sử dụng axios để lấy dữ liệu qua địa chỉ https://wttr.in/tenThanhPho?format=j1, trong đó tenThanhPho là tên thành phố do người dùng nhập vào</p>
      <p>- Hiển thị kết quả là thông tin thời tiết của thành phố (Nhiệt độ, tình trạng thời tiết)</p>
      <p><b>Bài 2: Ứng dụng danh sách sinh viên</b></p>
      <p>- Sinh viên sử dụng axios để lấy dữ liệu danh sách sinh viên qua địa chỉ https://jsonplaceholder.typicode.com/users</p>
      <p>- Hiển thị danh sách sinh viên gồm các thông tin (Họ tên, email)</p>
      <p>- Khi click vào 1 sinh viên thì hiển thị chi tiết (dùng React Router).</p>
      <p><b>Bài 3: Ứng dụng xem tin tức</b></p>
      <p>- Sinh viên sử dụng axios để lấy dữ liệu tin tức qua địa chỉ https://api.spaceflightnewsapi.net/v4/articles?limit=10</p>
      <p>- Hiển thị danh sách tin tức gồm các thông tin (Ảnh, tiêu đề, mô tả, link tin gốc, ngày đăng)</p>
      <p><b>Yêu cầu:  Toàn bộ bài sử dụng typescript, bắt buộc sử dụng các thư viện: axios, react-router-dom, cả 3 bài trong cùng 1 project, mỗi bài là một component</b></p>
    </div>
  );
};
const container: React.CSSProperties = {
  backgroundColor: "white",
  margin: "20px auto",
  padding: "20px",
  maxWidth: "1200px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
};
export default Home;
