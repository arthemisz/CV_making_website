import React, { useState } from 'react';
import { X } from 'lucide-react';

export const SkillsForm = ({ skillsList, onAdd, onRemove }) => {
  const [draftSkill, setDraftSkill] = useState("");

  const submitSkill = () => {
    const formattedSkill = draftSkill.trim();
    if (formattedSkill && !skillsList.includes(formattedSkill)) {
      onAdd(formattedSkill);
    }
    setDraftSkill("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitSkill();
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-title">Skills</h2>
      
      <div className="row-gap" style={{ marginBottom: 10 }}>
        <input 
          value={draftSkill} 
          onChange={(e) => setDraftSkill(e.target.value)} 
          onKeyDown={handleKeyDown} 
          placeholder="Type a skill..." 
          className="input-field col-flex" 
        />
        <button type="button" className="btn btn-blue" onClick={submitSkill}>
          Add
        </button>
      </div>
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {skillsList.map((skill) => (
          <span 
            key={skill} 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 5, 
              background: "#e8f0fe", 
              color: "#1a4fb4", 
              border: "1px solid #b6d0fb", 
              borderRadius: 3, 
              padding: "4px 8px", 
              fontSize: 13 
            }}
          >
            {skill}
            <X 
              size={12} 
              style={{ cursor: "pointer", marginLeft: 4 }} 
              onClick={() => onRemove(skill)} 
            />
          </span>
        ))}
      </div>
    </div>
  );
};