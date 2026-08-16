import React, { useState, useRef } from "react";
import {
  Plus, Trash2, Download, Eye, Pencil, X, RotateCcw,
} from "lucide-react";

const bg = "#f0f0f0", white = "#ffffff", border = "#cccccc";
const text = "#222222", muted = "#666666", blue = "#3b82f6";
const green = "#22a55a", red = "#e74c3c", font = "Arial, Helvetica, sans-serif";

const emptyPersonal = { fullName: "", email: "", phone: "", location: "", linkedin: "", github: "" };
const emptyState = { personal: emptyPersonal, education: [], experience: [], skills: [] };
const uid = () => Math.random().toString(36).slice(2, 10);

const exampleData = {
  personal: { fullName: "Sara Mulugeta", email: "sara.mulugeta@student.edu", phone: "+251 92 345 6789", location: "Nazret, Ethiopia", linkedin: "linkedin.com/in/sara-mulugeta", github: "github.com/saramul" },
  education: [
    { id: "ed1", school: "Rift Valley University", degree: "B.Sc.", field: "Computer Science (in progress)", startDate: "2023-09", endDate: "" },
    { id: "ed2", school: "Nexus Front-End Boot Camp", degree: "Certificate", field: "Front-End Web Development", startDate: "2026-01", endDate: "2026-05" }
  ],
  experience: [
    { id: "ex1", company: "Campus IT Help Desk", role: "Student Volunteer", startDate: "2025-09", endDate: "", description: "Helped fellow students troubleshoot laptop and Wi-Fi issues, wrote simple step-by-step guides for common problems, and assisted staff during lab setup for first-year orientation." },
    { id: "ex2", company: "Local Community Center", role: "Volunteer Tutor", startDate: "2024-06", endDate: "2024-08", description: "Tutored high school students in basic computer skills and introductory math over summer break, two afternoons a week." }
  ],
  skills: ["HTML", "CSS", "JavaScript (basics)", "Git & GitHub", "Problem Solving", "Team Work", "MS Office"]
};

const Field = ({ label, ...props }) => (
  <div style={{ marginBottom: 10 }}>
    <label style={{ display: "block", fontSize: 14, marginBottom: 4, fontFamily: font, color: text }}>{label}</label>
    <input {...props} style={{ width: "100%", padding: 8, fontSize: 14, fontFamily: font, border: `1px solid ${border}`, borderRadius: 4, boxSizing: "border-box" }} />
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div style={{ marginBottom: 10 }}>
    <label style={{ display: "block", fontSize: 14, marginBottom: 4, fontFamily: font, color: text }}>{label}</label>
    <textarea {...props} rows={3} style={{ width: "100%", padding: 8, fontSize: 14, fontFamily: font, border: `1px solid ${border}`, borderRadius: 4, boxSizing: "border-box", resize: "vertical" }} />
  </div>
);

const Box = ({ title, children }) => (
  <div style={{ background: white, border: `1px solid ${border}`, borderRadius: 4, padding: 15, marginBottom: 15 }}>
    <h2 style={{ margin: "0 0 12px 0", fontSize: 16, fontFamily: font, color: text, borderBottom: `2px solid ${blue}`, paddingBottom: 6 }}>{title}</h2>
    {children}
  </div>
);

const Button = ({ onClick, children, color = blue, outline }) => (
  <button type="button" onClick={onClick} style={{
    background: outline ? white : color, color: outline ? color : white, border: `1px solid ${color}`,
    borderRadius: 4, padding: "7px 12px", fontSize: 13, fontFamily: font, cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 5
  }}>{children}</button>
);

