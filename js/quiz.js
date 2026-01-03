let currentQuestions = [];
let wrongQuestions = [];
let practiceRound = 0;
const MAX_PRACTICE_ROUND = 3;

// ================== HÀM TRỘN MẢNG ==================
function shuffleArray(arr) {
  return arr
    .map(v => ({ v, s: Math.random() }))
    .sort((a, b) => a.s - b.s)
    .map(({ v }) => v);
}

// ================== TẠO BÀI ==================
document.getElementById("generateQuiz").onclick = () => {
  const topic = document.getElementById("topic").value;

  currentQuestions = shuffleArray(getQuizFromAI(topic));
  wrongQuestions = [];
  practiceRound = 0;

  renderQuiz(currentQuestions);

  document.getElementById("submitQuiz").disabled = false;
  document.getElementById("results").hidden = true;
};

// ================== HIỂN THỊ CÂU HỎI ==================
function renderQuiz(questions) {
  const box = document.getElementById("quizContainer");
  box.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    div.dataset.index = i;

    div.innerHTML = `<p><b>Câu ${i + 1} (${q.level}):</b> ${q.question}</p>`;

    // ===== CHỌN ĐÁP ÁN =====
    if (q.type === "choice") {
      const options = shuffleArray(
        q.options.map((opt, idx) => ({
          text: opt,
          index: idx
        }))
      );

      options.forEach(opt => {
        div.innerHTML += `
          <label class="option">
            <input type="radio" name="q${i}" value="${opt.index}">
            ${opt.text}
          </label><br>`;
      });
    }

    // ===== ĐIỀN KHUYẾT =====
    if (q.type === "fill_blank") {
      div.innerHTML += `<input type="text" id="q${i}" />`;
    }

    // ===== GHÉP ĐÔI =====
    if (q.type === "match") {
      div.innerHTML += `
        <div><b>Cột A</b><br>${q.left.join("<br>")}</div>
        <div><b>Cột B</b><br>${q.right.join("<br>")}</div>
        <input type="text" id="q${i}" placeholder="VD: 1-b,2-a" />
      `;
    }

    box.appendChild(div);
  });
}

// ================== NỘP BÀI ==================
document.getElementById("submitQuiz").onclick = () => {
  checkAnswers();
};

// ================== CHẤM BÀI ==================
function checkAnswers() {
  let correct = 0;
  wrongQuestions = [];

  currentQuestions.forEach((q, i) => {
    let ok = false;

    // ===== CHOICE =====
    if (q.type === "choice") {
      const sel = document.querySelector(`input[name="q${i}"]:checked`);
      if (sel && Number(sel.value) === q.answer) ok = true;
      if (sel) sel.parentElement.style.background = ok ? "#4CAF50" : "#f44336";
    }

    // ===== FILL BLANK =====
    if (q.type === "fill_blank") {
      const input = document.getElementById(`q${i}`);
      const val = input.value.trim().toLowerCase();
      ok = val === q.answer;
      input.style.background = ok ? "#4CAF50" : "#f44336";
    }

    // ===== MATCH =====
    if (q.type === "match") {
      const input = document.getElementById(`q${i}`);
      const val = input.value.replace(/\s/g, "");
      ok = JSON.stringify(val.split(",")) === JSON.stringify(q.answer);
      input.style.background = ok ? "#4CAF50" : "#f44336";
    }

    if (ok) {
      correct++;
    } else {
      wrongQuestions.push(q);
    }
  });

  const total = currentQuestions.length;
  const wrong = total - correct;

  // ===== HIỂN THỊ KẾT QUẢ =====
  document.getElementById("scoreSummary").innerHTML = `
    <p>✅ Đúng: <b>${correct}</b> / ${total}</p>
    <p>❌ Sai: <b>${wrong}</b> / ${total}</p>
    <p>🔁 Vòng luyện: ${practiceRound} / ${MAX_PRACTICE_ROUND}</p>
  `;
  document.getElementById("results").hidden = false;

  // ===== NÚT LUYỆN TIẾP =====
  const btn = document.getElementById("practiceButton");
  if (wrong > 0 && practiceRound < MAX_PRACTICE_ROUND) {
    btn.hidden = false;
    btn.onclick = startPractice;
  } else {
    btn.hidden = true;
  }
}

