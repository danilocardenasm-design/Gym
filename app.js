
// FITNESS COACH — Lógica de interfaz
const todayKey = new Date().toISOString().slice(0,10);
const state = {
  favorites: load("fitnessFavorites", []),
  routine: load("fitnessRoutine", []),
  favoritesOnly: false,
  workout: load("fitnessWorkout_" + todayKey, {}),
  workoutDate: todayKey,
  activeExercise: null,
  routineConfig: load("fitnessRoutineConfig", null)
};

function load(key, fallback){
  try{
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  }catch(e){ return fallback; }
}
function save(key, value){
  try{ localStorage.setItem(key, JSON.stringify(value)); }catch(e){}
}
function esc(value){
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
  }[c]));
}
function labels(values){
  return (values || []).map(v => `<span class="tag">${esc(v)}</span>`).join("");
}

function ensureWorkoutExercise(id){
  const e = EXERCISES.find(x => x.id === id);
  if(!e) return null;
  if(!state.workout[id]){
    const sets = parseInt(String(e.sets || "").match(/\d+/)?.[0] || "3", 10);
    state.workout[id] = {
      done: false,
      sets: Array.from({length: sets}, () => ({done:false, reps:"", weight:"", rpe:""})),
      notes: ""
    };
    persistWorkout();
  }
  return state.workout[id];
}
function persistWorkout(){
  save("fitnessWorkout_" + state.workoutDate, state.workout);
}
function setCount(e){
  return Math.max(1, parseInt(String(e.sets || "").match(/\d+/)?.[0] || "3", 10));
}
function repsTarget(e){
  return e.reps || "Según objetivo";
}
function workoutStats(){
  const list = state.routine.map(id => EXERCISES.find(e => e.id === id)).filter(Boolean);
  let total=0, done=0, exercisesDone=0;
  list.forEach(e=>{
    const w=ensureWorkoutExercise(e.id);
    const sets=w.sets||[];
    total += sets.length;
    done += sets.filter(s=>s.done).length;
    if(w.done || (sets.length && sets.every(s=>s.done))) exercisesDone++;
  });
  return {list,total,done,exercisesDone,exerciseTotal:list.length,percent:total?Math.round(done/total*100):0};
}
function switchTab(tab){
  document.querySelectorAll(".tabPanel").forEach(p=>p.classList.remove("active"));
  document.querySelectorAll(".tabBtn").forEach(b=>b.classList.remove("active"));
  const panel=document.getElementById(tab==="routine"?"routinePanel":"libraryPanel");
  const button=document.querySelector(`[data-tab="${tab}"]`);
  if(panel) panel.classList.add("active");
  if(button) button.classList.add("active");
  if(tab==="routine") renderRoutine();
  window.scrollTo({top:0,behavior:"smooth"});
}

function toggleSet(exId,setIndex){
  const w=ensureWorkoutExercise(exId);
  if(!w) return;
  w.sets[setIndex].done=!w.sets[setIndex].done;
  w.done=w.sets.every(s=>s.done);
  persistWorkout();
  renderRoutine();
}
function toggleExerciseDone(exId){
  const w=ensureWorkoutExercise(exId);
  if(!w) return;
  w.done=!w.done;
  w.sets.forEach(s=>s.done=w.done);
  persistWorkout();
  renderRoutine();
}

