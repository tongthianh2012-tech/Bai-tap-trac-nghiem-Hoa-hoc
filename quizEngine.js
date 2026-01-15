/* =========================================================
   quizEngine.js
   - Sinh bài tập từ questionTemplates.json
   ========================================================= */

let QUESTION_DATA = null;

// ===== LOAD DỮ LIỆU =====
fetch("data/questionTemplates.json")
  .then(res => res.json())
  .then(data => {
    QUESTION_DATA = data;
    console.log("📚 Đã load dữ liệu câu hỏi");
  })
  .catch(err => console.error("Lỗi load questionTemplates.json", err));

// ===== SINH BÀI TẬP =====
function generateDynamicQuiz(topic, count = 5) {
  if (!QUESTION_DATA || !QUESTION_DATA[topic]) {
    alert("Chưa có dữ liệu cho chủ đề này");
    return;
  }

  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  const questions = QUESTION_DATA[topic]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `
      <p><b>Câu ${index + 1}:</b> ${q.question}</p>
      ${q.options.map((opt, i) =>
        `<button class="btn option" data-correct="${i === q.answer}">${opt}</button>`
      ).join("")}
    `;

    div.querySelectorAll(".option").forEach(btn => {
      btn.onclick = () => {
        div.querySelectorAll(".option").forEach(b => b.disabled = true);
        btn.classList.add(btn.dataset.correct === "true" ? "correct" : "incorrect");
      };
    });

    container.appendChild(div);
  });
}

// ===== EXPORT =====
window.generateDynamicQuiz = generateDynamicQuiz;