const PersonalForm = ({ personal, onChange }) => {
  const set = (key) => (e) => onChange({ ...personal, [key]: e.target.value });
  return (
    <Box title="Personal Info">
      <Field label="Full Name" value={personal.fullName} onChange={set("fullName")} placeholder="Jane Doe" />
      <Field label="Email" value={personal.email} onChange={set("email")} placeholder="jane@email.com" />
      <Field label="Phone" value={personal.phone} onChange={set("phone")} placeholder="555-010-2020" />
      <Field label="Location" value={personal.location} onChange={set("location")} placeholder="City, Country" />
      <Field label="LinkedIn" value={personal.linkedin} onChange={set("linkedin")} placeholder="linkedin.com/in/janedoe" />
      <Field label="GitHub" value={personal.github} onChange={set("github")} placeholder="github.com/janedoe" />
    </Box>
  );
};

const EducationForm = ({ education, onAdd, onUpdate, onRemove }) => (
  <Box title="Education">
    {education.map((entry, i) => (
      <div key={entry.id} style={{ border: `1px dashed ${border}`, borderRadius: 4, padding: 10, marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <strong style={{ fontFamily: font, fontSize: 13, color: muted }}>Entry {i + 1}</strong>
          <button type="button" onClick={() => onRemove(entry.id)} title="Remove" style={{ background: "none", border: "none", color: red, cursor: "pointer" }}><Trash2 size={16} /></button>
        </div>
        <Field label="School" value={entry.school} onChange={(e) => onUpdate(entry.id, "school", e.target.value)} placeholder="University name" />
        <Field label="Degree" value={entry.degree} onChange={(e) => onUpdate(entry.id, "degree", e.target.value)} placeholder="B.Sc." />
        <Field label="Field of Study" value={entry.field} onChange={(e) => onUpdate(entry.id, "field", e.target.value)} placeholder="Computer Science" />
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ flex: 1 }}><Field label="Start Date" type="month" value={entry.startDate} onChange={(e) => onUpdate(entry.id, "startDate", e.target.value)} /></div>
          <div style={{ flex: 1 }}><Field label="End Date" type="month" value={entry.endDate} onChange={(e) => onUpdate(entry.id, "endDate", e.target.value)} /></div>
        </div>
      </div>
    ))}
    <Button onClick={onAdd}><Plus size={14} /> Add Education</Button>
  </Box>
);

const ExperienceForm = ({ experience, onAdd, onUpdate, onRemove }) => (
  <Box title="Work Experience">
    {experience.map((entry, i) => (
      <div key={entry.id} style={{ border: `1px dashed ${border}`, borderRadius: 4, padding: 10, marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <strong style={{ fontFamily: font, fontSize: 13, color: muted }}>Entry {i + 1}</strong>
          <button type="button" onClick={() => onRemove(entry.id)} title="Remove" style={{ background: "none", border: "none", color: red, cursor: "pointer" }}><Trash2 size={16} /></button>
        </div>
        <Field label="Company" value={entry.company} onChange={(e) => onUpdate(entry.id, "company", e.target.value)} placeholder="Company name" />
        <Field label="Role" value={entry.role} onChange={(e) => onUpdate(entry.id, "role", e.target.value)} placeholder="Job title" />
        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ flex: 1 }}><Field label="Start Date" type="month" value={entry.startDate} onChange={(e) => onUpdate(entry.id, "startDate", e.target.value)} /></div>
          <div style={{ flex: 1 }}><Field label="End Date" type="month" value={entry.endDate} onChange={(e) => onUpdate(entry.id, "endDate", e.target.value)} placeholder="Leave blank if current" /></div>
        </div>
        <TextArea label="Description" value={entry.description} onChange={(e) => onUpdate(entry.id, "description", e.target.value)} placeholder="What did you do in this role?" />
      </div>
    ))}
    <Button onClick={onAdd}><Plus size={14} /> Add Experience</Button>
  </Box>
);

const SkillsForm = ({ skills, onAdd, onRemove }) => {
  const [draft, setDraft] = useState("");
  const submit = () => { const v = draft.trim(); if (v && !skills.includes(v)) onAdd(v); setDraft(""); };
  return (
    <Box title="Skills">
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); submit(); } }} placeholder="Type a skill..." style={{ flex: 1, padding: 8, fontSize: 14, fontFamily: font, border: `1px solid ${border}`, borderRadius: 4 }} />
        <Button onClick={submit}>Add</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {skills.map((s) => (
          <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#e8f0fe", color: "#1a4fb4", border: "1px solid #b6d0fb", borderRadius: 3, padding: "4px 8px", fontSize: 13, fontFamily: font }}>
            {s}<X size={12} style={{ cursor: "pointer" }} onClick={() => onRemove(s)} />
          </span>
        ))}
      </div>
    </Box>
  );
};

