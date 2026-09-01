import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Input } from '../ui/Input.jsx';
import { generateId } from '../../utils/helpers';

export const EducationForm = ({ educationList, onAdd, onUpdate, onRemove }) => {
  const handleAdd = () => {
    onAdd({
      id: generateId(),
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: ""
    });
  };

  return (
    <div className="card-container">
      <h2 className="card-title">Education</h2>
      
      {educationList.map((entry, index) => (
        <div key={entry.id} className="list-item-card">
          <div className="list-item-header">
            <strong style={{ fontSize: 13, color: "var(--text-muted)" }}>Entry {index + 1}</strong>
            <button 
              type="button" 
              onClick={() => onRemove(entry.id)} 
              title="Remove" 
              className="btn-icon-danger"
            >
              <Trash2 size={16} />
            </button>
          </div>
          
          <Input 
            label="School" 
            value={entry.school} 
            onChange={(e) => onUpdate(entry.id, "school", e.target.value)} 
            placeholder="University name" 
          />
          <Input 
            label="Degree" 
            value={entry.degree} 
            onChange={(e) => onUpdate(entry.id, "degree", e.target.value)} 
            placeholder="B.Sc." 
          />
          <Input 
            label="Field of Study" 
            value={entry.field} 
            onChange={(e) => onUpdate(entry.id, "field", e.target.value)} 
            placeholder="Computer Science" 
          />
          
          <div className="row-gap">
            <div className="col-flex">
              <Input 
                label="Start Date" 
                type="month" 
                value={entry.startDate} 
                onChange={(e) => onUpdate(entry.id, "startDate", e.target.value)} 
              />
            </div>
            <div className="col-flex">
              <Input 
                label="End Date" 
                type="month" 
                value={entry.endDate} 
                onChange={(e) => onUpdate(entry.id, "endDate", e.target.value)} 
              />
            </div>
          </div>
        </div>
      ))}
      
      <button type="button" onClick={handleAdd} className="btn btn-blue">
        <Plus size={14} /> Add Education
      </button>
    </div>
  );
};