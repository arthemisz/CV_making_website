import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Input, TextArea } from '../ui/Input.jsx';
import { generateId } from '../../utils/helpers';

export const ExperienceForm = ({ experienceList, onAdd, onUpdate, onRemove }) => {
  const handleAdd = () => {
    onAdd({
      id: generateId(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: ""
    });
  };

  return (
    <div className="card-container">
      <h2 className="card-title">Work Experience</h2>
      
      {experienceList.map((entry, index) => (
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
            label="Company" 
            value={entry.company} 
            onChange={(e) => onUpdate(entry.id, "company", e.target.value)} 
            placeholder="Company name" 
          />
          <Input 
            label="Role" 
            value={entry.role} 
            onChange={(e) => onUpdate(entry.id, "role", e.target.value)} 
            placeholder="Job title" 
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
          
          <TextArea 
            label="Description" 
            value={entry.description} 
            onChange={(e) => onUpdate(entry.id, "description", e.target.value)} 
            placeholder="Describe your responsibilities and achievements" 
          />
        </div>
      ))}
      
      <button type="button" onClick={handleAdd} className="btn btn-blue">
        <Plus size={14} /> Add Experience
      </button>
    </div>
  );
};