function clearWorkout(){
  if(!confirm("¿Reiniciar el progreso de hoy? Se borrarán las series marcadas, repeticiones, peso y RPE de esta sesión.")) return;
  state.workout={};
  persistWorkout();
  renderRoutine();
}
function renderRoutine(){
  const box=document.getElementById("routineContent");
  if(!box) return;
  const s=workoutStats();
  const dateLabel=new Date(state.workoutDate+"T12:00:00").toLocaleDateString("es-CO",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
  if(!s.list.length){
    box.innerHTML=`
      <div class="routineEmpty">
        <div class="emptyIcon">📋</div>
        <h2>Configura tu rutina</h2>
        <p>Antes de empezar, elige duración, número de ejercicios y foco. El coach generará una rutina aleatoria usando los ejercicios de tu biblioteca.</p>
        <button class="btn btnPrimary" onclick="openRoutineBuilder()">⚡ Crear mi rutina</button>
        <button class="btn btnSoft" onclick="switchTab('library')">← Ir a biblioteca</button>
      </div>`;
    updateRoutineBadge();
    return;
  }

  const config=state.routineConfig || {};
  box.innerHTML=`
    <div class="workoutTop">
      <div>
        <div class="eyebrow">ENTRENAMIENTO DE HOY</div>
        <h2>Mi rutina</h2>
        <p class="workoutDate">${dateLabel}${config.focusLabel ? " · "+esc(config.focusLabel) : ""}</p>
      </div>
      <div class="workoutActions">
        <button class="btn btnPrimary" onclick="openRoutineBuilder()">⚡ Nueva rutina</button>
        <button class="btn btnSoft" onclick="clearWorkout()">↻ Reiniciar</button>
      </div>
    </div>

    <div class="routineConfigSummary">
      <span>⏱️ <b>${config.duration || 30} min</b></span>
      <span>🏋️ <b>${config.exerciseCount || s.exerciseTotal} ejercicios</b></span>
      <span>🎯 <b>${esc(config.focusLabel || "Rutina general")}</b></span>
    </div>

    <div class="progressDashboard">
      <div class="progressMain">
        <div class="progressLabel"><b>Progreso de la sesión</b><strong>${s.percent}%</strong></div>
        <div class="progressTrack"><div class="progressFill" style="width:${s.percent}%"></div></div>
        <div class="progressSub">${s.done} de ${s.total} series completadas · ${s.exercisesDone} de ${s.exerciseTotal} ejercicios terminados</div>
      </div>
      <div class="progressMetric"><b>${s.done}</b><span>Series</span></div>
      <div class="progressMetric"><b>${s.exerciseTotal}</b><span>Ejercicios</span></div>
    </div>

    <div class="workoutHint">💡 <b>Seguimiento:</b> marca cada serie al terminarla. Las series y repeticiones son las recomendadas por el coach y no se editan.</div>

    <div class="workoutList">
      ${s.list.map((e,i)=>{
        const w=ensureWorkoutExercise(e.id);
        const completed=w.done || (w.sets.length && w.sets.every(x=>x.done));
        return `
        <article class="workoutExercise ${completed?"completed":""}">
          <div class="workoutExerciseHead">
            <div class="workoutNumber">${i+1}</div>
            <img src="${esc(e.image)}" alt="${esc(e.name)}">
            <div class="workoutExerciseInfo">
              <div class="eyebrow">${completed?"✓ COMPLETADO":"EJERCICIO "+String(e.id).padStart(2,"0")}</div>
              <h3>${esc(e.name)}</h3>
              <div class="tags">${labels(e.goals)}</div>
              <div class="prescription"><b>${esc(e.sets || setCount(e)+" series")}</b> · <b>${esc(e.reps || repsTarget(e))}</b> · ${esc(e.rest || "60–90 s")} descanso</div>
            </div>
            <div class="workoutHeadBtns">
              <button class="mini" onclick="openExercise(${e.id})">Ficha</button>
              <button class="mini ${completed?"doneBtn":""}" onclick="toggleExerciseDone(${e.id})">${completed?"✓ Hecho":"Marcar ejercicio"}</button>
              <button class="mini miniFav" onclick="removeFromRoutine(${e.id})">×</button>
            </div>
          </div>

          <div class="setsHeader simple">
            <span>Serie</span><span>Realizada</span><span>Repeticiones objetivo</span>
          </div>
          <div class="setsGrid simple">
            ${w.sets.map((set,si)=>`
              <div class="setRow simple ${set.done?"setDone":""}">
                <b>${si+1}</b>
                <button class="setCheck" onclick="toggleSet(${e.id},${si})" aria-label="Marcar serie ${si+1}">${set.done?"✓":"○"}</button>
                <strong>${esc(e.reps || repsTarget(e) || "Según ficha")}</strong>
              </div>`).join("")}
          </div>
        </article>`;
      }).join("")}
    </div>`;
  updateRoutineBadge();
}
function matches(e){
  const q = document.getElementById("search").value.toLowerCase().trim();
  const goal = document.getElementById("goal").value;
  const level = document.getElementById("level").value;
  const equipment = document.getElementById("equipment").value;
  if(state.favoritesOnly && !state.favorites.includes(e.id)) return false;
  if(q){
    const haystack = JSON.stringify(e).toLowerCase();
    if(!haystack.includes(q)) return false;
  }
  if(goal && !(e.goals || []).includes(goal)) return false;
  if(level && e.level !== level) return false;
  if(equipment && e.equipment !== equipment) return false;
  return true;
}
function card(e){
  const fav = state.favorites.includes(e.id);
  return `
  <article class="card">
    <img class="cardImage" src="${esc(e.image)}" alt="${esc(e.name)}" loading="lazy"
      onerror="this.onerror=null;this.alt='No se encontró ${esc(e.image)}'">
    <div class="cardBody">
      <div class="eyebrow">Ejercicio ${String(e.id).padStart(2,"0")} · Página ${e.sourcePage}</div>
      <div class="cardTitle">${esc(e.name)}</div>
      <div class="tags">${labels(e.goals)}</div>
      <div class="meta">
        <div class="metaBox"><small>Series</small><b>${esc(e.sets || "Editar")}</b></div>
        <div class="metaBox"><small>Repeticiones</small><b>${esc(e.reps || "Editar")}</b></div>
        <div class="metaBox"><small>Nivel</small><b>${esc(e.level)}</b></div>
        <div class="metaBox"><small>Material</small><b>${esc(e.equipment)}</b></div>
      </div>
    </div>
    <div class="cardActions">
      <button class="mini" onclick="openExercise(${e.id})">Ver ficha</button>
      <button class="mini miniFav" onclick="toggleFavorite(${e.id})">${fav ? "★" : "☆"}</button>
    </div>
  </article>`;
}
function render(){
  const list = EXERCISES.filter(matches);
  document.getElementById("count").textContent = list.length;
  document.getElementById("grid").innerHTML = list.length
    ? list.map(card).join("")
    : `<div class="empty"><b>No hay ejercicios con estos filtros.</b><br>Prueba otra búsqueda.</div>`;
}
function toggleFavorite(id){
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter(x => x !== id)
    : [...state.favorites, id];
  save("fitnessFavorites", state.favorites);
  render();
}
function toggleFavorites(){
  state.favoritesOnly = !state.favoritesOnly;
  render();
}
function addToRoutine(id){
  if(!state.routine.includes(id)){
    state.routine.push(id);
    save("fitnessRoutine", state.routine);
  }
  ensureWorkoutExercise(id);
  toast("Ejercicio añadido a la rutina");
  switchTab("routine");
}
function removeFromRoutine(id){
  state.routine = state.routine.filter(x => x !== id);
  save("fitnessRoutine", state.routine);
  renderRoutine();
}
function openExercise(id){
  const e = EXERCISES.find(x => x.id === id);
  if(!e) return;
  document.getElementById("modal").innerHTML = `
    <div class="modalGrid">
      <div class="modalImage">
        <img src="${esc(e.image)}" alt="${esc(e.name)}"
          onerror="this.onerror=null;this.alt='No se encontró ${esc(e.image)}'">
      </div>
      <div class="modalBody">
        <button class="close" onclick="closeModal()">×</button>
        <div class="eyebrow">Ejercicio ${String(e.id).padStart(2,"0")} · Página ${e.sourcePage}</div>
        <h2>${esc(e.name)}</h2>
        <div class="tags">${labels(e.goals)}</div>
        <div class="meta">
          <div class="metaBox"><small>Series</small><b>${esc(e.sets || "Editar")}</b></div>
          <div class="metaBox"><small>Repeticiones</small><b>${esc(e.reps || "Editar")}</b></div>
          <div class="metaBox"><small>Descanso</small><b>${esc(e.rest || "Editar")}</b></div>
          <div class="metaBox"><small>Material</small><b>${esc(e.equipment)}</b></div>
        </div>
        <div class="section"><h3>Músculos</h3><p>${esc((e.muscles || []).join(", ") || "Editar en js/exercises.js")}</p></div>
        <div class="section"><h3>Técnica</h3><p>${esc(e.technique || "Añade aquí las indicaciones técnicas.")}</p></div>
        <div class="section"><h3>Errores frecuentes</h3><p>${esc(e.commonMistakes || "Añade aquí los errores frecuentes.")}</p></div>
        <div class="section"><h3>Progresión</h3><p>${esc(e.progression || "Añade aquí la progresión.")}</p></div>
        <div class="section"><h3>Notas</h3><p>${esc(e.notes || "Campo editable.")}</p></div>
        <div style="margin-top:16px">
          <button class="btn btnSoft" onclick="addToRoutine(${e.id})">＋ Añadir a mi rutina</button>
        </div>
      </div>
    </div>`;
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}
function closeModal(){
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "";
}
function openRoutineBuilder(){
  const goals = [...new Set(EXERCISES.flatMap(e => e.goals || []))].sort();
  const muscles = [...new Set(EXERCISES.flatMap(e => e.muscles || []))].sort();

  const options = goals.map(g => `<label class="choiceChip"><input type="checkbox" name="routineGoal" value="${esc(g)}"><span>${esc(g)}</span></label>`).join("");
  const muscleOptions = muscles.map(m => `<option value="${esc(m)}">${esc(m)}</option>`).join("");

  document.getElementById("modal").innerHTML = `
    <div class="modalBody routineBuilder">
      <button class="close" onclick="closeModal()">×</button>
      <div class="eyebrow">CREADOR DE RUTINA</div>
      <h2>¿Cómo quieres entrenar hoy?</h2>
      <p class="builderIntro">Selecciona duración, cantidad de ejercicios y foco. El sistema escogerá ejercicios aleatorios que coincidan con tus filtros. Las series y repeticiones se mantienen en la prescripción del ejercicio.</p>

      <div class="builderGrid">
        <section class="builderSection">
          <label class="builderLabel">⏱️ ¿Cuánto tiempo quieres entrenar?</label>
          <div class="durationGrid">
            ${[30,60,90,120].map(v=>`
              <label class="durationOption">
                <input type="radio" name="routineDuration" value="${v}" ${v===60?"checked":""}>
                <span><b>${v}</b><small>minutos</small></span>
              </label>`).join("")}
          </div>
          <p class="builderHelp">A mayor duración, el sistema puede ampliar la selección de ejercicios o trabajar rondas adicionales sin cambiar las repeticiones sugeridas.</p>
        </section>

        <section class="builderSection">
          <label class="builderLabel">🏋️ ¿Cuántos ejercicios quieres?</label>
          <select id="routineExerciseCount" class="builderSelect">
            ${[3,4,5,6,7,8,9,10,12].map(v=>`<option value="${v}" ${v===6?"selected":""}>${v} ejercicios</option>`).join("")}
          </select>
          <p class="builderHelp">La cantidad solicitada es el punto de partida; la duración puede requerir ampliar la sesión cuando haya ejercicios compatibles.</p>
        </section>

        <section class="builderSection builderFull">
          <label class="builderLabel">🎯 ¿Cuál es el foco de la rutina?</label>
          <div class="choiceGrid">
            <label class="choiceChip"><input type="radio" name="routineFocusMode" value="all" checked><span>Rutina general</span></label>
            ${options}
          </div>
        </section>

        <section class="builderSection builderFull">
          <label class="builderLabel">💪 ¿Quieres priorizar un músculo?</label>
          <select id="routineMuscle" class="builderSelect">
            <option value="">Sin prioridad muscular</option>
            ${muscleOptions}
          </select>
          <p class="builderHelp">La prioridad muscular se combina con el foco seleccionado.</p>
        </section>
      </div>

      <div class="builderFooter">
        <button class="btn btnSoft" onclick="closeModal()">Cancelar</button>
        <button class="btn btnPrimary" onclick="buildRoutineFromForm()">⚡ Generar rutina</button>
      </div>
    </div>`;
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function buildRoutineFromForm(){
  const duration = parseInt(document.querySelector('input[name="routineDuration"]:checked')?.value || "60",10);
  const count = parseInt(document.getElementById("routineExerciseCount")?.value || "6",10);
  const focusMode = document.querySelector('input[name="routineFocusMode"]:checked')?.value || "all";
  const selectedGoals = [...document.querySelectorAll('input[name="routineGoal"]:checked')].map(x=>x.value);
  const muscle = document.getElementById("routineMuscle")?.value || "";

  let pool = EXERCISES.slice();

  if(focusMode !== "all" && selectedGoals.length){
    pool = pool.filter(e => selectedGoals.some(g => (e.goals || []).includes(g)));
  }

  if(muscle){
    const muscular = pool.filter(e => (e.muscles || []).includes(muscle));
    if(muscular.length >= Math.min(count,3)) pool = muscular;
  }

  if(!pool.length){
    alert("No hay ejercicios suficientes para esos filtros. Prueba otro foco o elimina la prioridad muscular.");
    return;
  }

  pool.sort(() => Math.random() - 0.5);

  const durationTarget = ({30:4,60:6,90:8,120:10})[duration] || 6;
  const desired = Math.max(count, durationTarget);
  const selected = [];
  const used = new Set();

  // Primero respetamos la cantidad solicitada y después ampliamos por duración.
  for(const e of pool){
    if(selected.length >= desired) break;
    if(!used.has(e.id)){
      selected.push(e);
      used.add(e.id);
    }
  }

  // Si hay menos ejercicios compatibles que el objetivo, no inventamos ejercicios.
  // Se mantiene la selección disponible y se pueden hacer rondas adicionales.
  const rounds = selected.length && selected.length < desired ? Math.ceil(desired / selected.length) : 1;

  state.routine = selected.map(e=>e.id);
  state.routineConfig = {
    duration,
    exerciseCount: selected.length,
    requestedExerciseCount: count,
    rounds,
    goals: selectedGoals,
    muscle,
    focusLabel: muscle || (selectedGoals.length ? selectedGoals.join(", ") : "Rutina general")
  };

  save("fitnessRoutine", state.routine);
  save("fitnessRoutineConfig", state.routineConfig);
  state.routine.forEach(id => ensureWorkoutExercise(id));

  closeModal();
  switchTab("routine");
  toast("Rutina generada con filtros y duración seleccionados");
}

function showRoutine(){
  switchTab("routine");
}

function updateRoutineBadge(){
  const badge=document.getElementById("routineBadge");
  if(badge) badge.textContent=state.routine.length || "";
}
function showRoutine(){
  switchTab("routine");
}
function toast(message){
  const t = document.getElementById("toast");
  t.textContent = message; t.style.display = "block";
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => t.style.display = "none", 1800);
}
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });
render();
renderRoutine();
