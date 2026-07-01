
const STORAGE_KEY = "umwelttechnik_lernapp_v2_progress";
const THEME_KEY = "umwelttechnik_lernapp_v2_theme";

let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let currentId = null;
let currentPool = [];
let exam = null;

const $ = (id) => document.getElementById(id);
const now = () => Date.now();
const day = (n) => n * 24 * 60 * 60 * 1000;

function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  renderStats();
}

function defaultState(){
  return {
    seen:0,
    status:"new",
    ease:2.5,
    interval:0,
    due:0,
    last:0,
    correct:0,
    wrong:0,
    hard:0
  };
}

function getState(id){
  return progress[id] || defaultState();
}

function setState(id,state){
  progress[id] = state;
}

function categories(){
  return [...new Set(QUESTIONS.map(q => q.category))].sort();
}

function init(){
  document.documentElement.dataset.theme = localStorage.getItem(THEME_KEY) || "light";

  $("categorySelect").innerHTML =
    `<option value="all">Alle Themen</option>` +
    categories().map(c => `<option value="${c}">${c}</option>`).join("");

  $("themeBtn").onclick = toggleTheme;
  $("exportBtn").onclick = exportProgress;
  $("importBtn").onclick = () => $("importFile").click();
  $("importFile").onchange = importProgress;
  $("showBtn").onclick = showAnswer;
  $("examBtn").onclick = startExam;
  $("examStartBtn").onclick = startExam;
  $("categorySelect").onchange = nextQuestion;
  $("modeSelect").onchange = nextQuestion;

  document.querySelectorAll("[data-rate]").forEach(btn => {
    btn.onclick = () => rateCurrent(Number(btn.dataset.rate));
  });

  $("examCloseBtn").onclick = closeExam;
  $("examShowBtn").onclick = showExamAnswer;
  $("examWrongBtn").onclick = () => rateExam(false);
  $("examRightBtn").onclick = () => rateExam(true);

  renderStats();
  nextQuestion();
}

function toggleTheme(){
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem(THEME_KEY, next);
}

function filteredQuestions(){
  const cat = $("categorySelect").value;
  return QUESTIONS.filter(q => cat === "all" || q.category === cat);
}