// ================== LUYỆN TIẾP ==================
function startPractice() {
  practiceRound++;

  // 👉 Luyện LẠI TOÀN BỘ câu sai
  currentQuestions = shuffleArray(wrongQuestions);
  wrongQuestions = [];

  renderQuiz(currentQuestions);
  document.getElementById("results").hidden = true;
}
// ================== Phần Đố vui: CHỈ SỬA để chia 15 câu thành 3 vòng ==================
const funQuestions = [
  { question: "Tại sao khi nấu canh cua lại thấy váng nổi lên?", options: ["Do protein đông tụ","Do dầu ăn nổi lên","Do muối kết tủa","Do nước bốc hơi"], answer: [0], explanation: "Protein trong cua đông lại khi gặp nhiệt, tạo thành váng nổi lên." },
  { question: "Vì sao khi bóc hành lại chảy nước mắt?", options: ["Do hành chứa axit mạnh","Do hành giải phóng khí gây kích ứng","Do hành có tính kiềm","Do hành hút nước mắt"], answer: [1], explanation: "Hành giải phóng khí sulfur gây kích ứng mắt khi cắt." },
  { question: "Loại khí nào làm bánh mì nở khi nướng?", options: ["CO₂","O₂","N₂","H₂"], answer: [0], explanation: "CO₂ sinh ra từ men giúp bánh nở khi nướng." },
  { question: "Vì sao nước chanh giúp làm sạch vết bẩn trên kim loại?", options: ["Do tính axit","Do tính kiềm","Do tính oxi hóa","Do tính tẩy rửa"], answer: [0], explanation: "Axit citric trong chanh phản ứng với oxit kim loại, làm sạch bề mặt." },
  { question: "Chất nào giúp khử mùi hôi trong tủ lạnh?", options: ["Muối","Giấm","Than hoạt tính","Đường"], answer: [2], explanation: "Than hoạt tính hấp thụ mùi hiệu quả nhờ cấu trúc xốp." },
  { question: "Vì sao khi đốt giấy lại có mùi khét?", options: ["Do giấy chứa lưu huỳnh","Do giấy bị oxi hóa","Do cellulose cháy sinh ra hợp chất hữu cơ","Do giấy có mùi thơm"], answer: [2], explanation: "Cellulose cháy sinh ra các hợp chất hữu cơ có mùi khét." },
  { question: "Chất nào trong nước ngọt gây sủi bọt?", options: ["CO₂ hòa tan","O₂ hòa tan","H₂O","Cồn"], answer: [0], explanation: "CO₂ hòa tan tạo bọt khi mở nắp do giảm áp suất." },
  { question: "Vì sao khi rán cá lại có mùi tanh bay lên?", options: ["Do protein bay hơi","Do lipid bị phân hủy","Do amin bay hơi","Do nước bốc hơi"], answer: [2], explanation: "Amin trong cá bay hơi khi đun nóng gây mùi tanh." },
  { question: "Chất nào giúp làm mềm nước cứng?", options: ["NaCl","CaCO₃","Na₂CO₃","MgCl₂"], answer: [2], explanation: "Na₂CO₃ kết tủa ion Ca²⁺ và Mg²⁺ làm mềm nước." },
  { question: "Vì sao khi đun nước lại thấy cặn trắng?", options: ["Do muối ăn kết tủa","Do canxi và magie kết tủa","Do nước bay hơi","Do kim loại tan ra"], answer: [1], explanation: "Ion Ca²⁺ và Mg²⁺ kết tủa khi đun nóng tạo cặn trắng." },
  { question: "Chất nào trong trứng giúp tạo kem mịn?", options: ["Protein","Lipid","Vitamin","Nước"], answer: [0], explanation: "Protein trong lòng trắng trứng tạo cấu trúc kem mịn khi đánh." },
  { question: "Vì sao khi nướng thịt lại có mùi thơm đặc trưng?", options: ["Do phản ứng Maillard","Do thịt cháy","Do nước bay hơi","Do muối phản ứng"], answer: [0], explanation: "Phản ứng Maillard giữa amino acid và đường tạo mùi thơm đặc trưng." },
  { question: "Chất nào giúp bảo quản thực phẩm lâu hơn?", options: ["Axit axetic","Nước","Đường","Muối"], answer: [3], explanation: "Muối làm giảm hoạt động vi sinh vật, giúp bảo quản thực phẩm." },
  { question: "Vì sao khi giặt đồ lại cần xà phòng?", options: ["Xà phòng làm mềm vải","Xà phòng tạo bọt","Xà phòng phá vỡ liên kết dầu mỡ","Xà phòng có mùi thơm"], answer: [2], explanation: "Xà phòng có phần kỵ nước giúp tách dầu mỡ khỏi vải." },
  { question: "Chất nào trong thuốc tẩy giúp làm trắng vải?", options: ["NaCl","NaOH","NaClO","Na₂CO₃"], answer: [2], explanation: "NaClO có tính oxi hóa mạnh giúp làm trắng vải." }
];

let currentRound = 0;
const questionsPerRound = 5;

function renderFunQuizRound() {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  const start = currentRound * questionsPerRound;
  const end = start + questionsPerRound;
  const roundQuestions = funQuestions.slice(start, end);

  roundQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<strong>Câu ${start + index + 1}:</strong> ${q.question}`;

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "btn option";
      btn.textContent = opt;
      btn.onclick = () => {
        if (q.answer.includes(i)) {
          btn.classList.add("correct");
          btn.textContent += " 👏 Chính xác!";
          const clapSound = document.getElementById("clapSound");
          if (clapSound) { clapSound.currentTime = 0; clapSound.play(); }
        } else {
          btn.classList.add("incorrect");
          btn.textContent += " 😅 Ê sai rồi!";
          const ehSound = document.getElementById("ehSound");
          if (ehSound) { ehSound.currentTime = 0; ehSound.play(); }
        }
      };
      div.appendChild(btn);
    });

    container.appendChild(div);
  });

  // Nút chuyển vòng
  if (end < funQuestions.length) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "👉 Tiếp tục vòng " + (currentRound + 2);
    nextButton.className = "btn next-round";
    nextButton.onclick = () => {
      currentRound++;
      renderFunQuizRound();
    };
    container.appendChild(nextButton);
  } else {
    const finishMsg = document.createElement("p");
    finishMsg.textContent = "🎉 Bạn đã hoàn thành toàn bộ 15 câu!";
    container.appendChild(finishMsg);
  }
}

document.getElementById("funQuiz").addEventListener("click", () => {
  currentRound = 0;
  renderFunQuizRound();
});
