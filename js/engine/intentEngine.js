/* =========================================
   intentEngine.js
   CHỨC NĂNG:
   - Phân tích câu nói người học (text)
   - Xác định: Ý ĐỊNH + CHỦ ĐỀ + SỐ CÂU
   - KHÔNG tạo bài
   - KHÔNG mô phỏng
   - KHÔNG xử lý giao diện
   ========================================= */

function detectIntent(text) {
  if (!text || typeof text !== "string") {
    return null;
  }

  const t = text.toLowerCase();

  // ===== 1️⃣ LẤY SỐ CÂU (nếu có) =====
  // VD: "tạo 10 câu", "cho 3 bài tập"
  const numberMatch = t.match(/\d+/);
  const count = numberMatch ? parseInt(numberMatch[0], 10) : 5;

  // ===== 2️⃣ XÁC ĐỊNH LOẠI YÊU CẦU (INTENT) =====
  let type = null;

  // ƯU TIÊN ĐỘNG TỪ HÀNH ĐỘNG
  if (
    t.includes("mô phỏng") ||
    t.includes("thí nghiệm") ||
    t.includes("diễn biến")
  ) {
    type = "simulation";
  } else if (
    t.includes("tạo bài") ||
    t.includes("bài tập") ||
    t.includes("luyện tập") ||
    t.includes("trắc nghiệm")
  ) {
    type = "quiz";
  } else if (
    t.includes("giải thích") ||
    t.includes("là gì") ||
    t.includes("tại sao") ||
    t.includes("vì sao")
  ) {
    type = "explain";
  }

  if (!type) return null;

  // ===== 3️⃣ XÁC ĐỊNH CHỦ ĐỀ (TOPIC) =====
  let topic = "BTKL"; // mặc định an toàn

  if (t.includes("bảo toàn khối lượng")) topic = "BTKL";
  else if (t.includes("liên kết ion")) topic = "IONIC_BOND";
  else if (t.includes("liên kết cộng hóa trị")) topic = "COVALENT_BOND";
  else if (t.includes("hóa hợp")) topic = "REACTION_HOA_HOP";
  else if (t.includes("phân hủy")) topic = "REACTION_PHAN_HUY";
  else if (t.includes("trao đổi")) topic = "REACTION_TRAO_DOI";

  // ===== 4️⃣ KẾT QUẢ TRẢ VỀ =====
  return {
    type,        // explain | quiz | simulation
    topic,       // BTKL | IONIC_BOND | ...
    count,       // số câu (dùng cho quiz)
    confidence: 0.9
  };
}

// expose global cho voiceAndSimulation.js
window.detectIntent = detectIntent;