function weightedPick(pool){
  const mode = $("modeSelect").value;
  let candidates = [...pool];

  if(mode === "due"){
    const due = candidates.filter(q => {
      const s = getState(q.id);
      return s.due && s.due <= now();
    });
    if(due.length) candidates = due;
  }

  if(mode === "weak"){
    const weak = candidates.filter(q => {
      const s = getState(q.id);
      return s.status === "weak" || s.status === "learning";
    });
    if(weak.length) candidates = weak;
  }

  if(mode === "new"){
    const fresh = candidates.filter(q => getState(q.id).seen === 0);
    if(fresh.length) candidates = fresh;
  }

  if(mode === "random"){
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  const weights = candidates.map(q => {
    const s = getState(q.id);
    let w = 1;
    if(s.seen === 0) w += 5;
    if(s.status === "weak") w += 8;
    if(s.status === "learning") w += 4;
    if(s.due && s.due <= now()) w += 6;
    if(q.level === "Klausur") w += 2;
    w += s.wrong * 2 + s.hard;
    if(s.status === "mastered") w -= 3;
    return Math.max(0.4, w);
  });

  let sum = weights.reduce((a,b) => a + b, 0);
  let r = Math.random() * sum;
  for(let i=0;i<candidates.length;i++){
    r -= weights[i];
    if(r <= 0) return candidates[i];
  }
  return candidates[0];
}

function nextQuestion(){
  currentPool = filteredQuestions();
  if(!currentPool.length) return;

  const q = weightedPick(currentPool);
  currentId = q.id;
  $("catBadge").textContent = q.category;
  $("levelBadge").textContent = q.level;
  $("typeBadge").textContent = q.type;
  $("question").textContent = q.question;
  $("answer").textContent = q.answer;
  $("answer").style.display = "none";
  $("hint").textContent = "Der Fortschritt aktualisiert sich direkt nach jeder Bewertung.";
}

function showAnswer(){
  $("answer").style.display = "block";
}

function rateCurrent(value){
  if(!currentId) return;
  applyRating(currentId, value);
  save();
  nextQuestion();
}

function applyRating(id, value){
  const s = getState(id);
  s.seen += 1;
  s.last = now();

  if(value === 0){
    s.wrong += 1;
    s.status = "weak";
    s.interval = 0.02;
    s.ease = Math.max(1.3, s.ease - 0.25);
  } else if(value === 1){
    s.hard += 1;
    s.status = "learning";
    s.interval = Math.max(0.5, s.interval * 1.2 || 0.5);
    s.ease = Math.max(1.3, s.ease - 0.1);
  } else if(value === 2){
    s.correct += 1;
    s.status = s.correct >= 2 ? "mastered" : "learning";
    s.interval = Math.max(1, s.interval * s.ease || 1);
  } else if(value === 3){
    s.correct += 1;
    s.status = "mastered";
    s.interval = Math.max(3, s.interval * (s.ease + 0.4) || 3);
    s.ease = Math.min(3.2, s.ease + 0.08);
  }

  s.due = now() + day(Math.min(21, s.interval));
  setState(id, s);
}

function masteryValue(id){
  const s = getState(id);
  if(s.status === "mastered") return 1;
  if(s.status === "learning") return 0.55;
  if(s.status === "weak") return 0.2;
  return 0;
}

function renderStats(){
  $("statTotal").textContent = QUESTIONS.length;

  let mastered = 0, due = 0;
  QUESTIONS.forEach(q => {
    const s = getState(q.id);
    if(s.status === "mastered") mastered++;
    if(s.seen > 0 && s.due <= now()) due++;
  });

  const percent = Math.round((QUESTIONS.reduce((sum,q)=>sum + masteryValue(q.id),0) / QUESTIONS.length) * 100);
  $("overallPercent").textContent = percent + "%";
  $("overallBar").style.width = percent + "%";
  $("statMastered").textContent = mastered;
  $("statDue").textContent = due;
  $("statStreak").textContent = calculateStreak() + "🔥";

  const topicStats = categories().map(cat => {
    const qs = QUESTIONS.filter(q => q.category === cat);
    const score = Math.round((qs.reduce((sum,q)=>sum + masteryValue(q.id),0) / qs.length) * 100);
    const masteredCount = qs.filter(q => getState(q.id).status === "mastered").length;
    return `
      <div class="topic">
        <div class="topic-head"><span>${cat}</span><span>${score}%</span></div>
        <div class="progress"><div style="width:${score}%"></div></div>
        <div class="topic-small">${masteredCount}/${qs.length} beherrscht</div>
      </div>
    `;
  }).join("");
  $("topicStats").innerHTML = topicStats;

  const weak = QUESTIONS
    .filter(q => ["weak","learning"].includes(getState(q.id).status))
    .sort((a,b) => (getState(b.id).wrong + getState(b.id).hard) - (getState(a.id).wrong + getState(a.id).hard))
    .slice(0,12);

  $("weakList").innerHTML = weak.length
    ? weak.map(q => {
        const s = getState(q.id);
        return `<div class="weak-item"><b>${q.question}</b><span>${q.category} · falsch/schwer: ${s.wrong + s.hard}</span></div>`;
      }).join("")
    : `<p class="hint">Noch keine schwachen Fragen markiert.</p>`;
}

function calculateStreak(){
  const days = new Set();
  Object.values(progress).forEach(s => {
    if(s.last){
      const d = new Date(s.last);
      days.add(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`);
    }
  });
  let streak = 0;
  const today = new Date();
  for(let i=0;i<365;i++){
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    if(days.has(key)) streak++;
    else if(i === 0) continue;
    else break;
  }
  return streak;
}

function exportProgress(){
  const data = JSON.stringify(progress, null, 2);
  const blob = new Blob([data], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "umwelttechnik_lernstand.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(event){
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      progress = JSON.parse(reader.result);
      save();
      nextQuestion();
      alert("Lernstand importiert.");
    }catch(e){
      alert("Import fehlgeschlagen.");
    }
  };
  reader.readAsText(file);
}

function startExam(){
  const pool = shuffle([...filteredQuestions()]).slice(0, Math.min(30, filteredQuestions().length));
  exam = {
    questions: pool,
    index:0,
    correct:0,
    errors:[]
  };
  $("examModal").hidden = false;
  renderExamQuestion();
}

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function renderExamQuestion(){
  $("examResult").innerHTML = "";
  $("examOwnAnswer").value = "";
  $("examAnswer").style.display = "none";

  if(exam.index >= exam.questions.length){
    const pct = Math.round(exam.correct / exam.questions.length * 100);
    $("examTitle").textContent = "Prüfung beendet";
    $("examProgress").textContent = `${exam.correct}/${exam.questions.length} richtig`;
    $("examQuestion").textContent = `Ergebnis: ${pct}%`;
    $("examOwnAnswer").style.display = "none";
    $("examAnswer").style.display = "block";
    $("examAnswer").innerHTML = exam.errors.length
      ? "<b>Fehleranalyse:</b><br>" + exam.errors.map(e => `• ${e.question}<br><small>${e.answer}</small>`).join("<br><br>")
      : "Sehr stark – keine Fehler.";
    $("examShowBtn").style.display = "none";
    $("examWrongBtn").style.display = "none";
    $("examRightBtn").style.display = "none";
    return;
  }

  const q = exam.questions[exam.index];
  $("examTitle").textContent = "Prüfungsmodus";
  $("examProgress").textContent = `Frage ${exam.index + 1} von ${exam.questions.length}`;
  $("examQuestion").textContent = q.question;
  $("examAnswer").textContent = q.answer;
  $("examOwnAnswer").style.display = "block";
  $("examShowBtn").style.display = "inline-flex";
  $("examWrongBtn").style.display = "inline-flex";
  $("examRightBtn").style.display = "inline-flex";
}

function showExamAnswer(){
  $("examAnswer").style.display = "block";
}

function rateExam(isRight){
  const q = exam.questions[exam.index];
  if(isRight){
    exam.correct++;
    applyRating(q.id, 2);
  }else{
    exam.errors.push(q);
    applyRating(q.id, 0);
  }
  exam.index++;
  save();
  renderExamQuestion();
}

function closeExam(){
  $("examModal").hidden = true;
  exam = null;
  $("examOwnAnswer").style.display = "block";
  $("examShowBtn").style.display = "inline-flex";
  $("examWrongBtn").style.display = "inline-flex";
  $("examRightBtn").style.display = "inline-flex";
}

document.addEventListener("DOMContentLoaded", init);
