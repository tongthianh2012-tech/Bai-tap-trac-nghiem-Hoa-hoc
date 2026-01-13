// ================== AI HELPER – NGÂN HÀNG CÂU HỎI ==================

function getQuizFromAI(topic) {

  // =================================================
  // ============ ĐỊNH LUẬT BTKL (GIỮ NGUYÊN) =========
  // =================================================
  if (topic === "BTKL") {
    return [
      // ====== CHỌN ĐÁP ÁN (5) ======
      { type:"choice", level:"Biết", question:"Định luật bảo toàn khối lượng phát biểu nội dung nào sau đây?", options:["Khối lượng tăng","Khối lượng giảm","Khối lượng được bảo toàn","Khối lượng phụ thuộc phản ứng"], answer:2 },
      { type:"choice", level:"Biết", question:"Nhà khoa học phát hiện định luật BTKL là ai?", options:["Newton","Dalton","Lavoisier","Avogadro"], answer:2 },
      { type:"choice", level:"Hiểu", question:"BTKL đúng với phản ứng nào?", options:["Vật lý","Hóa học","Sinh học","Hạt nhân"], answer:1 },
      { type:"choice", level:"Hiểu", question:"Cân bằng PTHH dựa trên định luật nào?", options:["BTKL","Boyle","Charles","Avogadro"], answer:0 },
      { type:"choice", level:"Vận dụng", question:"Phản ứng nào thể hiện BTKL?", options:["NaOH+HCl→NaCl+H₂O","Nước bay hơi","Đinh sắt gỉ","Nén khí"], answer:0 },

      // ====== ĐIỀN KHUYẾT (5) ======
      { type:"fill_blank", level:"Biết", question:"Theo BTKL, tổng khối lượng trước phản ứng _____ tổng khối lượng sau phản ứng.", answer:"bằng" },
      { type:"fill_blank", level:"Biết", question:"Định luật BTKL do _____ phát hiện.", answer:"lavoisier" },
      { type:"fill_blank", level:"Hiểu", question:"BTKL dùng để _____ phương trình hóa học.", answer:"cân bằng" },
      { type:"fill_blank", level:"Hiểu", question:"Trong hệ kín, khối lượng luôn được _____.", answer:"bảo toàn" },
      { type:"fill_blank", level:"Vận dụng", question:"5g A + 5g B → tổng sản phẩm là _____ g.", answer:"10" },

      // ====== GHÉP ĐÔI (5) ======
      { type:"match", level:"Biết", question:"Ghép nhà khoa học – đóng góp", left:["1. Lavoisier","2. Dalton"], right:["a. Thuyết nguyên tử","b. BTKL"], answer:["1-b","2-a"] },
      { type:"match", level:"Biết", question:"Ghép khái niệm", left:["1. BTKL","2. PTHH"], right:["a. Phản ứng hóa học","b. Bảo toàn khối lượng"], answer:["1-b","2-a"] },
      { type:"match", level:"Hiểu", question:"Ghép hiện tượng", left:["1. NaOH+HCl","2. Nước bay hơi"], right:["a. Hóa học","b. Vật lý"], answer:["1-a","2-b"] },
      { type:"match", level:"Hiểu", question:"Ghép nội dung", left:["1. Cân bằng PTHH","2. BTKL"], right:["a. Số nguyên tử","b. Khối lượng"], answer:["1-a","2-b"] },
      { type:"match", level:"Vận dụng", question:"Ghép dữ kiện", left:["1. 5g A + 5g B","2. Sản phẩm"], right:["a. 10g","b. Tổng khối lượng"], answer:["1-a","2-b"] }
    ];
  }

  // =================================================
  // ============== CÂN BẰNG PTHH ====================
  // =================================================
  if (topic === "Cân bằng PTHH") {
    return [
      // BIẾT (6)
      { type:"choice", level:"Biết", question:"Mục đích cân bằng PTHH là gì?", options:["Cho đẹp","Đúng BTKL","Nhanh hơn","Trang trí"], answer:1 },
      { type:"choice", level:"Biết", question:"H₂ + O₂ → H₂O cân bằng là?", options:["2H₂+O₂→2H₂O","H₂+O₂→H₂O","Sai","Không cần"], answer:0 },
      { type:"fill_blank", level:"Biết", question:"Cân bằng PTHH dựa trên định luật _____.", answer:"bảo toàn khối lượng" },
      { type:"fill_blank", level:"Biết", question:"Hệ số trong PTHH là số _____.", answer:"nguyên" },
      { type:"match", level:"Biết", question:"Ghép phản ứng", left:["1. Fe+O₂","2. H₂+O₂"], right:["a. 4Fe+3O₂→2Fe₂O₃","b. 2H₂+O₂→2H₂O"], answer:["1-a","2-b"] },
      { type:"match", level:"Biết", question:"Ghép khái niệm", left:["1. Hệ số","2. Chỉ số"], right:["a. Trước CTHH","b. Dưới kí hiệu"], answer:["1-a","2-b"] },

      // HIỂU (6)
      { type:"choice", level:"Hiểu", question:"Khi cân bằng PTHH được phép thay đổi?", options:["Chỉ số","Hệ số","CTHH","Nguyên tố"], answer:1 },
      { type:"choice", level:"Hiểu", question:"Vì sao cần cân bằng?", options:["Đúng nguyên tử","Đúng khối lượng","Đúng màu","Đúng nhiệt"], answer:1 },
      { type:"fill_blank", level:"Hiểu", question:"Tổng số nguyên tử mỗi nguyên tố phải _____.", answer:"bằng nhau" },
      { type:"fill_blank", level:"Hiểu", question:"Cân bằng không làm đổi _____ chất.", answer:"bản chất" },
      { type:"match", level:"Hiểu", question:"Ghép loại phản ứng", left:["1. Trung hòa","2. Phân hủy"], right:["a. NaOH+HCl","b. CaCO₃→CaO+CO₂"], answer:["1-a","2-b"] },
      { type:"match", level:"Hiểu", question:"Ghép ý nghĩa", left:["1. BTKL","2. Cân bằng"], right:["a. Cơ sở","b. Thực hiện"], answer:["1-a","2-b"] },

      // VẬN DỤNG (3)
      { type:"choice", level:"Vận dụng", question:"Al + HCl → AlCl₃ + H₂ cân bằng đúng?", options:["2Al+6HCl→2AlCl₃+3H₂","Sai","Không cần","Khác"], answer:0 },
      { type:"fill_blank", level:"Vận dụng", question:"Zn + ___HCl → ZnCl₂ + H₂", answer:"2" },
      { type:"match", level:"Vận dụng", question:"Ghép PTHH", left:["1. N₂+H₂","2. KClO₃"], right:["a. 2KClO₃→2KCl+3O₂","b. N₂+3H₂→2NH₃"], answer:["1-b","2-a"] }
    ];
  }

  // =================================================
  // ============ LIÊN KẾT HÓA HỌC ====================
  // =================================================
  if (topic === "Liên kết hóa học") {
    return [
      // BIẾT (6)
      { type:"choice", level:"Biết", question:"Liên kết ion hình thành do?", options:["Chia sẻ e","Trao đổi e","Va chạm","Hút nhau"], answer:1 },
      { type:"choice", level:"Biết", question:"NaCl có liên kết gì?", options:["Cộng hóa trị","Ion","Kim loại","Hydro"], answer:1 },
      { type:"fill_blank", level:"Biết", question:"Liên kết cộng hóa trị là sự _____ electron.", answer:"chia sẻ" },
      { type:"fill_blank", level:"Biết", question:"Kim loại có electron _____.", answer:"tự do" },
      { type:"match", level:"Biết", question:"Ghép chất – liên kết", left:["1. NaCl","2. H₂O"], right:["a. Ion","b. Cộng hóa trị"], answer:["1-a","2-b"] },
      { type:"match", level:"Biết", question:"Ghép loại", left:["1. Kim loại","2. Phi kim"], right:["a. Electron tự do","b. Chia sẻ e"], answer:["1-a","2-b"] },

      // HIỂU (6)
      { type:"choice", level:"Hiểu", question:"Vì sao kim loại dẫn điện?", options:["Ion","Electron tự do","Proton","Liên kết ion"], answer:1 },
      { type:"choice", level:"Hiểu", question:"Liên kết hydro xảy ra khi H liên kết với?", options:["O,N,F","C","Na","Cl"], answer:0 },
      { type:"fill_blank", level:"Hiểu", question:"Cộng hóa trị phân cực do khác _____ điện.", answer:"độ âm" },
      { type:"fill_blank", level:"Hiểu", question:"Liên kết ion hình thành giữa _____ và phi kim.", answer:"kim loại" },
      { type:"match", level:"Hiểu", question:"Ghép phân tử", left:["1. H₂","2. NaCl"], right:["a. Cộng hóa trị","b. Ion"], answer:["1-a","2-b"] },
      { type:"match", level:"Hiểu", question:"Ghép đặc điểm", left:["1. Ion","2. Kim loại"], right:["a. Trao đổi e","b. Electron tự do"], answer:["1-a","2-b"] },

      // VẬN DỤNG (3)
      { type:"choice", level:"Vận dụng", question:"HF có liên kết nổi bật nào?", options:["Ion","Hydro","Kim loại","Không"], answer:1 },
      { type:"fill_blank", level:"Vận dụng", question:"CO₂ có liên kết _____ trong phân tử.", answer:"cộng hóa trị" },
      { type:"match", level:"Vận dụng", question:"Ghép chất – tính chất", left:["1. Kim cương","2. Graphite"], right:["a. Dẫn điện","b. Rất cứng"], answer:["1-b","2-a"] }
    ];
  }

  return [];
}
