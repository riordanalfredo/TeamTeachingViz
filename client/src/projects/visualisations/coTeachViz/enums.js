const TeacherEnums = Object.freeze({
  RED: "RED",
  GREEN: "GREEN",
  BLUE: "BLUE",
});

const TeacherBackEndEnums = Object.freeze({
  R: "RED",
  G: "GREEN",
  B: "BLUE",
});

// const SpatialPedagogyOrder = Object.freeze({
//   authoritative: { lecturing: 1, assisting: 2 },
//   supervisory: { monitoring: 1, surveillance: 2 },
//   interactional: {
//     "1-1 student teacher interaction": 1,
//     "teacher-teacher interaction": 2,
//   },
//   personal: { personal: 1, watching: 2 },
// });

const SpatialPedEnums = Object.freeze({
  AUTHORITATIVE: "authoritative",
  SUPERVISORY: "supervisory",
  INTERACTIONAL: "interactional",
  PERSONAL: "personal",
});

const PedagogyMapEnums = Object.freeze({
  authoritative: ["lecturing", "assisting"],
  supervisory: ["monitoring", "surveillance"],
  interactional: [
    "1-1 student teacher interaction",
    "teacher-teacher interaction",
  ],
  personal: ["personal", "watching"],
});

const PedagogyLabelMapping = {
  lecturing: "delivering lecture",
  assisting: "supporting lecture",
  monitoring: "observing classroom",
  surveillance: "looking at student's monitor",
  "1-1 student teacher interaction": "teacher-student interaction",
  "teacher-teacher interaction": "teacher-teacher interaction",
  personal: "self-preparation (on the phone/laptop)",
  watching: "watching lecture",
};

const CoTeachToolTips = {
  "one-teacher-one-observer":
    "One teacher leads the lesson while the other observes classroom, waiting to be called by student (s). ",
  "one-teacher-one-assistant":
    "One teacher leads the lesson while the other assists and provides support (helping 1-1 student).",
  "alternative-teaching":
    "One teacher leads the main lesson with the larger group, while the other teacher works with a smaller group for specialized instruction or enrichment.",
  "team-teaching":
    "Both teachers collaboratively plan and deliver the lesson together, sharing equal responsibility for instruction.",
  "parallel-teaching":
    "The class is split into two groups, and both teachers simultaneously teach the same content to their respective groups.",
};

const CoTeachButtonsToolTips = {
  authoritative:
    "Lecturing: A space usage when teacher is positioned to conduct formal teaching as well as to provide instructions to facilitate the lesson. It includes a situation when teacher helps another teacher in lecture space.",
  supervisory:
    "Observing/Monitoring: A space usage when teacher moves between the rows of the students’ desk without offering consultation to the student(s). It includes when teachers looks at student's laptops while students are working on a task.",
  interactional:
    "Interacting: A space usage when teacher communicates with student(s) or other teacher(s).",
  personal:
    "Personal: A space usage when teacher is on their own laptop/phone or prepare for the next stage of the lesson. It also includes when the teacher is watching/listening to the lead teacher's lecture, in which they may not look at students in classroom.",
  RED: "Click to filter by Red teacher.",
  GREEN: "Click to filter by Green teacher.",
  BLUE: "Click to filter by Blue teacher.",
};

export {
  TeacherEnums,
  TeacherBackEndEnums,
  SpatialPedEnums,
  PedagogyMapEnums,
  PedagogyLabelMapping,
  CoTeachToolTips,
  CoTeachButtonsToolTips,
};
