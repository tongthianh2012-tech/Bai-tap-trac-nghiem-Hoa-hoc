// ================== Phần bài tập AI: giữ nguyên logic của bạn ==================
let currentQuestions = [];
let practiceRoundByTopic = {}; // lưu vòng luyện tập theo từng chủ đề

document.getElementById("generateQuiz").addEventListener("click", () => {
  const topic = document.getElementById("topic").value;
  currentQuestions = getQuizFromAI(topic);
  renderQuiz(currentQuestions);

  document.getElementById("submitQuiz").disabled = false;
  document.getElementById("results").hidden = true;
  document.getElementById("practiceButton").hidden = true;

  // reset vòng luyện tập cho chủ đề hiện tại
  practiceRoundByTopic[topic] = 0;
});

document.getElementById("submitQuiz").addEventListener("click", () => {
  checkAnswers();
});

function renderQuiz(questions) {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
      <p><b>Câu ${index + 1}:</b> ${q.question}</p>
      ${Object.entries(q.options).map(([key, val]) =>
        `<label class="option"><input type="radio" name="q${index}" value="${key}"> ${key}. ${val}</label>`
      ).join("")}
    `;
    container.appendChild(div);
  });
}

function checkAnswers() {
  let score = 0;
  const explanations = document.getElementById("explanations");
  explanations.innerHTML = "";

  const selectedTopic = document.getElementById("topic").value;
  let hasWrong = false;

  currentQuestions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
      selected.parentElement.classList.add("correct");
    } else {
      hasWrong = true;
      if (selected) selected.parentElement.classList.add("incorrect");
    }

    const ex = document.createElement("div");
    ex.classList.add("ex-item");
    ex.innerHTML = `<b>Câu ${index + 1}:</b> ${q.explanation}`;
    explanations.appendChild(ex);
  });

  document.getElementById("scoreSummary").innerText = `🎯 Bạn đúng ${score}/${currentQuestions.length} câu`;
  document.getElementById("results").hidden = false;

  const practiceButton = document.getElementById("practiceButton");
  if (hasWrong) {
    practiceButton.hidden = false;
    practiceButton.onclick = () => {
      practiceRoundByTopic[selectedTopic] = (practiceRoundByTopic[selectedTopic] || 0) + 1;
      const round = practiceRoundByTopic[selectedTopic];

      const practiceSet = getPracticeFromAI(selectedTopic, round);
      if (practiceSet.length > 0) {
        currentQuestions = JSON.parse(JSON.stringify(practiceSet));
        const container = document.getElementById("quizContainer");
        container.innerHTML = `<h3>🔁 Luyện tập cá nhân hóa – Vòng ${round}</h3>`;
        renderQuiz(currentQuestions);

        document.getElementById("submitQuiz").disabled = false;
        practiceButton.hidden = true;
        document.getElementById("results").hidden = true;
      } else {
        practiceButton.hidden = true;
        alert("Bạn đã hoàn thành 3 vòng luyện tập cho chủ đề này!");
      }
    };
  } else {
    practiceButton.hidden = true;
    const container = document.getElementById("quizContainer");
    container.innerHTML += `<p>🎉 Bạn đã làm đúng tất cả! Không cần luyện thêm.</p>`;
  }
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
