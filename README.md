<h1 align="center">❓ Ứng Dụng Hỏi Đáp (Question Answering)</h1>

<p align="left">
  <em>Ứng dụng này cho phép người dùng đặt câu hỏi dựa trên một đoạn văn bản đã cung cấp. Sử dụng mô hình BERT được huấn luyện sẵn từ Hugging Face Transformers, hệ thống sẽ đưa ra câu trả lời chính xác nhất có thể.</em><br>
</p>

![📸 Giao diện ứng dụng](images/screenshot.png)

---

## ⚙️ Tính Năng

- Giao diện web thân thiện, dễ sử dụng.
- Trả lời câu hỏi chính xác dựa trên ngữ cảnh người dùng nhập vào.
- Backend sử dụng Flask, frontend thuần HTML/CSS/JS.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Mô hình**: BERT từ thư viện Hugging Face Transformers

---

## 📁 Cấu Trúc Thư Mục

```bash
📦Question-Answering-app/
├── app.py             # Flask backend xử lý logic hỏi đáp
├── index.html         # Giao diện chính
├── script.js          # Xử lý tương tác người dùng
├── styles.css         # Giao diện CSS
├── trained/           # Các tệp cấu hình và model đã lưu
└── README.md          # File hướng dẫn (bạn đang đọc nó)
```

---

## 💻 Cài đặt & chạy ứng dụng

### Yêu cầu
- Python 3.9 trở lên
- Pip

### Các bước thực hiện

1. **Clone repository**
   ```bash
   git clone https://github.com/stran1023/Question-Answering-app.git
   cd Question-Answering-app
2. Tạo môi trường ảo
   ```bash
   python -m venv venv
3. Kích hoạt môi trường ảo
   ```bash
   venv\Scripts\activate
4. Cài đặt thư viện cần thiết
   ```bash
   pip install flask flask-cors transformers torch torchvision torchaudio
5. Chạy ứng dụng
   ```bash
   python app.py
6. Mở giao diện người dùng
   - Mở trình duyệt và truy cập: http://localhost:8000/index.html (nếu dùng server local)
   - Hoặc mở file index.html trực tiếp

## 🧪 Cách sử dụng
1. Nhập đoạn văn (ngữ cảnh) vào ô văn bản.
2. Nhập câu hỏi của bạn vào trường nhập liệu.
3. Nhấn nút Gửi để nhận câu trả lời từ hệ thống.
