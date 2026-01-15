/* =====================================================
   voiceAndSimulation.js
   - FIX LỖI no-speech
   - Ổn định cho demo
   - Có mô phỏng liên kết + diễn biến phản ứng (BTKL)
   ===================================================== */

const micBtn = document.getElementById("micBtn");
const quizContainer = document.getElementById("quizContainer");

console.log("voiceAndSimulation.js đã sẵn sàng");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Trình duyệt không hỗ trợ nhận giọng nói");
}

const recognition = new SpeechRecognition();
recognition.lang = "vi-VN";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.continuous = false;

// ===== CLICK MICRO =====
micBtn.addEventListener("click", () => {
  quizContainer.innerHTML = `
    <p>🎧 Đang nghe yêu cầu...</p>
    <p><i>Hãy nói ngay sau khi bấm micro</i></p>
    <p><i>Ví dụ: Mô phỏng diễn biến phản ứng hóa học</i></p>
  `;
  try { recognition.start(); } catch (e) {}
});

// ===== NHẬN KẾT QUẢ =====
recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  handleVoiceCommand(text);
};

// ===== FIX no-speech =====
recognition.onerror = (event) => {
  if (event.error === "no-speech") {
    quizContainer.innerHTML = `
      <p>⚠️ Tôi chưa nghe rõ.</p>
      <p>👉 Vui lòng bấm micro và nói to, rõ hơn.</p>
    `;
    return;
  }
  quizContainer.innerHTML = "❌ Lỗi micro: " + event.error;
};

// =====================================================
// 🧠 XỬ LÝ GIỌNG NÓI
// =====================================================
function handleVoiceCommand(text) {
  quizContainer.innerHTML = `<p><strong>🎤 Bạn nói:</strong> ${text}</p>`;
  const t = text.toLowerCase();

  // ===== MÔ PHỎNG =====
  if (t.includes("mô phỏng") && t.includes("liên kết ion")) {
    simulateIonicBond(); return;
  }

  if (t.includes("mô phỏng") && t.includes("liên kết cộng")) {
    simulateCovalentBond(); return;
  }

  if (t.includes("mô phỏng") && t.includes("phản ứng")) {
    simulateReactionProcess(); return;
  }

  // ===== GIẢI THÍCH =====
  if (t.includes("cân bằng") && t.includes("phương trình")) {
    explainBalancingPTHH(); return;
  }

  if (t.includes("liên kết ion")) {
    explainIonicBond(); return;
  }

  if (t.includes("liên kết cộng")) {
    explainCovalentBond(); return;
  }

  const intent = window.detectIntent ? detectIntent(text) : null;
  if (intent && intent.type === "explain" && intent.topic === "BTKL") {
    explainBTKL(); return;
  }

  sayAndSpeak("Xin lỗi, tôi chưa hiểu yêu cầu. Bạn có thể nói lại.");
}

// =====================================================
// 📘 ĐỊNH LUẬT BTKL
// =====================================================
function explainBTKL() {
  const text = `
Trong phản ứng hóa học, tổng khối lượng các chất tham gia
luôn bằng tổng khối lượng các chất tạo thành.

Nguyên tử không tự sinh ra hay mất đi,
chúng chỉ liên kết lại theo cách khác.
  `;
  showAndSpeak("📘 Định luật bảo toàn khối lượng", text);
}

// =====================================================
// 🎞️ MÔ PHỎNG DIỄN BIẾN PHẢN ỨNG (BTKL)
// =====================================================
function simulateReactionProcess() {
  const text = `
Trong phản ứng hóa học, các liên kết cũ bị phá vỡ
và các liên kết mới được hình thành.

Số nguyên tử của mỗi nguyên tố vẫn được giữ nguyên.
Vì vậy, tổng khối lượng trước và sau phản ứng không đổi.

Đây chính là bản chất của định luật bảo toàn khối lượng.
  `;

  quizContainer.innerHTML += `
    <hr>
    <h3>🧪 Mô phỏng diễn biến phản ứng hóa học</h3>
   <img src="assets/images/simulations/Mo_phong_puhh.gif"
     style="max-width:100%;border-radius:8px;margin:10px 0;"
     onerror="this.style.display='none';">
    <p>${text.replace(/\n/g, "<br>")}</p>
  `;
  speakText(text);
}

// =====================================================
// ⚖️ CÂN BẰNG PTHH
// =====================================================
function explainBalancingPTHH() {
  const text = `
Bước 1: Viết sơ đồ phản ứng. Ví dụ: Fe + O₂ → Fe₂O₃
Bước 2: Đếm số nguyên tử.
Bước 3: Đặt hệ số phù hợp.
Bước 4: Kiểm tra lại.

Kết quả:
4 Fe + 3 O₂ → 2 Fe₂O₃
  `;
  showAndSpeak("⚖️ Cân bằng phương trình hóa học", text);
}

// =====================================================
// ⚡ LIÊN KẾT ION
// =====================================================
function explainIonicBond() {
  const text = `
Liên kết ion hình thành do sự cho và nhận electron
giữa kim loại và phi kim.
Ví dụ: Na⁺ và Cl⁻ tạo NaCl.
  `;
  showAndSpeak("⚡ Liên kết ion", text);
}

// =====================================================
// 🔗 LIÊN KẾT CỘNG HÓA TRỊ
// =====================================================
function explainCovalentBond() {
  const text = `
Liên kết cộng hóa trị hình thành khi các nguyên tử
dùng chung electron.
Ví dụ: phân tử nước H₂O.
  `;
  showAndSpeak("🔗 Liên kết cộng hóa trị", text);
}

// =====================================================
// 🎞️ MÔ PHỎNG LIÊN KẾT
// =====================================================
function simulateIonicBond() {
  const text = `
Natri nhường electron cho Clo,
tạo ion Na⁺ và Cl⁻.
Hai ion trái dấu hút nhau tạo liên kết ion.
  `;
  quizContainer.innerHTML += `
    <hr><h3>🎞️ Mô phỏng liên kết ion</h3>
    <img src="assets/images/simulations/Mo_phong_lien_ket_ion_NaCl.gif" style="max-width:100%">
    <p>${text.replace(/\n/g,"<br>")}</p>
  `;
  speakText(text);
}

function simulateCovalentBond() {
  const text = `
Các nguyên tử dùng chung electron
để tạo liên kết cộng hóa trị.
Ví dụ: H₂O.
  `;
  quizContainer.innerHTML += `
    <hr><h3>🎞️ Mô phỏng liên kết cộng hóa trị</h3>
    <img src="assets/images/simulations/Mo_phong_lien_ket_cong_hoa_tri_H2O.gif" style="max-width:100%">
    <p>${text.replace(/\n/g,"<br>")}</p>
  `;
  speakText(text);
}

// =====================================================
// 🔊 HIỂN THỊ + ĐỌC
// =====================================================
function showAndSpeak(title, content) {
  quizContainer.innerHTML += `<hr><h3>${title}</h3><p>${content.replace(/\n/g,"<br>")}</p>`;
  speakText(content);
}

function sayAndSpeak(text) {
  quizContainer.innerHTML += `<p>${text}</p>`;
  speakText(text);
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "vi-VN";
  window.speechSynthesis.speak(u);
}
