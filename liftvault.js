const STORE_KEY = "liftvault.state.v1";
const NAV_ITEMS = [
  ["dashboard", "Home", "i-home"],
  ["logger", "Log", "i-log"],
  ["routines", "Routines", "i-routine"],
  ["library", "Library", "i-library"],
  ["progress", "Progress", "i-chart"],
  ["body", "Body", "i-body"],
  ["feed", "Feed", "i-feed"],
  ["settings", "Settings", "i-settings"]
];
const BAR_COLORS = ["teal", "blue", "coral", "amber", "violet"];
const BODY_METRICS = [
  { key: "weight", label: "Weight", unit: "kg / lb", group: "Main scan", tone: "blue" },
  { key: "height", label: "Height", unit: "cm / in", group: "Main scan", tone: "blue" },
  { key: "bodyFat", label: "Body fat", unit: "%", group: "Main scan", tone: "peach" },
  { key: "bodyFatMass", label: "Body fat mass", unit: "kg / lb", group: "Main scan", tone: "peach" },
  { key: "muscleMass", label: "Muscle mass", unit: "kg / lb", group: "Main scan", tone: "green" },
  { key: "skeletalMuscleMass", label: "Skeletal muscle mass", unit: "kg / lb", group: "Main scan", tone: "green" },
  { key: "leanBodyMass", label: "Lean body mass", unit: "kg / lb", group: "Composition" },
  { key: "fatFreeMass", label: "Fat-free mass", unit: "kg / lb", group: "Composition" },
  { key: "softLeanMass", label: "Soft lean mass", unit: "kg / lb", group: "Composition" },
  { key: "bodyCellMass", label: "Body cell mass", unit: "kg / lb", group: "Composition" },
  { key: "totalBodyWater", label: "Total body water", unit: "% or L", group: "Water / tissue" },
  { key: "intracellularWater", label: "Intracellular water", unit: "L", group: "Water / tissue" },
  { key: "extracellularWater", label: "Extracellular water", unit: "L", group: "Water / tissue" },
  { key: "ecwRatio", label: "ECW/TBW ratio", unit: "ratio", group: "Water / tissue" },
  { key: "protein", label: "Protein", unit: "kg / lb", group: "Water / tissue" },
  { key: "minerals", label: "Minerals", unit: "kg / lb", group: "Water / tissue" },
  { key: "boneMineral", label: "Bone mineral", unit: "kg / lb", group: "Water / tissue" },
  { key: "bmi", label: "BMI", unit: "score", group: "Metabolism / risk" },
  { key: "bmr", label: "BMR", unit: "kcal", group: "Metabolism / risk" },
  { key: "visceralFat", label: "Visceral fat level", unit: "level", group: "Metabolism / risk", tone: "peach" },
  { key: "visceralFatArea", label: "Visceral fat area", unit: "cm2", group: "Metabolism / risk", tone: "peach" },
  { key: "waistHipRatio", label: "Waist-hip ratio", unit: "ratio", group: "Metabolism / risk" },
  { key: "metabolicAge", label: "Metabolic age", unit: "years", group: "Metabolism / risk" },
  { key: "bodyScore", label: "Body score", unit: "points", group: "Metabolism / risk" },
  { key: "physiqueRating", label: "Physique rating", unit: "rating", group: "Metabolism / risk" },
  { key: "obesityDegree", label: "Obesity degree", unit: "%", group: "Metabolism / risk" },
  { key: "targetWeight", label: "Target weight", unit: "kg / lb", group: "Control targets" },
  { key: "weightControl", label: "Weight control", unit: "kg / lb", group: "Control targets" },
  { key: "fatControl", label: "Fat control", unit: "kg / lb", group: "Control targets", tone: "peach" },
  { key: "muscleControl", label: "Muscle control", unit: "kg / lb", group: "Control targets", tone: "green" },
  { key: "waist", label: "Waist", unit: "cm / in", group: "Circumference" },
  { key: "hips", label: "Hips", unit: "cm / in", group: "Circumference" },
  { key: "chest", label: "Chest", unit: "cm / in", group: "Circumference" },
  { key: "leftArm", label: "Left arm", unit: "cm / in", group: "Circumference" },
  { key: "rightArm", label: "Right arm", unit: "cm / in", group: "Circumference" },
  { key: "leftThigh", label: "Left thigh", unit: "cm / in", group: "Circumference" },
  { key: "rightThigh", label: "Right thigh", unit: "cm / in", group: "Circumference" },
  { key: "leftArmLean", label: "Left arm lean", unit: "kg / lb", group: "Segmental lean" },
  { key: "rightArmLean", label: "Right arm lean", unit: "kg / lb", group: "Segmental lean" },
  { key: "trunkLean", label: "Trunk lean", unit: "kg / lb", group: "Segmental lean" },
  { key: "leftLegLean", label: "Left leg lean", unit: "kg / lb", group: "Segmental lean" },
  { key: "rightLegLean", label: "Right leg lean", unit: "kg / lb", group: "Segmental lean" },
  { key: "leftArmFat", label: "Left arm fat", unit: "kg / lb", group: "Segmental fat" },
  { key: "rightArmFat", label: "Right arm fat", unit: "kg / lb", group: "Segmental fat" },
  { key: "trunkFat", label: "Trunk fat", unit: "kg / lb", group: "Segmental fat" },
  { key: "leftLegFat", label: "Left leg fat", unit: "kg / lb", group: "Segmental fat" },
  { key: "rightLegFat", label: "Right leg fat", unit: "kg / lb", group: "Segmental fat" },
  { key: "rightArmImpedance", label: "Right arm impedance", unit: "ohms", group: "Impedance" },
  { key: "leftArmImpedance", label: "Left arm impedance", unit: "ohms", group: "Impedance" },
  { key: "trunkImpedance", label: "Trunk impedance", unit: "ohms", group: "Impedance" },
  { key: "rightLegImpedance", label: "Right leg impedance", unit: "ohms", group: "Impedance" },
  { key: "leftLegImpedance", label: "Left leg impedance", unit: "ohms", group: "Impedance" }
];
const BODY_TREND_DEFAULT = "weight";
const PERSONAL_BASELINE_ID = "metric_meso_body_scan_2026_08_24";
const PERSONAL_BASELINE_SCAN = {
  id: PERSONAL_BASELINE_ID,
  date: "2026-08-24T12:00:00",
  machine: "Body composition receipt",
  notes: "Imported from receipt photos, then personalized with current weight 53 kg and height 169 cm.",
  weight: "53",
  height: "169",
  bodyFat: "22.9",
  bodyFatMass: "12.1",
  leanBodyMass: "40.9",
  fatFreeMass: "40.9",
  skeletalMuscleMass: "36.6",
  bmi: "18.6",
  waistHipRatio: "0.85",
  visceralFat: "7",
  bmr: "1206.4",
  leftArmLean: "1.8",
  rightArmLean: "1.9",
  trunkLean: "18.7",
  leftLegLean: "7.0",
  rightLegLean: "7.2",
  leftArmFat: "0.8",
  rightArmFat: "0.7",
  trunkFat: "5.2",
  leftLegFat: "2.1",
  rightLegFat: "2.1",
  muscleControl: "15.7",
  fatControl: "1.9",
  bodyScore: "69",
  metabolicAge: "31"
};
const GAIN_PLAN = {
  id: "meso_month_1_lean_gain",
  title: "Month 1 Lean Gain",
  subtitle: "Controlled weight gain with muscle-first training",
  monthGoal: "54.0-54.5 kg",
  routineIds: ["rt_meso_lower_a", "rt_meso_upper_a", "rt_meso_lower_b", "rt_meso_upper_b"],
  schedule: [
    { day: "Mon", label: "Lower A", routineId: "rt_meso_lower_a", focus: "Squat, hinge, left-leg balance" },
    { day: "Tue", label: "Upper A", routineId: "rt_meso_upper_a", focus: "Chest, back, arms" },
    { day: "Thu", label: "Lower B", routineId: "rt_meso_lower_b", focus: "Glutes, quads, unilateral legs" },
    { day: "Sat", label: "Upper B", routineId: "rt_meso_upper_b", focus: "Back width, shoulders, arms" }
  ],
  weeks: [
    { label: "Week 1", title: "Baseline", detail: "Use RPE 7, stop with 2-3 reps in reserve, record every set." },
    { label: "Week 2", title: "Add Reps", detail: "Add 1 rep per set where form stayed clean in Week 1." },
    { label: "Week 3", title: "Add Load", detail: "When you hit the top of the rep range, add 2.5-5% next session." },
    { label: "Week 4", title: "Lock In", detail: "Keep volume steady, push only final sets to RPE 8-9, then rescan." }
  ],
  priorities: [
    "Protein daily, not just after training",
    "Small surplus, not a dirty bulk",
    "Start left-side unilateral sets first",
    "Walk 20-30 minutes on non-lifting days"
  ]
};

let state = loadState();
let currentView = "dashboard";
let deferredInstallPrompt = null;
let timerInterval = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function icon(id) {
  return `<svg aria-hidden="true"><use href="#${id}"></use></svg>`;
}

