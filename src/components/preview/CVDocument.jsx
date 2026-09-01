import React from 'react';
import { formatMonthYear } from '../../utils/helpers';

const DateRange = ({ start, end }) => {
  if (!start && !end) return null;
  const formattedStart = formatMonthYear(start);
  const formattedEnd = end ? formatMonthYear(end) : "Present";
  
  if (!formattedStart && !end) return null;
  const text = formattedStart ? `${formattedStart} – ${formattedEnd}` : formattedEnd;
  return <span style={{ fontSize: 13, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{text}</span>;
};

export const CVDocument = ({ data, printRef }) => {
  const { personal, education, experience, skills } = data;
  const contactDetails = [personal.email, personal.phone, personal.location].filter(Boolean);
  const socialLinks = [personal.linkedin, personal.github].filter(Boolean);

  return (
    <div ref={printRef} className="cv-paper">
      
      {/* Header Section */}
      <div>
        <h1 className="cv-name">{personal.fullName || "Your Name"}</h1>
        {contactDetails.length > 0 && <p className="cv-contact">{contactDetails.join(" | ")}</p>}
        {socialLinks.length > 0 && <p className="cv-links">{socialLinks.join(" | ")}</p>}
      </div>

      {/* Education Section */}
      {education.length > 0 && (
        <div>
          <h3 className="cv-section-title">Education</h3>
          {education.map((ed) => (
            <div key={ed.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <div>
                <p style={{ margin: 0, fontWeight: "bold" }}>{ed.school || "School name"}</p>
                <p style={{ margin: "2px 0 0 0", fontSize: 13, color: "var(--text-muted)" }}>
                  {[ed.degree, ed.field].filter(Boolean).join(", ")}
                </p>
              </div>
              <DateRange start={ed.startDate} end={ed.endDate} />
            </div>
          ))}
        </div>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <div>
          <h3 className="cv-section-title">Work Experience</h3>
          {experience.map((ex) => (
            <div key={ex.id} style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>{ex.role || "Role"} — {ex.company || "Company"}</p>
                <DateRange start={ex.startDate} end={ex.endDate} />
              </div>
              {ex.description && <p style={{ margin: "4px 0 0 0", fontSize: 13, lineHeight: 1.5 }}>{ex.description}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div>
          <h3 className="cv-section-title">Skills</h3>
          <p style={{ margin: 0, fontSize: 13 }}>{skills.join(" • ")}</p>
        </div>
      )}
    </div>
  );
};