const formatDate = (value) => {
  if (!value) return "";
  const [y, m] = value.split("-");
  if (!m) return y;
  const d = new Date(Number(y), Number(m) - 1);
  return d.toLocaleDateString(undefined, { month: "short", year: "numeric" });
};

const DateRange = ({ start, end }) => {
  const s = formatDate(start);
  const e = end ? formatDate(end) : "Present";
  if (!s && !e) return null;
  return <span style={{ fontSize: 13, color: muted, whiteSpace: "nowrap", fontFamily: font }}>{s} - {e}</span>;
};

const CVHeading = ({ children }) => <h3 style={{ margin: "20px 0 10px 0", fontSize: 16, fontFamily: font, color: text, borderBottom: `2px solid ${text}`, paddingBottom: 4 }}>{children}</h3>;

const CVHeader = ({ personal }) => {
  const contactBits = [personal.email, personal.phone, personal.location].filter(Boolean);
  const linkBits = [personal.linkedin, personal.github].filter(Boolean);
  return (
    <div>
      <h1 style={{ margin: 0, fontFamily: font, fontSize: 28, color: text }}>{personal.fullName || "Your Name"}</h1>
      {contactBits.length > 0 && <p style={{ margin: "6px 0 0 0", fontFamily: font, fontSize: 13, color: muted }}>{contactBits.join(" | ")}</p>}
      {linkBits.length > 0 && <p style={{ margin: "3px 0 0 0", fontFamily: font, fontSize: 13, color: blue }}>{linkBits.join(" | ")}</p>}
    </div>
  );
};

const CVEducation = ({ education }) => {
  if (education.length === 0) return null;
  return (
    <div>
      <CVHeading>Education</CVHeading>
      {education.map((ed) => (
        <div key={ed.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <div>
            <p style={{ margin: 0, fontFamily: font, fontSize: 14, fontWeight: "bold", color: text }}>{ed.school || "School name"}</p>
            <p style={{ margin: "2px 0 0 0", fontFamily: font, fontSize: 13, color: muted }}>{[ed.degree, ed.field].filter(Boolean).join(", ")}</p>
          </div>
          <DateRange start={ed.startDate} end={ed.endDate} />
        </div>
      ))}
    </div>
  );
};

const CVExperience = ({ experience }) => {
  if (experience.length === 0) return null;
  return (
    <div>
      <CVHeading>Work Experience</CVHeading>
      {experience.map((ex) => (
        <div key={ex.id} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ margin: 0, fontFamily: font, fontSize: 14, fontWeight: "bold", color: text }}>{ex.role || "Role"} — {ex.company || "Company"}</p>
            <DateRange start={ex.startDate} end={ex.endDate} />
          </div>
          {ex.description && <p style={{ margin: "4px 0 0 0", fontFamily: font, fontSize: 13, color: text, lineHeight: 1.5 }}>{ex.description}</p>}
        </div>
      ))}
    </div>
  );
};

const CVSkills = ({ skills }) => {
  if (skills.length === 0) return null;
  return (
    <div>
      <CVHeading>Skills</CVHeading>
      <p style={{ margin: 0, fontFamily: font, fontSize: 13, color: text }}>{skills.join(" • ")}</p>
    </div>
  );
};