function uid(prefix) {
  if (window.crypto && crypto.randomUUID) return `${prefix}_${crypto.randomUUID()}`;
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toNumber(value) {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) ? n : null;
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function formatDate(dateValue) {
  return new Date(dateValue).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function formatDateTime(dateValue) {
  return new Date(dateValue).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

function formatDuration(seconds) {
  const safe = Math.max(0, Math.round(seconds || 0));
  const h = Math.floor(safe / 3600);
  const m = Math.floor((safe % 3600) / 60);
  const s = safe % 60;
  if (h) return `${h}h ${String(m).padStart(2, "0")}m`;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function saveState() {
  state.updatedAt = new Date().toISOString();
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    const status = $("#syncStatus");
    if (status) status.textContent = "Saved on this device";
  } catch (error) {
    toast("Storage is full", "Export a backup or remove large photos.", "danger");
  }
}

function loadState() {
  const seeded = seedState();
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return seeded;
    const saved = JSON.parse(raw);
    return normalizeState(saved, seeded);
  } catch {
    return seeded;
  }
}

function normalizeState(saved, seeded) {
  const source = saved || {};
  const next = Object.assign({}, seeded, source);
  next.profile = Object.assign({}, seeded.profile, source.profile || {});
  next.settings = Object.assign({}, seeded.settings, source.settings || {});
  next.exercises = Array.isArray(source.exercises) ? source.exercises : [];
  next.routines = Array.isArray(source.routines) ? source.routines : [];
  next.workouts = Array.isArray(source.workouts) ? source.workouts : [];
  next.bodyMetrics = Array.isArray(source.bodyMetrics) ? source.bodyMetrics : [];
  next.photos = Array.isArray(source.photos) ? source.photos : [];
  next.importedShares = Array.isArray(source.importedShares) ? source.importedShares : [];
  next.active = source.active || null;

  if (!source.profile || !source.profile.name || source.profile.name === "You") next.profile.name = "Meso";
  if (!source.profile || !source.profile.goal || source.profile.goal === "Build strength and muscle") next.profile.goal = "Gain weight and muscle with a controlled surplus";
  if (!source.profile || !source.profile.weeklyTarget || source.profile.weeklyTarget < 4) next.profile.weeklyTarget = 4;

  const byId = new Map(next.exercises.map((exercise) => [exercise.id, exercise]));
  seeded.exercises.forEach((exercise) => {
    if (!byId.has(exercise.id)) next.exercises.push(exercise);
  });

  const routineIds = new Set(next.routines.map((routineItem) => routineItem.id));
  seeded.routines.forEach((routineItem) => {
    if (!routineIds.has(routineItem.id)) next.routines.push(routineItem);
  });

  const baseline = next.bodyMetrics.find((entry) => entry.id === PERSONAL_BASELINE_ID);
  if (baseline) {
    Object.assign(baseline, PERSONAL_BASELINE_SCAN);
  } else {
    next.bodyMetrics.unshift(Object.assign({}, PERSONAL_BASELINE_SCAN));
  }
  return next;
}

function seedState() {
  return {
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    profile: {
      name: "Meso",
      goal: "Gain weight and muscle with a controlled surplus",
      weeklyTarget: 4
    },
    settings: {
      unit: "kg",
      restSeconds: 120,
      privacy: "private"
    },
    exercises: seedExercises(),
    routines: seedRoutines(),
    workouts: [],
    bodyMetrics: [Object.assign({}, PERSONAL_BASELINE_SCAN)],
    photos: [],
    importedShares: [],
    active: null,
    timer: null
  };
}

function seedExercises() {
  return [
    ex("ex_back_squat", "Barbell Back Squat", "Quads", ["Glutes", "Core"], "Barbell", "Weighted Reps", ["Brace before you unlock the bar.", "Knees track with toes.", "Keep pressure through the full foot.", "Stand up without letting the hips shoot back."]),
    ex("ex_front_squat", "Front Squat", "Quads", ["Upper Back", "Core"], "Barbell", "Weighted Reps", ["Keep elbows high.", "Sit between the heels.", "Stay tall through the torso.", "Drive up from midfoot."]),
    ex("ex_deadlift", "Conventional Deadlift", "Hamstrings", ["Glutes", "Back"], "Barbell", "Weighted Reps", ["Set lats before pulling.", "Push the floor away.", "Keep the bar close.", "Lock out with glutes."]),
    ex("ex_rdl", "Romanian Deadlift", "Hamstrings", ["Glutes", "Back"], "Barbell", "Weighted Reps", ["Hinge from the hips.", "Keep a soft knee bend.", "Stop when hamstrings are loaded.", "Stand tall without leaning back."]),
    ex("ex_hip_thrust", "Hip Thrust", "Glutes", ["Hamstrings", "Core"], "Barbell", "Weighted Reps", ["Shins vertical at the top.", "Ribs down.", "Pause and squeeze glutes.", "Control the lower."]),
    ex("ex_leg_press", "Leg Press", "Quads", ["Glutes"], "Machine", "Weighted Reps", ["Set feet evenly.", "Lower under control.", "Do not let the pelvis tuck hard.", "Press without slamming lockout."]),
    ex("ex_hack_squat", "Hack Squat", "Quads", ["Glutes"], "Machine", "Weighted Reps", ["Find a stance that allows depth.", "Control the descent.", "Push through the platform.", "Keep knees tracking cleanly."]),
    ex("ex_bench_press", "Bench Press", "Chest", ["Triceps", "Front Delts"], "Barbell", "Weighted Reps", ["Set shoulder blades.", "Stack wrists over elbows.", "Touch with control.", "Press the bar back over shoulders."]),
    ex("ex_incline_db_press", "Incline Dumbbell Press", "Chest", ["Front Delts", "Triceps"], "Dumbbell", "Weighted Reps", ["Use a stable bench angle.", "Lower with control.", "Press up and slightly in.", "Keep shoulders down."]),
    ex("ex_overhead_press", "Overhead Press", "Shoulders", ["Triceps", "Core"], "Barbell", "Weighted Reps", ["Brace glutes and abs.", "Move head back then through.", "Finish biceps by ears.", "Lower to upper chest."]),
    ex("ex_lateral_raise", "Dumbbell Lateral Raise", "Shoulders", ["Upper Back"], "Dumbbell", "Weighted Reps", ["Lead with elbows.", "Stop near shoulder height.", "Use light controlled reps.", "Avoid swinging."]),
    ex("ex_pull_up", "Pull-up", "Back", ["Biceps", "Core"], "Bodyweight", "Reps", ["Start from a dead hang.", "Pull elbows down.", "Clear the chin.", "Lower under control."]),
    ex("ex_lat_pulldown", "Lat Pulldown", "Back", ["Biceps"], "Cable", "Weighted Reps", ["Pull elbows toward ribs.", "Stay tall.", "Pause near upper chest.", "Let lats stretch up."]),
    ex("ex_barbell_row", "Barbell Row", "Back", ["Rear Delts", "Biceps"], "Barbell", "Weighted Reps", ["Hinge and brace.", "Row to lower ribs.", "Do not jerk the torso.", "Lower fully."]),
    ex("ex_seated_row", "Seated Cable Row", "Back", ["Rear Delts", "Biceps"], "Cable", "Weighted Reps", ["Sit tall.", "Lead with elbows.", "Squeeze lightly.", "Reach forward under control."]),
    ex("ex_face_pull", "Face Pull", "Rear Delts", ["Upper Back", "Rotator Cuff"], "Cable", "Weighted Reps", ["Set rope at face height.", "Pull hands toward ears.", "Keep traps relaxed.", "Control the return."]),
    ex("ex_biceps_curl", "Dumbbell Curl", "Biceps", ["Forearms"], "Dumbbell", "Weighted Reps", ["Keep elbows steady.", "Curl without swinging.", "Squeeze at the top.", "Lower slowly."]),
    ex("ex_triceps_pushdown", "Triceps Pushdown", "Triceps", ["Shoulders"], "Cable", "Weighted Reps", ["Pin elbows by ribs.", "Extend fully.", "Keep shoulders still.", "Control the return."]),
    ex("ex_leg_curl", "Leg Curl", "Hamstrings", ["Calves"], "Machine", "Weighted Reps", ["Line the pad with lower leg.", "Curl smoothly.", "Squeeze hamstrings.", "Lower slowly."]),
    ex("ex_leg_extension", "Leg Extension", "Quads", [], "Machine", "Weighted Reps", ["Line pivot with knee.", "Raise and squeeze.", "Keep hips down.", "Use the lowering phase."]),
    ex("ex_calf_raise", "Standing Calf Raise", "Calves", [], "Machine", "Weighted Reps", ["Drop into a stretch.", "Rise as high as possible.", "Pause at the top.", "Do not bounce."]),
    ex("ex_bulgarian_split_squat", "Bulgarian Split Squat", "Quads", ["Glutes", "Core"], "Dumbbell", "Weighted Reps", ["Start with the left side.", "Use a stable stride.", "Lower straight down.", "Match right-side reps to the left."]),
    ex("ex_db_shoulder_press", "Dumbbell Shoulder Press", "Shoulders", ["Triceps", "Core"], "Dumbbell", "Weighted Reps", ["Brace ribs down.", "Press evenly.", "Avoid shrugging.", "Lower under control."]),
    ex("ex_chest_supported_row", "Chest Supported Row", "Back", ["Rear Delts", "Biceps"], "Dumbbell", "Weighted Reps", ["Keep chest on the bench.", "Pull elbows back.", "Pause briefly.", "Reach forward under control."]),
    ex("ex_hanging_knee_raise", "Hanging Knee Raise", "Core", ["Hip Flexors"], "Bodyweight", "Reps", ["Start from a still hang.", "Curl pelvis slightly.", "Lift without swinging.", "Lower slowly."]),
    ex("ex_plank", "Forearm Plank", "Core", ["Glutes", "Shoulders"], "Bodyweight", "Time", ["Elbows under shoulders.", "Squeeze glutes and quads.", "Keep ribs down.", "Breathe behind the brace."]),
    ex("ex_dead_bug", "Dead Bug", "Core", ["Hip Stability"], "Bodyweight", "Reps", ["Low back stays gently down.", "Move slowly.", "Exhale as you reach.", "Stop before ribs flare."]),
    ex("ex_pallof", "Pallof Press", "Core", ["Obliques", "Glutes"], "Cable", "Weighted Reps", ["Stand tall.", "Press straight out.", "Do not rotate.", "Own the pause."])
  ];
}

function ex(id, name, muscle, secondary, equipment, kind, cues) {
  return { id, name, muscle, secondary, equipment, kind, cues, custom: false };
}

function seedRoutines() {
  return [
    routine("rt_meso_lower_a", "Month 1 - Lower A", "Squat base, posterior chain, left-leg balance", ["ex_back_squat", 3, "6-8", 150], ["ex_rdl", 3, "8-10", 150], ["ex_leg_press", 3, "10-12", 120], ["ex_bulgarian_split_squat", 2, "10/side", 90], ["ex_leg_curl", 2, "10-12", 90], ["ex_calf_raise", 3, "12-15", 75]),
    routine("rt_meso_upper_a", "Month 1 - Upper A", "Chest, back thickness, arm growth", ["ex_bench_press", 3, "6-8", 150], ["ex_chest_supported_row", 3, "8-10", 120], ["ex_incline_db_press", 3, "8-10", 120], ["ex_lat_pulldown", 3, "10-12", 120], ["ex_lateral_raise", 3, "12-15", 75], ["ex_triceps_pushdown", 2, "10-15", 75], ["ex_biceps_curl", 2, "10-12", 75]),
    routine("rt_meso_lower_b", "Month 1 - Lower B", "Glutes, quads, unilateral control", ["ex_hip_thrust", 4, "8-10", 150], ["ex_hack_squat", 3, "8-12", 150], ["ex_leg_extension", 3, "12-15", 75], ["ex_bulgarian_split_squat", 2, "8-10/side", 90], ["ex_leg_curl", 3, "10-12", 90], ["ex_pallof", 3, "10/side", 60]),
    routine("rt_meso_upper_b", "Month 1 - Upper B", "Back width, shoulders, balanced arms", ["ex_pull_up", 3, "AMRAP", 150], ["ex_overhead_press", 3, "6-10", 150], ["ex_seated_row", 3, "10-12", 120], ["ex_db_shoulder_press", 2, "8-10", 120], ["ex_face_pull", 3, "12-15", 75], ["ex_biceps_curl", 3, "10-12", 75], ["ex_hanging_knee_raise", 3, "8-12", 60]),
    routine("rt_lower_strength", "Lower Strength", "Squat, hinge, glutes", ["ex_back_squat", 4, "5-8", 180], ["ex_rdl", 3, "8-10", 150], ["ex_leg_press", 3, "10-12", 120], ["ex_leg_curl", 3, "10-12", 90], ["ex_calf_raise", 3, "12-15", 75]),
    routine("rt_push", "Push Day", "Chest, shoulders, triceps", ["ex_bench_press", 4, "5-8", 180], ["ex_incline_db_press", 3, "8-10", 120], ["ex_overhead_press", 3, "6-10", 150], ["ex_lateral_raise", 3, "12-15", 75], ["ex_triceps_pushdown", 3, "10-15", 75]),
    routine("rt_pull", "Pull Day", "Back, rear delts, biceps", ["ex_pull_up", 4, "AMRAP", 150], ["ex_barbell_row", 3, "6-10", 150], ["ex_lat_pulldown", 3, "8-12", 120], ["ex_face_pull", 3, "12-15", 75], ["ex_biceps_curl", 3, "10-12", 75]),
    routine("rt_glutes_core", "Glutes + Core", "Hip thrust, unilateral control, trunk", ["ex_hip_thrust", 4, "8-10", 150], ["ex_hack_squat", 3, "8-12", 150], ["ex_leg_curl", 3, "10-12", 90], ["ex_pallof", 3, "10-12/side", 60], ["ex_plank", 3, "45s", 60])
  ];
}

function routine(id, name, focus, ...rows) {
  return {
    id,
    name,
    focus,
    folder: "My routines",
    exercises: rows.map(([exerciseId, sets, reps, restSeconds]) => ({
      id: uid("tmpl"),
      exerciseId,
      sets,
      reps,
      restSeconds,
      targetRpe: 8,
      note: ""
    }))
  };
}

function exerciseById(id) {
  return state.exercises.find((exercise) => exercise.id === id);
}

function routineById(id) {
  return state.routines.find((routineItem) => routineItem.id === id);
}

function workoutById(id) {
  return state.workouts.find((workout) => workout.id === id);
}

function allCompletedSets() {
  return state.workouts.flatMap((workout) =>
    workout.exercises.flatMap((exercise) =>
      exercise.sets
        .filter((set) => set.done)
        .map((set) => ({ workout, exercise, set }))
    )
  );
}

function estimatedOneRepMax(weight, reps) {
  if (!weight || !reps) return 0;
  return weight * (1 + reps / 30);
}

function workoutVolume(workout) {
  return workout.exercises.reduce((total, exercise) => {
    return total + exercise.sets.reduce((sum, set) => {
      const weight = toNumber(set.weight) || 0;
      const reps = toNumber(set.reps) || 0;
      return sum + (set.done ? weight * reps : 0);
    }, 0);
  }, 0);
}

function workoutSetCount(workout) {
  return workout.exercises.reduce((total, exercise) => total + exercise.sets.filter((set) => set.done).length, 0);
}

function bestForExercise(exerciseId, mode = "e1rm") {
  let best = 0;
  allCompletedSets().forEach(({ exercise, set }) => {
    if (exercise.exerciseId !== exerciseId) return;
    const weight = toNumber(set.weight) || 0;
    const reps = toNumber(set.reps) || 0;
    const value = mode === "weight" ? weight : estimatedOneRepMax(weight, reps);
    if (value > best) best = value;
  });
  return best;
}

function recentWorkouts() {
  return [...state.workouts].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));
}

function workoutsThisWeek() {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  return state.workouts.filter((workout) => new Date(workout.startedAt) >= start).length;
}

