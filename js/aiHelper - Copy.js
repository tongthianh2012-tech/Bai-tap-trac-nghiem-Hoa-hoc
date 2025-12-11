// Tạo 10 câu hỏi cho mỗi chủ đề
function getQuizFromAI(topic) {
  if (topic === "BTKL") {
    return [
      { question: "Định luật BTKL nói gì?", options: {A: "Khối lượng tăng", B: "Khối lượng giảm", C: "Khối lượng bảo toàn", D: "Khối lượng biến đổi"}, answer: "C", explanation: "Tổng khối lượng chất tham gia = tổng khối lượng sản phẩm." },
      { question: "BTKL áp dụng cho loại phản ứng nào?", options: {A: "Phản ứng hóa học", B: "Phản ứng vật lý", C: "Phản ứng nhiệt", D: "Phản ứng điện"}, answer: "A", explanation: "BTKL áp dụng cho phản ứng hóa học." },
      { question: "Phản ứng nào tuân theo BTKL?", options: {A: "H₂ + O₂ → H₂O", B: "C + O₂ → CO₂", C: "Fe + S → FeS", D: "Tất cả đều đúng"}, answer: "D", explanation: "Mọi phản ứng hóa học đều tuân theo BTKL." },
      { question: "Ai phát hiện BTKL?", options: {A: "Newton", B: "Lavoisier", C: "Dalton", D: "Avogadro"}, answer: "B", explanation: "Lavoisier phát hiện BTKL." },
      { question: "BTKL liên quan đến đại lượng nào?", options: {A: "Thể tích", B: "Khối lượng", C: "Nhiệt độ", D: "Áp suất"}, answer: "B", explanation: "BTKL liên quan đến khối lượng." },
      { question: "BTKL còn gọi là?", options: {A: "Định luật bảo toàn khối lượng", B: "Định luật nhiệt động", C: "Định luật Boyle", D: "Định luật Avogadro"}, answer: "A", explanation: "Tên khác là định luật bảo toàn khối lượng." },
      { question: "Trong phản ứng phân hủy, BTKL đúng không?", options: {A: "Không", B: "Có", C: "Chỉ đúng với kim loại", D: "Chỉ đúng với phi kim"}, answer: "B", explanation: "BTKL đúng với mọi phản ứng hóa học." },
      { question: "Trong phản ứng tổng hợp, BTKL?", options: {A: "Sai", B: "Đúng", C: "Không xác định", D: "Phụ thuộc điều kiện"}, answer: "B", explanation: "BTKL luôn đúng." },
      { question: "Trong phản ứng trao đổi, BTKL?", options: {A: "Sai", B: "Đúng", C: "Chỉ đúng với bazơ", D: "Chỉ đúng với axit"}, answer: "B", explanation: "BTKL đúng với phản ứng trao đổi." },
      { question: "Trong phản ứng oxi hóa khử, BTKL?", options: {A: "Sai", B: "Đúng", C: "Chỉ đúng với oxi", D: "Chỉ đúng với kim loại"}, answer: "B", explanation: "BTKL đúng với phản ứng oxi hóa khử." }
    ];
  }

  if (topic === "Cân bằng PTHH") {
    return [
      { question: "Mục đích cân bằng PTHH là?", options: {A: "Trang trí", B: "Đẹp mắt", C: "Đúng theo BTKL", D: "Tăng tốc độ"}, answer: "C", explanation: "Cân bằng để đảm bảo bảo toàn khối lượng." },
      { question: "H₂ + O₂ → H₂O cân bằng đúng là?", options: {A: "2H₂ + O₂ → 2H₂O", B: "H₂ + 2O₂ → H₂O", C: "H₂ + O₂ → H₂O₂", D: "Không cần cân bằng"}, answer: "A", explanation: "2H₂ + O₂ → 2H₂O." },
      { question: "Fe + O₂ → Fe₂O₃ cân bằng đúng là?", options: {A: "4Fe + 3O₂ → 2Fe₂O₃", B: "Fe + O₂ → FeO", C: "2Fe + O₂ → 2FeO", D: "Không cần cân bằng"}, answer: "A", explanation: "4Fe + 3O₂ → 2Fe₂O₃." },
      { question: "CH₄ + O₂ → CO₂ + H₂O cân bằng đúng là?", options: {A: "CH₄ + 2O₂ → CO₂ + 2H₂O", B: "CH₄ + 3O₂ → CO₂ + 2H₂O", C: "CH₄ + O₂ → CO + H₂O", D: "CH₄ + O₂ → CO₂ + 3H₂O"}, answer: "A", explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O." },
      { question: "Al + HCl → AlCl₃ + H₂ cân bằng đúng là?", options: {A: "2Al + 6HCl → 2AlCl₃ + 3H₂", B: "Al + 3HCl → AlCl₃ + H₂", C: "Al + HCl → AlCl + H₂", D: "Không cần cân bằng"}, answer: "A", explanation: "2Al + 6HCl → 2AlCl₃ + 3H₂." },
      { question: "CaCO₃ → CaO + CO₂ hệ số đúng là?", options: {A: "1:1:1", B: "2:2:2", C: "Không cần cân bằng", D: "1:2:1"}, answer: "A", explanation: "Phân hủy đơn giản 1:1:1." },
      { question: "N₂ + H₂ → NH₃ cân bằng đúng là?", options: {A: "N₂ + 3H₂ → 2NH₃", B: "N₂ + H₂ → NH₃", C: "2N₂ + 3H₂ → NH₃", D: "Không cần cân bằng"}, answer: "A", explanation: "N₂ + 3H₂ → 2NH₃." },
      { question: "NaOH + HCl → NaCl + H₂O hệ số đúng là?", options: {A: "1:1:1:1", B: "2:2:2:2", C: "1:2:1:2", D: "Không cần cân bằng"}, answer: "A", explanation: "Trung hòa đơn giản 1:1:1:1." },
      { question: "Zn + HCl → ZnCl₂ + H₂ cân bằng đúng là?", options: {A: "Zn + 2HCl → ZnCl₂ + H₂", B: "Zn + HCl → ZnCl + H₂", C: "2Zn + 2HCl → ZnCl₂ + H₂", D: "Không cần cân bằng"}, answer: "A", explanation: "Zn + 2HCl → ZnCl₂ + H₂." },
      { question: "KClO₃ → KCl + O₂ cân bằng đúng là?", options: {A: "2KClO₃ → 2KCl + 3O₂", B: "KClO₃ → KCl + O₂", C: "KClO₃ → KCl + 2O₂", D: "2KClO₃ → KCl + 3O₂"}, answer: "A", explanation: "2KClO₃ → 2KCl + 3O₂." }
    ];
  }

  if (topic === "Liên kết hóa học") {
    return [
      { question: "Liên kết hóa học là gì?", options: {A: "Sự hút nhau giữa các nguyên tử", B: "Sự đẩy nhau", C: "Phân hủy", D: "Oxi hóa"}, answer: "A", explanation: "Là lực hút giúp tạo phân tử/hợp chất." },
      { question: "Liên kết ion hình thành giữa?", options: {A: "Kim loại và phi kim", B: "Hai kim loại", C: "Hai phi kim", D: "Khí trơ"}, answer: "A", explanation: "Ion: kim loại (mất e) + phi kim (nhận e)." },
      { question: "Liên kết cộng hóa trị là?", options: {A: "Chia sẻ e", B: "Trao đổi e", C: "Mất e", D: "Nhận e"}, answer: "A", explanation: "Chia sẻ e giữa các nguyên tử." },
      { question: "Phân tử H₂ có liên kết?", options: {A: "Cộng hóa trị", B: "Ion", C: "Kim loại", D: "Hydro"}, answer: "A", explanation: "H–H là liên kết cộng hóa trị." },
      { question: "NaCl có liên kết?", options: {A: "Ion", B: "Cộng hóa trị", C: "Kim loại", D: "Hydro"}, answer: "A", explanation: "NaCl: liên kết ion." },
      { question: "Liên kết kim loại đặc trưng bởi?", options: {A: "Electron tự do", B: "Chia sẻ e", C: "Trao đổi e", D: "Không có e"}, answer: "A", explanation: "Electron tự do di chuyển." },
      { question: "Liên kết hydro xảy ra giữa?", options: {A: "H với O/N/F", B: "H với kim loại", C: "H với khí trơ", D: "H với C"}, answer: "A", explanation: "Giữa H và nguyên tử có độ âm cao." },
      { question: "Phân tử nước có liên kết gì?", options: {A: "Cộng hóa trị và hydro", B: "Ion", C: "Kim loại", D: "Không liên kết"}, answer: "A", explanation: "Trong nước: cộng hóa trị (trong) + hydro (giữa phân tử)." },
      { question: "Cộng hóa trị phân cực là?", options: {A: "Chia sẻ e không đều", B: "Chia đều e", C: "Không chia sẻ", D: "Trao đổi e"}, answer: "A", explanation: "Do độ âm điện khác nhau." },
      { question: "Cộng hóa trị không phân cực là?", options: {A: "Chia đều e", B: "Chia không đều e", C: "Trao đổi e", D: "Không có e"}, answer: "A", explanation: "Giữa hai nguyên tử giống nhau (H₂, Cl₂…)." }
    ];
  }

  return [];
}

// Trả về 3 bộ luyện tập khác nhau, mỗi bộ 5 câu cho mỗi chủ đề
function getPracticeFromAI(topic, round = 1) {
  const sets = {
    BTKL: [
      [
        { question: "BTKL đúng với phản ứng nào?", options: {A: "Vật lý", B: "Hóa học", C: "Nhiệt", D: "Điện"}, answer: "B", explanation: "BTKL đúng với phản ứng hóa học." },
        { question: "Khối lượng trước và sau phản ứng?", options: {A: "Tăng", B: "Giảm", C: "Bảo toàn", D: "Biến đổi"}, answer: "C", explanation: "Khối lượng được bảo toàn." },
        { question: "Ai nêu BTKL?", options: {A: "Lavoisier", B: "Boyle", C: "Charles", D: "Gay-Lussac"}, answer: "A", explanation: "Lavoisier." },
        { question: "BTKL áp dụng cho?", options: {A: "PTHH", B: "PTVL", C: "PTNhiệt", D: "PTĐiện"}, answer: "A", explanation: "Phản ứng hóa học." },
        { question: "Ví dụ minh họa BTKL?", options: {A: "C + O₂ → CO₂", B: "Đun nước bay hơi", C: "Nén khí", D: "Kéo giãn lò xo"}, answer: "A", explanation: "Phản ứng hóa học tuân theo BTKL." }
      ],
      [
        { question: "Trong hệ kín, BTKL?", options: {A: "Sai", B: "Đúng", C: "Không xác định", D: "Phụ thuộc nhiệt độ"}, answer: "B", explanation: "Trong hệ kín, khối lượng bảo toàn." },
        { question: "BTKL khẳng định?", options: {A: "Khối lượng biến đổi", B: "Khối lượng bảo toàn", C: "Thể tích bảo toàn", D: "Áp suất bảo toàn"}, answer: "B", explanation: "Bảo toàn khối lượng." },
        { question: "Khối lượng sản phẩm so với chất tham gia?", options: {A: "Lớn hơn", B: "Nhỏ hơn", C: "Bằng nhau", D: "Không liên quan"}, answer: "C", explanation: "Bằng nhau." },
        { question: "Phản ứng oxi hóa khử và BTKL?", options: {A: "Không đúng", B: "Đúng", C: "Tùy", D: "Chỉ đúng với kim loại"}, answer: "B", explanation: "BTKL đúng với mọi phản ứng hóa học." },
        { question: "BTKL có ý nghĩa gì?", options: {A: "Cân bằng PTHH", B: "Trang trí", C: "Đo áp suất", D: "Tăng tốc độ"}, answer: "A", explanation: "Dùng để cân bằng phương trình hóa học." }
      ],
      [
        { question: "BTKL còn gọi là?", options: {A: "Bảo toàn khối lượng", B: "Bảo toàn thể tích", C: "Bảo toàn áp suất", D: "Bảo toàn nhiệt"}, answer: "A", explanation: "Tên gọi khác." },
        { question: "Trong phản ứng phân hủy, khối lượng?", options: {A: "Tăng", B: "Giảm", C: "Bảo toàn", D: "Không xác định"}, answer: "C", explanation: "Bảo toàn." },
        { question: "Ví dụ axit-bazơ minh họa BTKL?", options: {A: "NaOH + HCl → NaCl + H₂O", B: "Đun nóng nước", C: "Nén khí", D: "Hòa tan muối"}, answer: "A", explanation: "Phản ứng trung hòa tuân theo BTKL." },
        { question: "BTKL với phản ứng tổng hợp?", options: {A: "Sai", B: "Đúng", C: "Không xác định", D: "Phụ thuộc xúc tác"}, answer: "B", explanation: "Luôn đúng." },
        { question: "Hệ mở có thất thoát khối lượng quan sát được?", options: {A: "Có thể", B: "Không", C: "Luôn có", D: "Không ảnh hưởng"}, answer: "A", explanation: "Có thể thất thoát (bay hơi), nhưng tổng khối lượng vẫn bảo toàn nếu tính cả phần thoát ra." }
      ]
    ],
    "Cân bằng PTHH": [
      [
        { question: "H₂ + O₂ → H₂O cân bằng là?", options: {A: "2H₂ + O₂ → 2H₂O", B: "H₂ + O₂ → H₂O", C: "H₂ + 2O₂ → H₂O", D: "H₂ + O₂ → H₂O₂"}, answer: "A", explanation: "2H₂ + O₂ → 2H₂O." },
        { question: "Fe + O₂ → Fe₂O₃ cân bằng là?", options: {A: "4Fe + 3O₂ → 2Fe₂O₃", B: "Fe + O₂ → FeO", C: "2Fe + O₂ → 2FeO", D: "Fe + 3O₂ → Fe₃O₄"}, answer: "A", explanation: "Chuẩn hệ số." },
        { question: "CH₄ + O₂ → CO₂ + H₂O cân bằng?", options: {A: "CH₄ + 2O₂ → CO₂ + 2H₂O", B: "CH₄ + 3O₂ → CO₂ + 2H₂O", C: "CH₄ + O₂ → CO + H₂O", D: "CH₄ + O₂ → CO₂ + 3H₂O"}, answer: "A", explanation: "Chuẩn." },
        { question: "N₂ + H₂ → NH₃ cân bằng?", options: {A: "N₂ + 3H₂ → 2NH₃", B: "N₂ + H₂ → NH₃", C: "2N₂ + 3H₂ → NH₃", D: "Không cần"}, answer: "A", explanation: "Chuẩn." },
        { question: "KClO₃ → KCl + O₂ cân bằng?", options: {A: "2KClO₃ → 2KCl + 3O₂", B: "KClO₃ → KCl + O₂", C: "KClO₃ → KCl + 2O₂", D: "KClO₃ → 2KCl + O₂"}, answer: "A", explanation: "Chuẩn." }
      ],
      [
        { question: "NaOH + HCl → NaCl + H₂O hệ số?", options: {A: "1:1:1:1", B: "2:2:2:2", C: "1:2:1:2", D: "Không cần"}, answer: "A", explanation: "Trung hòa 1:1:1:1." },
        { question: "Al + HCl → AlCl₃ + H₂ cân bằng?", options: {A: "2Al + 6HCl → 2AlCl₃ + 3H₂", B: "Al + 3HCl → AlCl₃ + H₂", C: "Al + HCl → AlCl + H₂", D: "Không cần"}, answer: "A", explanation: "Chuẩn." },
        { question: "CaCO₃ → CaO + CO₂ hệ số?", options: {A: "1:1:1", B: "2:2:2", C: "1:2:1", D: "Không cần"}, answer: "A", explanation: "Phân hủy đơn giản." },
        { question: "Zn + HCl → ZnCl₂ + H₂ cân bằng?", options: {A: "Zn + 2HCl → ZnCl₂ + H₂", B: "Zn + HCl → ZnCl + H₂", C: "2Zn + 2HCl → ZnCl₂ + H₂", D: "Không cần"}, answer: "A", explanation: "Chuẩn." },
        { question: "Fe + S → FeS hệ số?", options: {A: "1:1:1", B: "2:1:1", C: "1:2:1", D: "2:2:2"}, answer: "A", explanation: "Kết hợp đơn giản." }
      ],
      [
        { question: "CO + O₂ → CO₂ cân bằng?", options: {A: "2CO + O₂ → 2CO₂", B: "CO + O₂ → CO₂", C: "CO + 2O₂ → CO₂", D: "CO + O₂ → CO"}, answer: "A", explanation: "Chuẩn." },
        { question: "P + O₂ → P₂O₅ cân bằng?", options: {A: "4P + 5O₂ → 2P₂O₅", B: "P + O₂ → P₂O₅", C: "2P + O₂ → P₂O₅", D: "Không cần"}, answer: "A", explanation: "Chuẩn." },
        { question: "SO₂ + O₂ → SO₃ cân bằng?", options: {A: "2SO₂ + O₂ → 2SO₃", B: "SO₂ + O₂ → SO₃", C: "SO₂ + 2O₂ → SO₃", D: "Không cần"}, answer: "A", explanation: "Chuẩn." },
        { question: "Mg + O₂ → MgO cân bằng?", options: {A: "2Mg + O₂ → 2MgO", B: "Mg + O₂ → MgO", C: "Mg + 2O₂ → MgO", D: "Không cần"}, answer: "A", explanation: "Chuẩn." },
        { question: "H₂S + O₂ → SO₂ + H₂O cân bằng?", options: {A: "2H₂S + 3O₂ → 2SO₂ + 2H₂O", B: "H₂S + O₂ → SO₂ + H₂O", C: "2H₂S + O₂ → 2SO₂ + H₂O", D: "H₂S + 2O₂ → SO₂ + 2H₂O"}, answer: "A", explanation: "Chuẩn." }
      ]
    ],
    "Liên kết hóa học": [
      [
        { question: "Liên kết ion là?", options: {A: "Trao đổi e", B: "Chia sẻ e", C: "Không có e", D: "Electron tự do"}, answer: "A", explanation: "Hình thành do trao đổi electron." },
        { question: "Liên kết cộng hóa trị là?", options: {A: "Chia sẻ e", B: "Trao đổi e", C: "Mất e", D: "Nhận e"}, answer: "A", explanation: "Chia sẻ electron." },
        { question: "Kim loại có?", options: {A: "Electron tự do", B: "Chia sẻ e", C: "Không e", D: "Ion âm"}, answer: "A", explanation: "Liên kết kim loại." },
        { question: "Liên kết hydro giữa?", options: {A: "H và O/N/F", B: "H và kim loại", C: "H và C", D: "H và khí trơ"}, answer: "A", explanation: "Giữa H và nguyên tử âm điện mạnh." },
        { question: "Nước có liên kết?", options: {A: "Cộng hóa trị + hydro", B: "Ion", C: "Kim loại", D: "Không liên kết"}, answer: "A", explanation: "Cộng hóa trị trong, hydro giữa phân tử." }
      ],
      [
        { question: "Cộng hóa trị phân cực là?", options: {A: "Chia e không đều", B: "Chia e đều", C: "Không chia e", D: "Trao đổi e"}, answer: "A", explanation: "Do khác độ âm điện." },
        { question: "Cộng hóa trị không phân cực là?", options: {A: "Chia e đều", B: "Chia e không đều", C: "Trao đổi e", D: "Không có e"}, answer: "A", explanation: "Giữa nguyên tử giống nhau." },
        { question: "NaCl liên kết?", options: {A: "Ion", B: "Cộng hóa trị", C: "Kim loại", D: "Hydro"}, answer: "A", explanation: "Ion." },
        { question: "H₂ liên kết?", options: {A: "Cộng hóa trị", B: "Ion", C: "Kim loại", D: "Hydro"}, answer: "A", explanation: "Cộng hóa trị." },
        { question: "HF có liên kết gì nổi bật?", options: {A: "Cộng hóa trị phân cực + hydro", B: "Ion", C: "Kim loại", D: "Không liên kết"}, answer: "A", explanation: "Có liên kết hydro mạnh." }
      ],
      [
        { question: "Kim cương liên kết?", options: {A: "Cộng hóa trị mạnh", B: "Ion", C: "Kim loại", D: "Hydro"}, answer: "A", explanation: "Mạng cộng hóa trị 3D." },
        { question: "Graphite đặc trưng bởi?", options: {A: "Electron tự do giữa lớp", B: "Ion hoàn toàn", C: "Hydro mạnh", D: "Không liên kết"}, answer: "A", explanation: "Dẫn điện nhờ e tự do." },
        { question: "NH₃ liên kết?", options: {A: "Cộng hóa trị phân cực", B: "Ion", C: "Kim loại", D: "Không liên kết"}, answer: "A", explanation: "Cộng hóa trị phân cực." },
        { question: "Liên kết kim loại có tính?", options: {A: "Dẫn điện", B: "Cách điện", C: "Không đàn hồi", D: "Giòn với mọi kim loại"}, answer: "A", explanation: "Dẫn điện/ nhiệt tốt." },
        { question: "CO₂ liên kết gì?", options: {A: "Cộng hóa trị", B: "Ion", C: "Kim loại", D: "Hydro"}, answer: "A", explanation: "Cộng hóa trị trong phân tử tuyến tính." }
      ]
    ]
  };

  const topicSets = sets[topic];
  if (!topicSets) return [];

  const index = Math.min(Math.max(round - 1, 0), topicSets.length - 1);
  return topicSets[index];
}