const CVPreview = ({ data, printRef }) => {
  const isEmpty = !data.personal.fullName && !data.personal.email && data.education.length === 0 && data.experience.length === 0 && data.skills.length === 0;
  return (
    <div ref={printRef} id="cv-paper" style={{ background: white, border: `1px solid ${border}`, width: "100%", maxWidth: 700, minHeight: 800, margin: "0 auto", padding: 40, boxSizing: "border-box" }}>
      <CVHeader personal={data.personal} />
      {isEmpty && <p style={{ marginTop: 20, fontFamily: font, fontSize: 14, color: muted }}>Fill in the form on the left. Your CV will show up here as you type!</p>}
      <CVEducation education={data.education} />
      <CVExperience experience={data.experience} />
      <CVSkills skills={data.skills} />
    </div>
  );
};

export default function App() {
  const [data, setData] = useState(exampleData);
  const [mode, setMode] = useState("edit");
  const printRef = useRef(null);

  const updatePersonal = (personal) => setData((d) => ({ ...d, personal }));
  const addEducation = () => setData((d) => ({ ...d, education: [...d.education, { id: uid(), school: "", degree: "", field: "", startDate: "", endDate: "" }] }));
  const updateEducation = (id, key, value) => setData((d) => ({ ...d, education: d.education.map((e) => (e.id === id ? { ...e, [key]: value } : e)) }));
  const removeEducation = (id) => setData((d) => ({ ...d, education: d.education.filter((e) => e.id !== id) }));
  const addExperience = () => setData((d) => ({ ...d, experience: [...d.experience, { id: uid(), company: "", role: "", startDate: "", endDate: "", description: "" }] }));
  const updateExperience = (id, key, value) => setData((d) => ({ ...d, experience: d.experience.map((e) => (e.id === id ? { ...e, [key]: value } : e)) }));
  const removeExperience = (id) => setData((d) => ({ ...d, experience: d.experience.filter((e) => e.id !== id) }));
  const addSkill = (skill) => setData((d) => ({ ...d, skills: [...d.skills, skill] }));
  const removeSkill = (skill) => setData((d) => ({ ...d, skills: d.skills.filter((s) => s !== skill) }));
  const clearAll = () => { if (window.confirm("Clear all data?")) setData(emptyState); };
  const loadExample = () => setData(exampleData);
  const handleDownload = () => window.print();

  return (
    <div style={{ minHeight: "100vh", background: bg, fontFamily: font }}>
      <style>{`
        @media print { body * { visibility: hidden; } #cv-paper, #cv-paper * { visibility: visible; } #cv-paper { position: absolute; top: 0; left: 0; border: none !important; margin: 0 !important; width: 100% !important; max-width: 100% !important; } }
        @media (max-width: 850px) { .main-layout { flex-direction: column !important; } .form-col { max-width: 100% !important; } }
      `}</style>
      <div className="no-print" style={{ background: white, borderBottom: `2px solid ${border}`, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <h1 style={{ margin: 0, fontFamily: font, fontSize: 20, color: text }}>📄 My CV Builder</h1>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Button onClick={loadExample} outline>Load Example</Button>
          <Button onClick={clearAll} outline color={red}><RotateCcw size={14} /> Clear All</Button>
          <Button onClick={() => setMode(mode === "edit" ? "preview" : "edit")} outline color={green}>
            {mode === "edit" ? <Eye size={14} /> : <Pencil size={14} />}
            {mode === "edit" ? "Preview" : "Edit"}
          </Button>
          <Button onClick={handleDownload} color={green}><Download size={14} /> Download PDF</Button>
        </div>
      </div>
      <div className="main-layout" style={{ display: "flex", gap: 20, padding: 20, alignItems: "flex-start" }}>
        {mode === "edit" && (
          <div className="form-col no-print" style={{ width: "100%", maxWidth: 420 }}>
            <PersonalForm personal={data.personal} onChange={updatePersonal} />
            <EducationForm education={data.education} onAdd={addEducation} onUpdate={updateEducation} onRemove={removeEducation} />
            <ExperienceForm experience={data.experience} onAdd={addExperience} onUpdate={updateExperience} onRemove={removeExperience} />
            <SkillsForm skills={data.skills} onAdd={addSkill} onRemove={removeSkill} />
          </div>
        )}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <CVPreview data={data} printRef={printRef} />
        </div>
      </div>
    </div>
  );
}