function streakDays() {
  const dates = new Set(state.workouts.map((workout) => todayKey(new Date(workout.startedAt))));
  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  while (dates.has(todayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function totalPrs() {
  return state.workouts.reduce((sum, workout) => sum + (workout.prs ? workout.prs.length : 0), 0);
}

function init() {
  setupNav();
  bindEvents();
  registerServiceWorker();
  renderAll();
  startClock();
  window.LiftVault = {
    getState: () => state,
    startRoutine,
    startEmptyWorkout,
    switchView
  };
}

function setupNav() {
  const navHtml = NAV_ITEMS.map(([id, label, iconId]) => `
    <button class="nav-button ${id === currentView ? "active" : ""}" data-view="${id}" type="button" aria-label="${label}">
      ${icon(iconId)}
      <span>${label}</span>
    </button>
  `).join("");
  $("#desktopNav").innerHTML = navHtml;
  $("#bottomNav").innerHTML = navHtml;
}

function bindEvents() {
  document.addEventListener("click", handleClick);
  document.addEventListener("input", handleInput);
  document.addEventListener("change", handleChange);
  document.addEventListener("submit", handleSubmit);

  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", (event) => {
    if (event.target.id === "modal") closeModal();
  });

  $("#quickStartBtn").addEventListener("click", openStartModal);
  $("#timerReset").addEventListener("click", resetTimer);
  $("#exerciseSearch").addEventListener("input", renderLibrary);
  $("#muscleFilter").addEventListener("change", renderLibrary);
  $("#equipmentFilter").addEventListener("change", renderLibrary);
  $("#trendExercise").addEventListener("change", renderExerciseTrend);
  $("#bodyMetricTrend").addEventListener("change", renderBodyChart);
  $("#photoInput").addEventListener("change", handlePhotoUpload);
  $("#backupInput").addEventListener("change", importBackupFile);
  $("#shareInput").addEventListener("change", importShareFile);

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $("#installBtn").hidden = false;
  });
  $("#installBtn").addEventListener("click", promptInstall);
  $("#settingsInstallBtn").addEventListener("click", promptInstall);
}

function handleClick(event) {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    switchView(viewButton.dataset.view);
    return;
  }

  const timerButton = event.target.closest("[data-timer]");
  if (timerButton) {
    startTimer(Number(timerButton.dataset.timer), `${timerButton.dataset.timer}s rest`);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    runAction(actionButton.dataset.action, actionButton);
    return;
  }

  const startButton = event.target.closest("[data-start-routine]");
  if (startButton) {
    startRoutine(startButton.dataset.startRoutine);
    return;
  }

  const editRoutineButton = event.target.closest("[data-edit-routine]");
  if (editRoutineButton) {
    openRoutineEditor(editRoutineButton.dataset.editRoutine);
    return;
  }

  const duplicateRoutineButton = event.target.closest("[data-duplicate-routine]");
  if (duplicateRoutineButton) {
    duplicateRoutine(duplicateRoutineButton.dataset.duplicateRoutine);
    return;
  }

  const deleteRoutineButton = event.target.closest("[data-delete-routine]");
  if (deleteRoutineButton) {
    deleteRoutine(deleteRoutineButton.dataset.deleteRoutine);
    return;
  }

  const openExerciseButton = event.target.closest("[data-open-exercise]");
  if (openExerciseButton) {
    openExerciseDetail(openExerciseButton.dataset.openExercise);
    return;
  }

  const addActiveExerciseButton = event.target.closest("[data-add-active-exercise]");
  if (addActiveExerciseButton) {
    addExerciseToActive(addActiveExerciseButton.dataset.addActiveExercise);
    closeModal();
    return;
  }

  const toggleSetButton = event.target.closest("[data-toggle-set]");
  if (toggleSetButton) {
    const [exerciseIndex, setIndex] = toggleSetButton.dataset.toggleSet.split(":").map(Number);
    toggleSetDone(exerciseIndex, setIndex);
    return;
  }

  const addSetButton = event.target.closest("[data-add-set]");
  if (addSetButton) {
    addSetToActive(Number(addSetButton.dataset.addSet));
    return;
  }

  const deleteSetButton = event.target.closest("[data-delete-set]");
  if (deleteSetButton) {
    const [exerciseIndex, setIndex] = deleteSetButton.dataset.deleteSet.split(":").map(Number);
    deleteActiveSet(exerciseIndex, setIndex);
    return;
  }

  const removeActiveExerciseButton = event.target.closest("[data-remove-active-exercise]");
  if (removeActiveExerciseButton) {
    removeActiveExercise(Number(removeActiveExerciseButton.dataset.removeActiveExercise));
    return;
  }

  const routineAddExerciseButton = event.target.closest("[data-routine-add-exercise]");
  if (routineAddExerciseButton) {
    addTemplateExercise(routineAddExerciseButton.dataset.routineAddExercise);
    return;
  }

  const removeTemplateButton = event.target.closest("[data-remove-template]");
  if (removeTemplateButton) {
    const [routineId, templateId] = removeTemplateButton.dataset.removeTemplate.split(":");
    removeTemplateExercise(routineId, templateId);
    return;
  }

  const shareWorkoutButton = event.target.closest("[data-share-workout]");
  if (shareWorkoutButton) {
    shareWorkout(shareWorkoutButton.dataset.shareWorkout);
    return;
  }

  const downloadWorkoutButton = event.target.closest("[data-download-workout]");
  if (downloadWorkoutButton) {
    downloadWorkoutShare(downloadWorkoutButton.dataset.downloadWorkout);
    return;
  }

  const deleteWorkoutButton = event.target.closest("[data-delete-workout]");
  if (deleteWorkoutButton) {
    deleteWorkout(deleteWorkoutButton.dataset.deleteWorkout);
    return;
  }

  const deletePhotoButton = event.target.closest("[data-delete-photo]");
  if (deletePhotoButton) {
    deletePhoto(deletePhotoButton.dataset.deletePhoto);
  }
}

function runAction(action, button) {
  const actions = {
    "start-empty": startEmptyWorkout,
    "add-exercise-active": () => openExercisePicker(),
    "finish-workout": finishActiveWorkout,
    "new-routine": newRoutine,
    "custom-exercise": openCustomExerciseModal,
    "import-share": () => $("#shareInput").click(),
    "export-data": exportBackup,
    "import-data": () => $("#backupInput").click(),
    "reset-data": resetApp
  };
  if (actions[action]) actions[action](button);
}

function handleInput(event) {
  const target = event.target;
  if (target.matches("[data-active-field]")) {
    updateActiveField(target.dataset.activeField, target.value);
  }
  if (target.matches("[data-set-field]")) {
    const [exerciseIndex, setIndex, field] = target.dataset.setField.split(":");
    updateSetField(Number(exerciseIndex), Number(setIndex), field, target.value);
  }
  if (target.matches("[data-routine-field]")) {
    updateRoutineField(target.dataset.routineId, target.dataset.routineField, target.value);
  }
  if (target.matches("[data-template-field]")) {
    const [routineId, templateId, field] = target.dataset.templateField.split(":");
    updateTemplateField(routineId, templateId, field, target.value);
  }
}

function handleChange(event) {
  const target = event.target;
  if (target.matches("[data-set-field]")) {
    const [exerciseIndex, setIndex, field] = target.dataset.setField.split(":");
    updateSetField(Number(exerciseIndex), Number(setIndex), field, target.value);
  }
  if (target.matches("[data-template-field]")) {
    const [routineId, templateId, field] = target.dataset.templateField.split(":");
    updateTemplateField(routineId, templateId, field, target.value);
  }
}

function handleSubmit(event) {
  if (event.target.id === "metricForm") {
    event.preventDefault();
    saveMetrics(new FormData(event.target));
  }
  if (event.target.id === "profileForm") {
    event.preventDefault();
    saveProfile(new FormData(event.target));
  }
  if (event.target.id === "settingsForm") {
    event.preventDefault();
    saveSettings(new FormData(event.target));
  }
  if (event.target.id === "customExerciseForm") {
    event.preventDefault();
    saveCustomExercise(new FormData(event.target));
  }
}

function switchView(view) {
  currentView = view;
  $$(".view").forEach((section) => section.classList.toggle("active", section.id === `view-${view}`));
  $$(".nav-button").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAll() {
  renderDashboard();
  renderLogger();
  renderRoutines();
  hydrateLibraryFilters();
  renderLibrary();
  renderProgress();
  renderBody();
  renderFeed();
  renderSettings();
}

function renderCurrentView() {
  const renderers = {
    dashboard: renderDashboard,
    logger: renderLogger,
    routines: renderRoutines,
    library: renderLibrary,
    progress: renderProgress,
    body: renderBody,
    feed: renderFeed,
    settings: renderSettings
  };
  if (renderers[currentView]) renderers[currentView]();
}

function renderDashboard() {
  const unit = state.settings.unit;
  const name = state.profile.name || "You";
  const totalMinutes = Math.round(state.workouts.reduce((sum, workout) => sum + (workout.durationSeconds || 0), 0) / 60);
  const totalVolume = Math.round(state.workouts.reduce((sum, workout) => sum + workoutVolume(workout), 0));
  const target = state.profile.weeklyTarget || 4;
  $("#homeName").textContent = name;
  $("#homeInitials").textContent = initials(name);
  $("#homeMonth").textContent = new Date().toLocaleDateString(undefined, { month: "short", year: "numeric" });
  $("#activityTypes").innerHTML = renderActivityTypes();
  $("#homeCalendarStrip").innerHTML = renderHomeCalendarStrip();
  $("#dashboardStats").innerHTML = [
    ["Time", totalMinutes ? formatHours(totalMinutes) : "0:00", "hours logged", "blue"],
    ["Exercises", `${allCompletedSets().length}/${Math.max(8, target * 8)}`, "sets completed", "green"],
    ["Weekly points", weeklyPoints(), `${workoutsThisWeek()}/${target} workouts`, "white"],
    ["Gym streak", `${streakDays()} day`, `${totalPrs()} personal records`, "peach"]
  ].map(statCard).join("");
  $("#gainPlanPanel").innerHTML = renderGainPlan(true);

  $("#activeWorkoutSummary").innerHTML = renderActiveSummary();
  $("#quickRoutines").innerHTML = state.routines.slice(0, 5).map((routineItem) => renderRoutineLine(routineItem)).join("");
  $("#workoutDiarySummary").innerHTML = renderWorkoutDiarySummary();
  $("#heartWidget").innerHTML = renderHeartWidget();
  $("#dashboardProgressMatrix").innerHTML = renderDashboardProgressMatrix();
  const recent = recentWorkouts().slice(0, 5);
  $("#recentWorkouts").innerHTML = recent.length
    ? recent.map((workout) => renderWorkoutLine(workout)).join("")
    : `<div class="empty-state"><strong>No workouts logged yet.</strong><span>Start from a routine or empty workout.</span></div>`;
}

function statCard([label, value, detail, tone = "white"]) {
  return `<div class="stat-card stat-${tone}"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(detail)}</small></div>`;
}

function renderGainPlan(compact = false) {
  const targets = nutritionTargets();
  const schedule = compact ? GAIN_PLAN.schedule.slice(0, 2) : GAIN_PLAN.schedule;
  return `
    <div class="plan-hero">
      <div>
        <p class="eyebrow">Personal plan</p>
        <h2 id="${compact ? "gainPlanTitle" : "programTitle"}">${escapeHtml(GAIN_PLAN.title)}</h2>
        <p>${escapeHtml(GAIN_PLAN.subtitle)}</p>
      </div>
      <span class="chip green">${workoutsThisWeek()}/${state.profile.weeklyTarget || 4} this week</span>
    </div>
    <div class="plan-targets">
      ${targets.map((target) => `
        <article>
          <span>${escapeHtml(target.label)}</span>
          <strong>${escapeHtml(target.value)}</strong>
          <small>${escapeHtml(target.detail)}</small>
        </article>
      `).join("")}
    </div>
    <div class="program-schedule">
      ${schedule.map((session) => renderProgramSession(session)).join("")}
    </div>
    ${compact ? `<button class="command full" data-view="routines" type="button">Open full program</button>` : renderProgramWeeks()}
  `;
}

function nutritionTargets() {
  const bmr = latestMetricNumber("bmr") || toNumber(PERSONAL_BASELINE_SCAN.bmr);
  const weight = latestMetricNumber("weight");
  const calorieLow = bmr ? Math.round((bmr * 1.55 + 250) / 10) * 10 : null;
  const calorieHigh = bmr ? Math.round((bmr * 1.55 + 350) / 10) * 10 : null;
  const protein = weight ? `${Math.round(weight * 1.6)}-${Math.round(weight * 2)}g` : "weight x 1.6-2.0g";
  const currentWeight = weight ? `${weight.toFixed(1).replace(".0", "")} kg` : "Enter weight";
  const bmi = latestMetricNumber("bmi");
  return [
    ["Calories", calorieLow ? `${calorieLow}-${calorieHigh}` : "Enter BMR", "daily start target"],
    ["Protein", protein, "per day"],
    ["Current", currentWeight, bmi ? `BMI ${bmi}` : "starting weight"],
    ["Month goal", GAIN_PLAN.monthGoal, "gain slowly"],
    ["Gain rate", "0.25-0.5%", "body weight per week"],
    ["Rescan", "Week 4", "compare muscle, fat, WHR"]
  ].map(([label, value, detail]) => ({ label, value, detail }));
}

function latestMetricNumber(key) {
  const entry = sortedBodyMetrics().find((item) => toNumber(item[key]) !== null);
  return entry ? toNumber(entry[key]) : null;
}

function renderProgramSession(session) {
  const routineItem = routineById(session.routineId);
  return `
    <article class="program-session">
      <span>${escapeHtml(session.day)}</span>
      <div>
        <strong>${escapeHtml(session.label)}</strong>
        <small>${escapeHtml(session.focus)}</small>
      </div>
      <button class="round-button" ${routineItem ? `data-start-routine="${session.routineId}"` : ""} type="button" aria-label="Start ${escapeHtml(session.label)}">${icon("i-play")}</button>
    </article>
  `;
}

function renderProgramWeeks() {
  return `
    <div class="program-weeks">
      ${GAIN_PLAN.weeks.map((week) => `
        <article>
          <span>${escapeHtml(week.label)}</span>
          <strong>${escapeHtml(week.title)}</strong>
          <small>${escapeHtml(week.detail)}</small>
        </article>
      `).join("")}
    </div>
    <div class="plan-priorities">
      ${GAIN_PLAN.priorities.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
  `;
}

function initials(name) {
  return String(name || "LV").split(/\s+/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "LV";
}

function formatHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}:${String(mins).padStart(2, "0")}`;
}

function weeklyPoints() {
  const volume = state.workouts
    .filter((workout) => isThisWeek(new Date(workout.startedAt)))
    .reduce((sum, workout) => sum + workoutVolume(workout), 0);
  return Math.round(workoutsThisWeek() * 140 + allCompletedSets().filter(({ workout }) => isThisWeek(new Date(workout.startedAt))).length * 12 + volume / 25);
}

function isThisWeek(date) {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const end = new Date(start);
  end.setDate(start.getDate() + 7);
  return date >= start && date < end;
}

function renderActivityTypes() {
  const items = [
    ["Gym", "i-log", "start-empty", ""],
    ["Routine", "i-routine", "", "routines"],
    ["Body", "i-body", "", "body"],
    ["Progress", "i-chart", "", "progress"]
  ];
  return items.map(([label, iconId, action, view], index) => `
    <button class="activity-type activity-${index}" ${action ? `data-action="${action}"` : ""} ${view ? `data-view="${view}"` : ""} type="button" aria-label="${label}">
      <span>${icon(iconId)}</span>
      <strong>${escapeHtml(label)}</strong>
    </button>
  `).join("");
}

function renderHomeCalendarStrip() {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const logged = new Set(state.workouts.map((workout) => todayKey(new Date(workout.startedAt))));
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    const key = todayKey(day);
    const active = key === todayKey(now);
    return `
      <button class="calendar-day ${logged.has(key) ? "logged" : ""} ${active ? "active" : ""}" type="button">
        <span>${day.toLocaleDateString(undefined, { weekday: "short" })}</span>
        <strong>${day.getDate()}</strong>
      </button>
    `;
  }).join("");
}

function renderWorkoutDiarySummary() {
  const timerText = state.timer ? formatDuration(Math.max(0, (state.timer.endsAt - Date.now()) / 1000)) : `${Math.round((state.settings.restSeconds || 120) / 60)}m`;
  const activeName = state.active ? state.active.name : "No active workout";
  const activeDetail = state.active ? `${activeTotals().doneSets}/${activeTotals().totalSets} sets complete` : "Pick a routine or start empty";
  const nextExercise = state.active?.exercises.find((entry) => entry.sets.some((set) => !set.done)) || state.active?.exercises[0];
  return `
    <div class="diary-timer-card">
      <div class="timer-symbol">${icon("i-clock")}</div>
      <div>
        <strong>Timer</strong>
        <small>Manage your exercise with interval timer</small>
        <b>${escapeHtml(timerText)}</b>
      </div>
      <button class="round-button dark-play" data-timer="${state.settings.restSeconds}" type="button" aria-label="Start timer">${icon("i-play")}</button>
    </div>
    <div class="diary-exercise-card">
      <span class="soft-badge">GYM</span>
      <h3>${escapeHtml(activeName)}</h3>
      <p>${escapeHtml(activeDetail)}</p>
      <div class="mini-body" aria-hidden="true"><span></span><span></span></div>
      <button class="floating-play" ${state.active ? 'data-view="logger"' : 'data-action="start-empty"'} type="button" aria-label="Open workout">${icon("i-play")}</button>
      <small>${nextExercise ? escapeHtml(nextExercise.name || "Next exercise") : "Workout diary"}</small>
    </div>
  `;
}

function renderHeartWidget() {
  const recent = recentWorkouts()[0];
  const setCount = recent ? workoutSetCount(recent) : 0;
  const avg = Math.min(156, 98 + setCount * 3 + workoutsThisWeek() * 2);
  const low = Math.max(54, avg - 42);
  const high = Math.min(178, avg + 46);
  const bars = [64, 88, 124, 76, 94, 68].map((height, index) => `<i style="height:${height}px" class="${index === 2 ? "peak" : ""}"></i>`).join("");
  return `
    <div class="dark-widget-head">
      <span class="heart-disc">${icon("i-heart")}</span>
      <div>
        <h2 id="heartWidgetTitle">Heart rate</h2>
        <p>${formatDateTime(new Date())}</p>
      </div>
    </div>
    <div class="heart-stats">
      <div><span>AVG</span><strong>${avg}</strong><small>BPM</small></div>
      <div><span>RANGE</span><strong>${low}-${high}</strong><small>BPM</small></div>
    </div>
    <div class="heart-bars">${bars}<em style="bottom:${Math.min(116, avg - 30)}px">${avg} BPM</em></div>
  `;
}

function renderDashboardProgressMatrix() {
  const columns = ["Gym", "Push", "Pull", "Legs", "Core"];
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const workouts = recentWorkouts();
  const dots = days.map((day, row) => {
    const cells = columns.map((column, col) => {
      const workout = workouts.find((item) => {
        const date = new Date(item.startedAt);
        const dayIndex = (date.getDay() + 6) % 7;
        const text = `${item.name} ${item.exercises.map((entry) => entry.name).join(" ")}`.toLowerCase();
        const matches = column === "Gym" || text.includes(column.toLowerCase()) || (column === "Legs" && /squat|leg|glute|deadlift|thrust/i.test(text));
        return dayIndex === row && matches;
      });
      const planned = !workout && (row + col) % 4 === 0 && row <= new Date().getDay();
      return `<span class="${workout ? "done" : planned ? "planned" : ""}"></span>`;
    }).join("");
    return `<div class="matrix-row"><div class="matrix-dots">${cells}</div><b>${day}</b></div>`;
  }).join("");
  return `${dots}<div class="matrix-labels">${columns.map((column) => `<span>${column}</span>`).join("")}</div>`;
}

function renderActiveSummary() {
  if (!state.active) {
    return `
      <div class="empty-state">
        <strong>No active workout.</strong>
        <span>Pick a routine or start empty.</span>
      </div>
      <div class="button-row" style="margin-top:10px">
        <button class="command primary" data-action="start-empty" type="button">${icon("i-plus")}Empty workout</button>
        <button class="command" data-view="routines" type="button">${icon("i-routine")}Routines</button>
      </div>
    `;
  }
  const totals = activeTotals();
  return `
    <div class="stack">
      <div class="list-item">
        <div>
          <strong>${escapeHtml(state.active.name)}</strong>
          <small><span class="duration-live" data-start="${state.active.startedAt}">${formatDuration((Date.now() - new Date(state.active.startedAt)) / 1000)}</span> active</small>
        </div>
        <span class="chip teal">${totals.doneSets}/${totals.totalSets} sets</span>
      </div>
      <div class="button-row">
        <button class="command primary" data-view="logger" type="button">${icon("i-log")}Continue</button>
        <button class="command" data-action="finish-workout" type="button">${icon("i-check")}Finish</button>
      </div>
    </div>
  `;
}

function renderRoutineLine(routineItem) {
  const totalSets = routineItem.exercises.reduce((sum, row) => sum + Number(row.sets || 0), 0);
  return `
    <div class="list-item">
      <div>
        <strong>${escapeHtml(routineItem.name)}</strong>
        <small>${escapeHtml(routineItem.focus)} | ${routineItem.exercises.length} exercises | ${totalSets} sets</small>
      </div>
      <button class="mini-command primary" data-start-routine="${routineItem.id}" type="button">${icon("i-play")}Start</button>
    </div>
  `;
}

function renderWorkoutLine(workout) {
  const volume = Math.round(workoutVolume(workout));
  return `
    <div class="history-line">
      <div>
        <strong>${escapeHtml(workout.name)}</strong>
        <small>${formatDateTime(workout.startedAt)} | ${workoutSetCount(workout)} sets | ${volume.toLocaleString()} ${state.settings.unit}</small>
      </div>
      <button class="mini-command" data-share-workout="${workout.id}" type="button">${icon("i-share")}Share</button>
    </div>
  `;
}

function renderLogger() {
  const root = $("#loggerView");
  if (!state.active) {
    root.innerHTML = `
      <div class="empty-state">
        <strong>No active workout.</strong>
        <span>Start empty or launch a routine.</span>
      </div>
      <div class="routine-grid" style="margin-top:14px">
        ${state.routines.map((routineItem) => renderRoutineCard(routineItem, true)).join("")}
      </div>
    `;
    return;
  }

  const totals = activeTotals();
  root.innerHTML = `
    <div class="active-header panel">
      <div class="form-grid">
        <label class="full">Workout name
          <input data-active-field="name" value="${escapeHtml(state.active.name)}">
        </label>
        <label>Privacy
          <select data-active-field="privacy">
            <option value="private" ${state.active.privacy === "private" ? "selected" : ""}>Private</option>
            <option value="shareable" ${state.active.privacy === "shareable" ? "selected" : ""}>Shareable</option>
          </select>
        </label>
        <label>Duration
          <input value="${formatDuration((Date.now() - new Date(state.active.startedAt)) / 1000)}" readonly>
        </label>
        <label class="full">Workout notes
          <textarea data-active-field="notes" placeholder="Session notes">${escapeHtml(state.active.notes || "")}</textarea>
        </label>
      </div>
      <div class="chip-row">
        <span class="chip teal">${totals.doneSets}/${totals.totalSets} sets done</span>
        <span class="chip blue">${Math.round(totals.volume).toLocaleString()} ${state.settings.unit} volume</span>
        <span class="chip amber">${state.active.exercises.length} exercises</span>
      </div>
    </div>
    <div id="activeExerciseList">
      ${state.active.exercises.length ? state.active.exercises.map(renderActiveExercise).join("") : `<div class="empty-state"><strong>No exercises yet.</strong><span>Add an exercise to begin logging.</span></div>`}
    </div>
  `;
}

function renderActiveExercise(activeExercise, exerciseIndex) {
  const exercise = exerciseById(activeExercise.exerciseId) || activeExercise;
  return `
    <section class="workout-exercise">
      <header>
        <div>
          <h2>${escapeHtml(exercise.name || activeExercise.name)}</h2>
          <div class="chip-row" style="margin-top:6px">
            <span class="chip teal">${escapeHtml(exercise.muscle || "Custom")}</span>
            <span class="chip">${escapeHtml(exercise.equipment || "Mixed")}</span>
            <span class="chip">${escapeHtml(exercise.kind || "Weighted Reps")}</span>
          </div>
        </div>
        <button class="icon-button" data-remove-active-exercise="${exerciseIndex}" type="button" aria-label="Remove exercise">${icon("i-trash")}</button>
      </header>
      <div class="set-table">
        <div class="set-row head">
          <span>Set</span><span>Previous</span><span>Weight</span><span>Reps</span><span>RPE / Type</span><span>Done</span><span></span>
        </div>
        ${activeExercise.sets.map((set, setIndex) => renderSetRow(activeExercise, exerciseIndex, set, setIndex)).join("")}
      </div>
      <div class="exercise-actions">
        <button class="mini-command" data-add-set="${exerciseIndex}" type="button">${icon("i-plus")}Set</button>
        <button class="mini-command" data-timer="${activeExercise.restSeconds || state.settings.restSeconds}" type="button">${icon("i-clock")}${activeExercise.restSeconds || state.settings.restSeconds}s</button>
        <button class="mini-command" data-open-exercise="${activeExercise.exerciseId}" type="button">History</button>
      </div>
    </section>
  `;
}

function renderSetRow(activeExercise, exerciseIndex, set, setIndex) {
  const previous = previousSetText(activeExercise.exerciseId, setIndex);
  return `
    <div class="set-row ${set.done ? "done" : ""}">
      <span class="set-index">${setIndex + 1}</span>
      <span class="previous-value">${escapeHtml(previous || "-")}</span>
      <input data-set-field="${exerciseIndex}:${setIndex}:weight" value="${escapeHtml(set.weight ?? "")}" inputmode="decimal" aria-label="Weight">
      <input data-set-field="${exerciseIndex}:${setIndex}:reps" value="${escapeHtml(set.reps ?? "")}" inputmode="decimal" aria-label="Reps">
      <div class="form-grid" style="grid-template-columns:1fr 1fr;gap:6px">
        <input data-set-field="${exerciseIndex}:${setIndex}:rpe" value="${escapeHtml(set.rpe ?? "")}" inputmode="decimal" aria-label="RPE">
        <select data-set-field="${exerciseIndex}:${setIndex}:type" aria-label="Set type">
          ${["normal", "warmup", "drop", "failure"].map((type) => `<option value="${type}" ${set.type === type ? "selected" : ""}>${type}</option>`).join("")}
        </select>
      </div>
      <button class="icon-button" data-toggle-set="${exerciseIndex}:${setIndex}" type="button" aria-label="Toggle set done">${set.done ? icon("i-check") : icon("i-play")}</button>
      <button class="icon-button" data-delete-set="${exerciseIndex}:${setIndex}" type="button" aria-label="Delete set">${icon("i-trash")}</button>
    </div>
  `;
}

function renderRoutines() {
  $("#programOverview").innerHTML = renderGainPlan(false);
  $("#routineList").innerHTML = state.routines.map((routineItem) => renderRoutineCard(routineItem)).join("");
}

function renderRoutineCard(routineItem, compact = false) {
  const totalSets = routineItem.exercises.reduce((sum, row) => sum + Number(row.sets || 0), 0);
  const preview = routineItem.exercises.slice(0, compact ? 3 : 5).map((row) => {
    const exercise = exerciseById(row.exerciseId);
    return `<div class="routine-line"><div><strong>${escapeHtml(exercise ? exercise.name : "Missing exercise")}</strong><small>${row.sets} x ${escapeHtml(row.reps)} | ${row.restSeconds}s rest</small></div></div>`;
  }).join("");
  return `
    <article class="routine-card">
      <header>
        <div>
          <h2>${escapeHtml(routineItem.name)}</h2>
          <p class="muted">${escapeHtml(routineItem.focus || "Custom routine")}</p>
        </div>
        <span class="chip teal">${totalSets} sets</span>
      </header>
      <div class="stack">${preview || `<div class="empty-state"><strong>No exercises.</strong><span>Edit this routine to add movements.</span></div>`}</div>
      <div class="card-actions">
        <button class="command primary" data-start-routine="${routineItem.id}" type="button">${icon("i-play")}Start</button>
        <button class="command" data-edit-routine="${routineItem.id}" type="button">Edit</button>
        ${compact ? "" : `<button class="command" data-duplicate-routine="${routineItem.id}" type="button">Duplicate</button><button class="command danger" data-delete-routine="${routineItem.id}" type="button">${icon("i-trash")}Delete</button>`}
      </div>
    </article>
  `;
}

function hydrateLibraryFilters() {
  const muscles = ["All muscles", ...new Set(state.exercises.map((exercise) => exercise.muscle).filter(Boolean).sort())];
  const equipment = ["All equipment", ...new Set(state.exercises.map((exercise) => exercise.equipment).filter(Boolean).sort())];
  $("#muscleFilter").innerHTML = muscles.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
  $("#equipmentFilter").innerHTML = equipment.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
}

function renderLibrary() {
  const query = ($("#exerciseSearch").value || "").trim().toLowerCase();
  const muscle = $("#muscleFilter").value || "All muscles";
  const equipment = $("#equipmentFilter").value || "All equipment";
  const filtered = state.exercises.filter((exercise) => {
    const haystack = `${exercise.name} ${exercise.muscle} ${exercise.secondary.join(" ")} ${exercise.equipment}`.toLowerCase();
    return (!query || haystack.includes(query))
      && (muscle === "All muscles" || exercise.muscle === muscle)
      && (equipment === "All equipment" || exercise.equipment === equipment);
  });
  $("#exerciseGrid").innerHTML = filtered.length
    ? filtered.map(renderExerciseCard).join("")
    : `<div class="empty-state"><strong>No exercises found.</strong><span>Try another search or add a custom exercise.</span></div>`;
}

function renderExerciseCard(exercise) {
  const bestWeight = bestForExercise(exercise.id, "weight");
  return `
    <article class="exercise-card">
      <div class="exercise-art">${escapeHtml(exercise.name.slice(0, 2).toUpperCase())}</div>
      <div>
        <h2>${escapeHtml(exercise.name)}</h2>
        <p class="muted">${escapeHtml(exercise.muscle)} | ${escapeHtml(exercise.equipment)}</p>
        <div class="chip-row" style="margin-top:8px">
          <span class="chip teal">${escapeHtml(exercise.kind)}</span>
          ${bestWeight ? `<span class="chip amber">Best ${bestWeight} ${state.settings.unit}</span>` : `<span class="chip">No logs</span>`}
        </div>
      </div>
      <div class="card-actions">
        <button class="command" data-open-exercise="${exercise.id}" type="button">Details</button>
        ${state.active ? `<button class="command primary" data-add-active-exercise="${exercise.id}" type="button">${icon("i-plus")}Add</button>` : ""}
      </div>
    </article>
  `;
}

function renderProgress() {
  const unit = state.settings.unit;
  const sets = allCompletedSets().length;
  const totalVolume = Math.round(state.workouts.reduce((sum, workout) => sum + workoutVolume(workout), 0));
  $("#progressStats").innerHTML = [
    ["Workouts", state.workouts.length, "all time"],
    ["Sets", sets, "completed"],
    ["Volume", totalVolume ? `${totalVolume.toLocaleString()} ${unit}` : "0", "all time"],
    ["PRs", totalPrs(), "records"]
  ].map(statCard).join("");
  renderVolumeChart();
  renderMuscleChart();
  renderTrendSelect();
  renderExerciseTrend();
  renderCalendar();
}

function renderVolumeChart() {
  const weeks = lastNWeeks(8).map((week) => {
    const volume = state.workouts
      .filter((workout) => new Date(workout.startedAt) >= week.start && new Date(workout.startedAt) < week.end)
      .reduce((sum, workout) => sum + workoutVolume(workout), 0);
    return { ...week, volume };
  });
  const max = Math.max(1, ...weeks.map((week) => week.volume));
  $("#volumeChart").innerHTML = weeks.map((week, index) => {
    const height = Math.max(4, Math.round((week.volume / max) * 138));
    return `<div class="bar-slot"><div class="bar ${BAR_COLORS[index % BAR_COLORS.length]}" style="height:${height}px" title="${Math.round(week.volume)}"></div><span class="bar-label">${formatDate(week.start)}</span></div>`;
  }).join("");
}

function lastNWeeks(count) {
  const weeks = [];
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const mondayOffset = (now.getDay() + 6) % 7;
  const start = new Date(now);
  start.setDate(now.getDate() - mondayOffset - (count - 1) * 7);
  for (let index = 0; index < count; index += 1) {
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + index * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 7);
    weeks.push({ start: weekStart, end: weekEnd });
  }
  return weeks;
}

function renderMuscleChart() {
  const counts = new Map();
  state.workouts.forEach((workout) => {
    workout.exercises.forEach((entry) => {
      const exercise = exerciseById(entry.exerciseId) || entry;
      const done = entry.sets.filter((set) => set.done).length;
      counts.set(exercise.muscle || "Other", (counts.get(exercise.muscle || "Other") || 0) + done);
    });
  });
  const rows = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
  const max = Math.max(1, ...rows.map((row) => row[1]));
  $("#muscleChart").innerHTML = rows.length
    ? rows.map(([muscle, count], index) => `
      <div class="muscle-row">
        <span>${escapeHtml(muscle)}</span>
        <div class="muscle-track"><div class="muscle-fill" style="width:${Math.max(5, Math.round(count / max * 100))}%;background:var(--${BAR_COLORS[index % BAR_COLORS.length]})"></div></div>
        <strong>${count}</strong>
      </div>
    `).join("")
    : `<div class="empty-state"><strong>No muscle data yet.</strong><span>Finish a workout to populate this chart.</span></div>`;
}

function renderTrendSelect() {
  const select = $("#trendExercise");
  const current = select.value || "ex_back_squat";
  select.innerHTML = state.exercises.map((exercise) => `<option value="${exercise.id}" ${exercise.id === current ? "selected" : ""}>${escapeHtml(exercise.name)}</option>`).join("");
}

function renderExerciseTrend() {
  const exerciseId = $("#trendExercise").value || state.exercises[0].id;
  const points = [];
  recentWorkouts().reverse().forEach((workout) => {
    workout.exercises.filter((entry) => entry.exerciseId === exerciseId).forEach((entry) => {
      const bestSet = entry.sets
        .filter((set) => set.done)
        .map((set) => ({ set, value: estimatedOneRepMax(toNumber(set.weight) || 0, toNumber(set.reps) || 0) }))
        .sort((a, b) => b.value - a.value)[0];
      if (bestSet) points.push({ date: workout.startedAt, value: bestSet.value });
    });
  });
  const last = points.slice(-8);
  const max = Math.max(1, ...last.map((point) => point.value));
  $("#exerciseTrend").innerHTML = last.length
    ? last.map((point, index) => `<div class="bar-slot"><div class="bar ${BAR_COLORS[index % BAR_COLORS.length]}" style="height:${Math.max(4, Math.round(point.value / max * 138))}px"></div><span class="bar-label">${formatDate(point.date)}</span></div>`).join("")
    : `<div class="empty-state"><strong>No trend yet.</strong><span>Log this exercise to see estimated 1RM.</span></div>`;
}

function renderCalendar() {
  const dates = new Set(state.workouts.map((workout) => todayKey(new Date(workout.startedAt))));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cells = [];
  for (let index = 34; index >= 0; index -= 1) {
    const day = new Date(today);
    day.setDate(today.getDate() - index);
    const key = todayKey(day);
    cells.push(`<div class="day-cell ${dates.has(key) ? "done" : ""} ${index === 0 ? "today" : ""}" title="${key}">${day.getDate()}</div>`);
  }
  $("#calendarGrid").innerHTML = cells.join("");
}

function renderBody() {
  renderBodyMetricInputs();
  renderBodyTrendSelect();
  renderBodySummary();
  renderSegmentGrid();
  const metrics = sortedBodyMetrics();
  $("#metricRows").innerHTML = metrics.length
    ? metrics.map((entry) => `
      <tr>
        <td>${formatDate(entry.date)}</td>
        <td>${metricDisplay(entry, "weight")}</td>
        <td>${metricDisplay(entry, "bodyFat")}</td>
        <td>${metricFirst(entry, ["skeletalMuscleMass", "muscleMass"])}</td>
        <td>${metricDisplay(entry, "bodyFatMass")}</td>
        <td>${metricFirst(entry, ["visceralFat", "visceralFatArea"])}</td>
        <td>${metricDisplay(entry, "totalBodyWater")}</td>
        <td>${metricDisplay(entry, "bmr")}</td>
        <td>${escapeHtml([entry.machine, entry.notes].filter(Boolean).join(" - ") || "-")}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="9">No composition scans saved yet.</td></tr>`;
  renderBodyChart();
  renderPhotos();
}

function sortedBodyMetrics() {
  return [...state.bodyMetrics].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderBodyMetricInputs() {
  const root = $("#bodyMetricInputs");
  if (!root || root.dataset.ready === "true") return;
  const groups = BODY_METRICS.reduce((map, field) => {
    if (!map.has(field.group)) map.set(field.group, []);
    map.get(field.group).push(field);
    return map;
  }, new Map());
  root.innerHTML = Array.from(groups.entries()).map(([group, fields]) => `
    <section class="body-input-group">
      <h3>${escapeHtml(group)}</h3>
      <div class="form-grid compact-fields">
        ${fields.map((field) => `
          <label>${escapeHtml(field.label)}
            <input name="${field.key}" inputmode="decimal" placeholder="${escapeHtml(field.unit)}">
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");
  root.dataset.ready = "true";
}

function renderBodyTrendSelect() {
  const select = $("#bodyMetricTrend");
  if (!select) return;
  const latest = sortedBodyMetrics()[0];
  const fallback = BODY_METRICS.find((field) => latest && latest[field.key])?.key || BODY_TREND_DEFAULT;
  const previous = select.value || fallback;
  select.innerHTML = BODY_METRICS.map((field) => `<option value="${field.key}">${escapeHtml(field.label)}</option>`).join("");
  select.value = BODY_METRICS.some((field) => field.key === previous) ? previous : BODY_TREND_DEFAULT;
}

function renderBodySummary() {
  const root = $("#bodySummary");
  if (!root) return;
  const metrics = sortedBodyMetrics();
  const latest = metrics[0];
  const previous = metrics[1];
  const preferredKeys = ["weight", "bodyFat", "bmr", "visceralFat", "waistHipRatio", "skeletalMuscleMass", "muscleMass", "muscleControl", "bodyFatMass"];
  const summaryKeys = latest
    ? preferredKeys.filter((key) => latest[key]).slice(0, 4)
    : ["weight", "bodyFat", "skeletalMuscleMass", "bodyFatMass"];
  const summaryFields = summaryKeys.map(bodyField);

  root.innerHTML = `
    <section class="body-hero-card">
      <span class="chip green">${latest ? escapeHtml(formatDateTime(latest.date)) : "Ready for first scan"}</span>
      <h2>${latest ? "Composition scan saved" : "Track muscle, fat, water and symmetry"}</h2>
      <p>${latest ? escapeHtml(latest.machine || "Latest body composition check-in") : "Save the values from your body composition machine and watch weight gain, muscle gain, fat change, water balance and left/right balance over time."}</p>
    </section>
    ${summaryFields.map((field) => `
      <article class="body-summary-card stat-${field.tone || "blue"}">
        <span>${escapeHtml(field.label)}</span>
        <strong>${metricDisplay(latest, field.key)}</strong>
        <small>${metricDelta(latest, previous, field.key)}</small>
      </article>
    `).join("")}
  `;
}

function renderSegmentGrid() {
  const root = $("#segmentGrid");
  if (!root) return;
  const latest = sortedBodyMetrics()[0];
  const segments = [
    ["Left arm", "leftArmLean", "leftArmFat"],
    ["Right arm", "rightArmLean", "rightArmFat"],
    ["Trunk", "trunkLean", "trunkFat"],
    ["Left leg", "leftLegLean", "leftLegFat"],
    ["Right leg", "rightLegLean", "rightLegFat"]
  ];

  if (!latest) {
    root.innerHTML = `<div class="empty-state"><strong>No segmental scan yet.</strong><span>Add lean and fat values for each limb when your machine provides them.</span></div>`;
    return;
  }

  root.innerHTML = `
    ${segments.map(([label, leanKey, fatKey], index) => `
      <article class="segment-card segment-${index}">
        <span>${escapeHtml(label)}</span>
        <strong>${metricDisplay(latest, leanKey)}</strong>
        <small>Lean mass</small>
        <b>${metricDisplay(latest, fatKey)}</b>
        <small>Fat mass</small>
      </article>
    `).join("")}
    <article class="segment-card segment-note">
      <span>Symmetry</span>
      <strong>${escapeHtml(renderSymmetryNotes(latest))}</strong>
      <small>Left/right differences from latest scan</small>
    </article>
  `;
}

function renderSymmetryNotes(latest) {
  const armLean = absoluteDiff(latest.leftArmLean, latest.rightArmLean);
  const legLean = absoluteDiff(latest.leftLegLean, latest.rightLegLean);
  const armFat = absoluteDiff(latest.leftArmFat, latest.rightArmFat);
  const legFat = absoluteDiff(latest.leftLegFat, latest.rightLegFat);
  const notes = [
    armLean !== null ? `Arms ${armLean}` : "",
    legLean !== null ? `Legs ${legLean}` : "",
    armFat !== null ? `Arm fat ${armFat}` : "",
    legFat !== null ? `Leg fat ${legFat}` : ""
  ].filter(Boolean);
  return notes.join(" | ") || "Add left/right values";
}

function absoluteDiff(left, right) {
  const l = toNumber(left);
  const r = toNumber(right);
  if (l === null || r === null) return null;
  return Math.abs(l - r).toFixed(1);
}

function renderBodyChart() {
  const select = $("#bodyMetricTrend");
  const key = (select && select.value) || BODY_TREND_DEFAULT;
  const field = bodyField(key);
  const points = [...state.bodyMetrics]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .filter((entry) => toNumber(entry[key]) !== null)
    .slice(-10);
  const values = points.map((entry) => toNumber(entry[key]));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1, max - min);
  $("#bodyChart").innerHTML = points.length
    ? points.map((entry, index) => {
      const value = toNumber(entry[key]);
      const height = max === min ? 118 : Math.max(18, Math.round(((value - min) / range) * 150) + 22);
      return `
        <div class="bar-slot body-bar-slot">
          <span class="body-bar-value">${escapeHtml(entry[key])}</span>
          <div class="bar ${BAR_COLORS[index % BAR_COLORS.length]}" style="height:${height}px"></div>
          <span class="bar-label">${formatDate(entry.date)}</span>
        </div>
      `;
    }).join("")
    : `<div class="empty-state"><strong>No ${escapeHtml(field.label.toLowerCase())} trend yet.</strong><span>Save a scan with this value to start the chart.</span></div>`;
}

function bodyField(key) {
  return BODY_METRICS.find((field) => field.key === key) || BODY_METRICS[0];
}

function metricDisplay(entry, key) {
  if (!entry) return "-";
  const value = entry[key];
  return value === undefined || value === null || value === "" ? "-" : escapeHtml(value);
}

function metricFirst(entry, keys) {
  const key = keys.find((item) => entry && entry[item]);
  return key ? metricDisplay(entry, key) : "-";
}

function metricDelta(latest, previous, key) {
  if (!latest || !latest[key]) return "Not logged";
  if (!previous || !previous[key]) return "First scan";
  const current = toNumber(latest[key]);
  const prior = toNumber(previous[key]);
  if (current === null || prior === null) return "Logged";
  const diff = Number((current - prior).toFixed(2));
  if (diff === 0) return "No change";
  return `${diff > 0 ? "+" : ""}${diff} since last scan`;
}

function renderPhotos() {
  $("#photoGrid").innerHTML = state.photos.length
    ? state.photos.slice().reverse().map((photo) => `
      <div class="photo-tile">
        <img src="${photo.dataUrl}" alt="Progress photo from ${escapeHtml(formatDate(photo.date))}">
        <button class="icon-button" data-delete-photo="${photo.id}" type="button" aria-label="Delete photo">${icon("i-trash")}</button>
      </div>
    `).join("")
    : `<div class="empty-state"><strong>No photos.</strong><span>Progress photos stay in this browser.</span></div>`;
}

function renderFeed() {
  renderProfilePanel();
  const ownCards = recentWorkouts().map((workout) => ({ type: "own", workout }));
  const imports = state.importedShares.map((item) => ({ type: "import", item }));
  const cards = [...ownCards, ...imports].sort((a, b) => new Date((b.workout || b.item).startedAt || (b.workout || b.item).date) - new Date((a.workout || a.item).startedAt || (a.workout || a.item).date));
  $("#feedList").innerHTML = cards.length
    ? cards.map(renderFeedCard).join("")
    : `<div class="empty-state"><strong>Your feed is empty.</strong><span>Finish a workout or import a shared card.</span></div>`;
}

function renderProfilePanel() {
  const initials = state.profile.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "LV";
  const bestRows = state.exercises
    .map((exercise) => ({ exercise, best: bestForExercise(exercise.id, "weight") }))
    .filter((row) => row.best)
    .sort((a, b) => b.best - a.best)
    .slice(0, 5);
  $("#profilePanel").innerHTML = `
    <div class="profile-avatar">${escapeHtml(initials)}</div>
    <h2 style="margin-top:12px">${escapeHtml(state.profile.name)}</h2>
    <p class="muted">${escapeHtml(state.profile.goal)}</p>
    <div class="chip-row" style="margin-top:12px">
      <span class="chip teal">${state.workouts.length} workouts</span>
      <span class="chip amber">${streakDays()} day streak</span>
    </div>
    <div class="leaderboard">
      <p class="eyebrow">Top lifts</p>
      ${bestRows.length ? bestRows.map((row, index) => `<div class="list-item"><div><strong>${index + 1}. ${escapeHtml(row.exercise.name)}</strong><small>${escapeHtml(row.exercise.muscle)}</small></div><span>${row.best} ${state.settings.unit}</span></div>`).join("") : `<div class="empty-state"><strong>No leaderboard yet.</strong><span>Log weighted sets to rank lifts.</span></div>`}
    </div>
  `;
}

function renderFeedCard(card) {
  if (card.type === "import") {
    const item = card.item;
    return `
      <article class="feed-card">
        <header>
          <div>
            <p class="eyebrow">Imported</p>
            <h2>${escapeHtml(item.name || "Shared workout")}</h2>
            <p class="muted">${escapeHtml(item.author || "Someone")} | ${formatDate(item.startedAt || item.date || new Date())}</p>
          </div>
          <span class="chip blue">${escapeHtml(item.source || "LiftVault")}</span>
        </header>
        <p>${escapeHtml(item.summary || "Imported workout card.")}</p>
      </article>
    `;
  }
  const workout = card.workout;
  const volume = Math.round(workoutVolume(workout));
  return `
    <article class="feed-card">
      <header>
        <div>
          <p class="eyebrow">${escapeHtml(workout.privacy === "shareable" ? "Shareable" : "Private")}</p>
          <h2>${escapeHtml(workout.name)}</h2>
          <p class="muted">${formatDateTime(workout.startedAt)} | ${formatDuration(workout.durationSeconds)} | ${volume.toLocaleString()} ${state.settings.unit}</p>
        </div>
        <span class="chip teal">${workoutSetCount(workout)} sets</span>
      </header>
      <div class="stack">
        ${workout.exercises.slice(0, 5).map((entry) => `<div class="feed-line"><div><strong>${escapeHtml(entry.name)}</strong><small>${entry.sets.filter((set) => set.done).length} sets</small></div><span>${bestSetText(entry)}</span></div>`).join("")}
      </div>
      ${workout.prs && workout.prs.length ? `<div class="chip-row">${workout.prs.slice(0, 5).map((pr) => `<span class="chip amber">PR ${escapeHtml(pr.label)}</span>`).join("")}</div>` : ""}
      <div class="card-actions">
        <button class="command" data-share-workout="${workout.id}" type="button">${icon("i-share")}Share text</button>
        <button class="command" data-download-workout="${workout.id}" type="button">${icon("i-download")}JSON</button>
        <button class="command danger" data-delete-workout="${workout.id}" type="button">${icon("i-trash")}Delete</button>
      </div>
    </article>
  `;
}

function bestSetText(entry) {
  const best = entry.sets
    .filter((set) => set.done)
    .map((set) => ({ weight: toNumber(set.weight) || 0, reps: toNumber(set.reps) || 0 }))
    .sort((a, b) => (b.weight * b.reps) - (a.weight * a.reps))[0];
  if (!best) return "-";
  if (best.weight) return `${best.weight} x ${best.reps}`;
  return `${best.reps} reps`;
}

function renderSettings() {
  $("#profileForm").name.value = state.profile.name;
  $("#profileForm").goal.value = state.profile.goal;
  $("#profileForm").weeklyTarget.value = state.profile.weeklyTarget;
  $("#settingsForm").unit.value = state.settings.unit;
  $("#settingsForm").restSeconds.value = state.settings.restSeconds;
  $("#settingsForm").privacy.value = state.settings.privacy;
}

function activeTotals() {
  if (!state.active) return { totalSets: 0, doneSets: 0, volume: 0 };
  let totalSets = 0;
  let doneSets = 0;
  let volume = 0;
  state.active.exercises.forEach((exercise) => {
    exercise.sets.forEach((set) => {
      totalSets += 1;
      if (set.done) {
        doneSets += 1;
        volume += (toNumber(set.weight) || 0) * (toNumber(set.reps) || 0);
      }
    });
  });
  return { totalSets, doneSets, volume };
}

function startEmptyWorkout() {
  if (state.active && !confirm("Replace the active workout?")) return;
  state.active = {
    id: uid("active"),
    name: "Workout",
    routineId: null,
    startedAt: new Date().toISOString(),
    privacy: state.settings.privacy,
    notes: "",
    exercises: []
  };
  saveState();
  closeModal();
  switchView("logger");
  toast("Workout started", "Add exercises and log your sets.");
}

function startRoutine(routineId) {
  const routineItem = routineById(routineId);
  if (!routineItem) return;
  if (state.active && !confirm("Replace the active workout?")) return;
  state.active = {
    id: uid("active"),
    name: routineItem.name,
    routineId,
    startedAt: new Date().toISOString(),
    privacy: state.settings.privacy,
    notes: "",
    exercises: routineItem.exercises.map((template) => makeActiveExercise(template.exerciseId, template))
  };
  saveState();
  closeModal();
  switchView("logger");
  toast("Routine started", routineItem.name);
}

function makeActiveExercise(exerciseId, template = {}) {
  const exercise = exerciseById(exerciseId);
  const count = Number(template.sets || 3);
  return {
    instanceId: uid("aex"),
    exerciseId,
    name: exercise ? exercise.name : "Custom exercise",
    muscle: exercise ? exercise.muscle : "Other",
    equipment: exercise ? exercise.equipment : "Other",
    restSeconds: Number(template.restSeconds || state.settings.restSeconds),
    targetReps: template.reps || "8-10",
    sets: Array.from({ length: count }, () => ({
      type: "normal",
      weight: "",
      reps: "",
      rpe: template.targetRpe || "",
      done: false
    }))
  };
}

function updateActiveField(field, value) {
  if (!state.active) return;
  state.active[field] = value;
  saveState();
  renderDashboard();
}

function addExerciseToActive(exerciseId) {
  if (!state.active) startEmptyWorkout();
  state.active.exercises.push(makeActiveExercise(exerciseId));
  saveState();
  renderLogger();
  renderDashboard();
  toast("Exercise added", exerciseById(exerciseId)?.name || "Custom exercise");
}

function addSetToActive(exerciseIndex) {
  const entry = state.active?.exercises[exerciseIndex];
  if (!entry) return;
  const last = entry.sets[entry.sets.length - 1] || {};
  entry.sets.push({
    type: "normal",
    weight: last.weight || "",
    reps: last.reps || "",
    rpe: last.rpe || "",
    done: false
  });
  saveState();
  renderLogger();
}

function deleteActiveSet(exerciseIndex, setIndex) {
  const entry = state.active?.exercises[exerciseIndex];
  if (!entry || entry.sets.length <= 1) return;
  entry.sets.splice(setIndex, 1);
  saveState();
  renderLogger();
}

function removeActiveExercise(exerciseIndex) {
  if (!state.active) return;
  state.active.exercises.splice(exerciseIndex, 1);
  saveState();
  renderLogger();
  renderDashboard();
}

function updateSetField(exerciseIndex, setIndex, field, value) {
  const set = state.active?.exercises[exerciseIndex]?.sets[setIndex];
  if (!set) return;
  set[field] = value;
  saveState();
  renderDashboard();
}

function toggleSetDone(exerciseIndex, setIndex) {
  const entry = state.active?.exercises[exerciseIndex];
  const set = entry?.sets[setIndex];
  if (!entry || !set) return;
  set.done = !set.done;
  if (set.done) {
    const pr = activeSetPr(entry.exerciseId, set);
    if (pr) toast("New PR", pr);
    startTimer(entry.restSeconds || state.settings.restSeconds, `Rest after ${entry.name}`);
  }
  saveState();
  renderLogger();
  renderDashboard();
}

function activeSetPr(exerciseId, set) {
  const weight = toNumber(set.weight) || 0;
  const reps = toNumber(set.reps) || 0;
  if (!weight || !reps) return "";
  const e1rm = estimatedOneRepMax(weight, reps);
  const prev = bestForExercise(exerciseId, "e1rm");
  if (prev && e1rm > prev) return `${Math.round(e1rm)} ${state.settings.unit} estimated 1RM`;
  const bestWeight = bestForExercise(exerciseId, "weight");
  if (bestWeight && weight > bestWeight) return `${weight} ${state.settings.unit} max weight`;
  return "";
}

function previousSetText(exerciseId, setIndex) {
  const workouts = recentWorkouts();
  for (const workout of workouts) {
    const entry = workout.exercises.find((exercise) => exercise.exerciseId === exerciseId);
    if (!entry) continue;
    const set = entry.sets[setIndex] || entry.sets.filter((item) => item.done).at(-1);
    if (!set) continue;
    const weight = set.weight ? `${set.weight}${state.settings.unit}` : "BW";
    const reps = set.reps ? ` x ${set.reps}` : "";
    return `${weight}${reps}`;
  }
  return "";
}

function finishActiveWorkout() {
  if (!state.active) {
    toast("No active workout", "Start a workout first.");
    return;
  }
  const totals = activeTotals();
  if (!totals.doneSets && !confirm("Finish without any completed sets?")) return;

  const workout = structuredCloneSafe(state.active);
  workout.id = uid("workout");
  workout.endedAt = new Date().toISOString();
  workout.durationSeconds = Math.round((new Date(workout.endedAt) - new Date(workout.startedAt)) / 1000);
  workout.exercises = workout.exercises.map((entry) => {
    const exercise = exerciseById(entry.exerciseId);
    return Object.assign({}, entry, {
      name: exercise ? exercise.name : entry.name,
      muscle: exercise ? exercise.muscle : entry.muscle
    });
  });
  workout.prs = detectWorkoutPrs(workout);
  state.workouts.push(workout);
  state.active = null;
  saveState();
  renderAll();
  switchView("feed");
  toast("Workout saved", `${workoutSetCount(workout)} sets logged.`);
}

function structuredCloneSafe(value) {
  if (window.structuredClone) return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function detectWorkoutPrs(workout) {
  const prs = [];
  workout.exercises.forEach((entry) => {
    const exercise = exerciseById(entry.exerciseId) || entry;
    const previousE1rm = bestForExercise(entry.exerciseId, "e1rm");
    const previousWeight = bestForExercise(entry.exerciseId, "weight");
    entry.sets.forEach((set) => {
      if (!set.done) return;
      const weight = toNumber(set.weight) || 0;
      const reps = toNumber(set.reps) || 0;
      const e1rm = estimatedOneRepMax(weight, reps);
      if (previousE1rm && e1rm > previousE1rm) {
        prs.push({ exerciseId: entry.exerciseId, label: `${exercise.name} ${Math.round(e1rm)} ${state.settings.unit} e1RM`, value: e1rm, type: "e1rm" });
      } else if (previousWeight && weight > previousWeight) {
        prs.push({ exerciseId: entry.exerciseId, label: `${exercise.name} ${weight} ${state.settings.unit}`, value: weight, type: "weight" });
      }
    });
  });
  return prs.slice(0, 10);
}

function openStartModal() {
  openModal(`
    <div class="modal-body">
      <div class="modal-title">
        <p class="eyebrow">Start</p>
        <h1 id="modalTitle">Choose workout</h1>
        <p>Launch a routine or start from a blank log.</p>
      </div>
      <div class="button-row modal-section">
        <button class="command primary" data-action="start-empty" type="button">${icon("i-plus")}Empty workout</button>
      </div>
      <div class="routine-grid modal-section">
        ${state.routines.map((routineItem) => renderRoutineCard(routineItem, true)).join("")}
      </div>
    </div>
  `);
}

function openExercisePicker() {
  const cards = state.exercises.map((exercise) => `
    <div class="exercise-row">
      <div>
        <strong>${escapeHtml(exercise.name)}</strong>
        <small>${escapeHtml(exercise.muscle)} | ${escapeHtml(exercise.equipment)}</small>
      </div>
      <button class="mini-command primary" data-add-active-exercise="${exercise.id}" type="button">${icon("i-plus")}Add</button>
    </div>
  `).join("");
  openModal(`
    <div class="modal-body">
      <div class="modal-title">
        <p class="eyebrow">Exercise</p>
        <h1 id="modalTitle">Add exercise</h1>
      </div>
      <div class="stack modal-section">${cards}</div>
    </div>
  `);
}

function openExerciseDetail(exerciseId) {
  const exercise = exerciseById(exerciseId);
  if (!exercise) return;
  const history = recentWorkouts().flatMap((workout) =>
    workout.exercises
      .filter((entry) => entry.exerciseId === exerciseId)
      .map((entry) => ({ workout, entry }))
  ).slice(0, 8);
  openModal(`
    <div class="modal-body">
      <div class="modal-title">
        <p class="eyebrow">Exercise guide</p>
        <h1 id="modalTitle">${escapeHtml(exercise.name)}</h1>
        <p>${escapeHtml(exercise.muscle)} | ${escapeHtml(exercise.equipment)} | ${escapeHtml(exercise.kind)}</p>
      </div>
      <div class="chip-row modal-section">
        <span class="chip teal">Best weight ${bestForExercise(exercise.id, "weight") || 0} ${state.settings.unit}</span>
        <span class="chip amber">Best e1RM ${Math.round(bestForExercise(exercise.id, "e1rm")) || 0} ${state.settings.unit}</span>
        ${exercise.secondary.map((muscle) => `<span class="chip">${escapeHtml(muscle)}</span>`).join("")}
      </div>
      <div class="modal-section">
        <h2>Cues</h2>
        <div class="stack" style="margin-top:10px">
          ${exercise.cues.map((cue, index) => `<div class="list-item"><strong>${index + 1}</strong><span>${escapeHtml(cue)}</span></div>`).join("")}
        </div>
      </div>
      <div class="modal-section">
        <h2>History</h2>
        <div class="stack" style="margin-top:10px">
          ${history.length ? history.map(({ workout, entry }) => `<div class="history-line"><div><strong>${formatDate(workout.startedAt)}</strong><small>${escapeHtml(workout.name)}</small></div><span>${bestSetText(entry)}</span></div>`).join("") : `<div class="empty-state"><strong>No history.</strong><span>Log this exercise to build its graph.</span></div>`}
        </div>
      </div>
      <div class="button-row modal-section">
        ${state.active ? `<button class="command primary" data-add-active-exercise="${exercise.id}" type="button">${icon("i-plus")}Add to workout</button>` : ""}
      </div>
    </div>
  `);
}

function openCustomExerciseModal() {
  openModal(`
    <div class="modal-body">
      <div class="modal-title">
        <p class="eyebrow">Custom</p>
        <h1 id="modalTitle">New exercise</h1>
      </div>
      <form class="form-grid modal-section" id="customExerciseForm">
        <label>Name <input name="name" required placeholder="Machine row, belt squat, rehab drill"></label>
        <label>Primary muscle <input name="muscle" required placeholder="Back, glutes, chest"></label>
        <label>Equipment <input name="equipment" required placeholder="Machine, cable, dumbbell"></label>
        <label>Tracking
          <select name="kind">
            <option>Weighted Reps</option>
            <option>Reps</option>
            <option>Time</option>
            <option>Distance</option>
          </select>
        </label>
        <label class="full">Cues <textarea name="cues" placeholder="One cue per line"></textarea></label>
        <button class="command primary" type="submit">${icon("i-check")}Save exercise</button>
      </form>
    </div>
  `);
}

function saveCustomExercise(formData) {
  const cues = String(formData.get("cues") || "")
    .split(/\n+/)
    .map((cue) => cue.trim())
    .filter(Boolean);
  state.exercises.push({
    id: uid("ex"),
    name: String(formData.get("name") || "").trim(),
    muscle: String(formData.get("muscle") || "").trim(),
    secondary: [],
    equipment: String(formData.get("equipment") || "").trim(),
    kind: String(formData.get("kind") || "Weighted Reps"),
    cues: cues.length ? cues : ["Set up consistently.", "Control the rep.", "Log notes if anything changes."],
    custom: true
  });
  saveState();
  hydrateLibraryFilters();
  renderLibrary();
  closeModal();
  toast("Custom exercise saved");
}

function newRoutine() {
  const newItem = {
    id: uid("rt"),
    name: "New Routine",
    focus: "Custom plan",
    folder: "My routines",
    exercises: []
  };
  state.routines.unshift(newItem);
  saveState();
  renderRoutines();
  openRoutineEditor(newItem.id);
}

function openRoutineEditor(routineId) {
  const routineItem = routineById(routineId);
  if (!routineItem) return;
  const exerciseOptions = state.exercises.map((exercise) => `<option value="${exercise.id}">${escapeHtml(exercise.name)}</option>`).join("");
  openModal(`
    <div class="modal-body">
      <div class="modal-title">
        <p class="eyebrow">Routine editor</p>
        <h1 id="modalTitle">${escapeHtml(routineItem.name)}</h1>
      </div>
      <div class="form-grid modal-section">
        <label>Name <input data-routine-id="${routineItem.id}" data-routine-field="name" value="${escapeHtml(routineItem.name)}"></label>
        <label>Focus <input data-routine-id="${routineItem.id}" data-routine-field="focus" value="${escapeHtml(routineItem.focus || "")}"></label>
      </div>
      <div class="modal-section">
        <h2>Exercises</h2>
        <div class="scroll-x">
          ${routineItem.exercises.length ? routineItem.exercises.map((template) => renderTemplateRow(routineItem.id, template)).join("") : `<div class="empty-state"><strong>No exercises.</strong><span>Add one below.</span></div>`}
        </div>
      </div>
      <div class="form-grid modal-section">
        <label class="full">Add exercise
          <select id="routineExerciseSelect">${exerciseOptions}</select>
        </label>
        <button class="command primary" data-routine-add-exercise="${routineItem.id}" type="button">${icon("i-plus")}Add exercise</button>
      </div>
      <div class="button-row modal-section">
        <button class="command primary" data-start-routine="${routineItem.id}" type="button">${icon("i-play")}Start routine</button>
      </div>
    </div>
  `);
}

function renderTemplateRow(routineId, template) {
  const exerciseOptions = state.exercises.map((exercise) => `<option value="${exercise.id}" ${exercise.id === template.exerciseId ? "selected" : ""}>${escapeHtml(exercise.name)}</option>`).join("");
  return `
    <div class="routine-editor-row">
      <label>Exercise
        <select data-template-field="${routineId}:${template.id}:exerciseId">${exerciseOptions}</select>
      </label>
      <label>Sets <input data-template-field="${routineId}:${template.id}:sets" value="${escapeHtml(template.sets)}" inputmode="numeric"></label>
      <label>Reps <input data-template-field="${routineId}:${template.id}:reps" value="${escapeHtml(template.reps)}"></label>
      <label>Rest <input data-template-field="${routineId}:${template.id}:restSeconds" value="${escapeHtml(template.restSeconds)}" inputmode="numeric"></label>
      <button class="icon-button" data-remove-template="${routineId}:${template.id}" type="button" aria-label="Remove template exercise">${icon("i-trash")}</button>
    </div>
  `;
}

function updateRoutineField(routineId, field, value) {
  const routineItem = routineById(routineId);
  if (!routineItem) return;
  routineItem[field] = value;
  saveState();
  renderRoutines();
}

function updateTemplateField(routineId, templateId, field, value) {
  const template = routineById(routineId)?.exercises.find((row) => row.id === templateId);
  if (!template) return;
  template[field] = field === "sets" || field === "restSeconds" ? Number(value) || 0 : value;
  saveState();
  renderRoutines();
}

function addTemplateExercise(routineId) {
  const select = $("#routineExerciseSelect");
  const routineItem = routineById(routineId);
  if (!routineItem || !select.value) return;
  routineItem.exercises.push({
    id: uid("tmpl"),
    exerciseId: select.value,
    sets: 3,
    reps: "8-10",
    restSeconds: state.settings.restSeconds,
    targetRpe: 8,
    note: ""
  });
  saveState();
  renderRoutines();
  openRoutineEditor(routineId);
}

function removeTemplateExercise(routineId, templateId) {
  const routineItem = routineById(routineId);
  if (!routineItem) return;
  routineItem.exercises = routineItem.exercises.filter((row) => row.id !== templateId);
  saveState();
  renderRoutines();
  openRoutineEditor(routineId);
}

function duplicateRoutine(routineId) {
  const routineItem = routineById(routineId);
  if (!routineItem) return;
  const copy = structuredCloneSafe(routineItem);
  copy.id = uid("rt");
  copy.name = `${routineItem.name} Copy`;
  copy.exercises = copy.exercises.map((row) => Object.assign({}, row, { id: uid("tmpl") }));
  state.routines.unshift(copy);
  saveState();
  renderRoutines();
  toast("Routine duplicated", copy.name);
}

function deleteRoutine(routineId) {
  const routineItem = routineById(routineId);
  if (!routineItem || !confirm(`Delete ${routineItem.name}?`)) return;
  state.routines = state.routines.filter((item) => item.id !== routineId);
  saveState();
  renderRoutines();
}

function saveMetrics(formData) {
  const entry = {
    id: uid("metric"),
    date: formData.get("scanDate") ? new Date(`${formData.get("scanDate")}T12:00:00`).toISOString() : new Date().toISOString(),
    machine: String(formData.get("machine") || "").trim(),
    notes: String(formData.get("notes") || "").trim()
  };
  BODY_METRICS.forEach((field) => {
    entry[field.key] = String(formData.get(field.key) || "").trim();
  });
  const trackedCount = BODY_METRICS.filter((field) => entry[field.key]).length;
  if (!trackedCount && !entry.machine && !entry.notes) return;
  state.bodyMetrics.push(entry);
  saveState();
  $("#metricForm").reset();
  renderBody();
  toast("Body scan saved", trackedCount ? `${trackedCount} values tracked.` : "Notes saved.");
}

async function handlePhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  try {
    const dataUrl = await resizeImage(file, 920);
    state.photos.push({ id: uid("photo"), date: new Date().toISOString(), dataUrl });
    saveState();
    renderPhotos();
    toast("Photo saved");
  } catch {
    toast("Photo failed", "Try a smaller image.", "danger");
  } finally {
    event.target.value = "";
  }
}

function resizeImage(file, maxSize) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.78));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function deletePhoto(photoId) {
  state.photos = state.photos.filter((photo) => photo.id !== photoId);
  saveState();
  renderPhotos();
}

function saveProfile(formData) {
  state.profile.name = String(formData.get("name") || "You").trim();
  state.profile.goal = String(formData.get("goal") || "").trim();
  state.profile.weeklyTarget = Math.max(1, Number(formData.get("weeklyTarget")) || 4);
  saveState();
  renderDashboard();
  renderFeed();
  toast("Profile saved");
}

function saveSettings(formData) {
  state.settings.unit = String(formData.get("unit") || "kg");
  state.settings.restSeconds = Math.max(15, Number(formData.get("restSeconds")) || 120);
  state.settings.privacy = String(formData.get("privacy") || "private");
  saveState();
  renderAll();
  toast("Settings saved");
}

function startTimer(seconds, label = "Rest") {
  state.timer = {
    endsAt: Date.now() + seconds * 1000,
    seconds,
    label
  };
  saveState();
  renderTimer();
}

function resetTimer() {
  state.timer = null;
  saveState();
  renderTimer();
}

function startClock() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    renderTimer();
    updateLiveDurations();
  }, 500);
  renderTimer();
}

function renderTimer() {
  const display = $("#timerDisplay");
  const label = $("#timerLabel");
  if (!display || !label) return;
  if (!state.timer) {
    display.textContent = "00:00";
    label.textContent = "Ready";
    return;
  }
  const left = Math.max(0, Math.ceil((state.timer.endsAt - Date.now()) / 1000));
  display.textContent = formatDuration(left);
  label.textContent = state.timer.label || "Rest";
  if (left <= 0) {
    state.timer = null;
    saveState();
    toast("Rest complete", "Next set is ready.");
  }
}

function updateLiveDurations() {
  $$(".duration-live").forEach((node) => {
    const start = node.dataset.start;
    if (!start) return;
    node.textContent = formatDuration((Date.now() - new Date(start)) / 1000);
  });
}

function deleteWorkout(workoutId) {
  const workout = workoutById(workoutId);
  if (!workout || !confirm(`Delete ${workout.name}?`)) return;
  state.workouts = state.workouts.filter((item) => item.id !== workoutId);
  saveState();
  renderAll();
}

async function shareWorkout(workoutId) {
  const workout = workoutById(workoutId);
  if (!workout) return;
  const text = workoutShareText(workout);
  if (navigator.share) {
    try {
      await navigator.share({ title: workout.name, text });
      return;
    } catch {
      // Fall through to clipboard.
    }
  }
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied share text", workout.name);
  } catch {
    toast("Share text", "Clipboard was not available.", "danger");
  }
}

function workoutShareText(workout) {
  const volume = Math.round(workoutVolume(workout));
  const lines = [
    `${state.profile.name} finished ${workout.name}`,
    `${formatDateTime(workout.startedAt)} | ${workoutSetCount(workout)} sets | ${volume.toLocaleString()} ${state.settings.unit}`,
    ...workout.exercises.map((entry) => `${entry.name}: ${entry.sets.filter((set) => set.done).length} sets, best ${bestSetText(entry)}`)
  ];
  if (workout.prs && workout.prs.length) lines.push(`PRs: ${workout.prs.map((pr) => pr.label).join(", ")}`);
  return lines.join("\n");
}

function workoutSharePayload(workout) {
  return {
    type: "liftvault.workout",
    version: 1,
    source: "LiftVault",
    author: state.profile.name,
    name: workout.name,
    startedAt: workout.startedAt,
    summary: workoutShareText(workout),
    workout
  };
}

function downloadWorkoutShare(workoutId) {
  const workout = workoutById(workoutId);
  if (!workout) return;
  downloadJson(`liftvault-${slug(workout.name)}.json`, workoutSharePayload(workout));
}

function exportBackup() {
  downloadJson(`liftvault-backup-${todayKey()}.json`, state);
}

function downloadJson(filename, value) {
  const blob = new Blob([JSON.stringify(value, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "workout";
}

function importBackupFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  readJsonFile(file).then((value) => {
    if (!value || !Array.isArray(value.exercises) || !Array.isArray(value.routines)) throw new Error("Invalid backup");
    state = normalizeState(value, seedState());
    saveState();
    hydrateLibraryFilters();
    renderAll();
    toast("Backup imported");
  }).catch(() => toast("Import failed", "That file is not a LiftVault backup.", "danger")).finally(() => {
    event.target.value = "";
  });
}

function importShareFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  readJsonFile(file).then((value) => {
    if (!value || value.type !== "liftvault.workout") throw new Error("Invalid share");
    state.importedShares.push({
      id: uid("share"),
      importedAt: new Date().toISOString(),
      author: value.author,
      name: value.name,
      source: value.source,
      startedAt: value.startedAt,
      summary: value.summary
    });
    saveState();
    renderFeed();
    toast("Workout card imported");
  }).catch(() => toast("Import failed", "That file is not a workout share.", "danger")).finally(() => {
    event.target.value = "";
  });
}

function readJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result));
      } catch (error) {
        reject(error);
      }
    };
    reader.readAsText(file);
  });
}

function resetApp() {
  if (!confirm("Reset LiftVault data on this device? Export a backup first if you need it.")) return;
  localStorage.removeItem(STORE_KEY);
  state = seedState();
  hydrateLibraryFilters();
  renderAll();
  switchView("dashboard");
  toast("App reset");
}

function openModal(html) {
  $("#modalContent").innerHTML = html;
  $("#modal").classList.add("open");
  $("#modal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#modal").classList.remove("open");
  $("#modal").setAttribute("aria-hidden", "true");
  $("#modalContent").innerHTML = "";
  document.body.style.overflow = "";
}

function toast(title, detail = "", tone = "normal") {
  const node = document.createElement("div");
  node.className = "toast";
  if (tone === "danger") node.style.borderLeftColor = "var(--danger)";
  node.innerHTML = `${escapeHtml(title)}${detail ? `<small>${escapeHtml(detail)}</small>` : ""}`;
  $("#toastRegion").appendChild(node);
  setTimeout(() => {
    node.style.opacity = "0";
    node.style.transform = "translateY(6px)";
  }, 2600);
  setTimeout(() => node.remove(), 3200);
}

async function promptInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    $("#installBtn").hidden = true;
    return;
  }
  toast("Use browser menu", "Choose Add to Home Screen or Install app.");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol === "file:") return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

document.addEventListener("DOMContentLoaded", init);
