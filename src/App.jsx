import React, { useState, useRef } from 'react';
import { PersonalInfoForm } from './components/forms/PersonalInfoForm.jsx';
import { EducationForm } from './components/forms/EducationForm.jsx';
import { ExperienceForm } from './components/forms/ExperienceForm.jsx';
import { SkillsForm } from './components/forms/SkillsForm.jsx';
import { CVDocument } from './components/preview/CVDocument.jsx';
import { MOCK_CV_DATA, EMPTY_CV_STATE } from './utils/initialdata.js';
import { Printer, Sparkles, Trash2 } from 'lucide-react';

const App = () => {
  const [cvData, setCvData] = useState(MOCK_CV_DATA);
  const printRef = useRef();

  // Personal Info
  const updatePersonal = (newPersonal) => {
    setCvData(prev => ({ ...prev, personal: newPersonal }));
  };

  // Education
  const addEducation = (newEntry) => {
    setCvData(prev => ({ ...prev, education: [...prev.education, newEntry] }));
  };
  const updateEducation = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map(entry =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    }));
  };
  const removeEducation = (id) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter(entry => entry.id !== id)
    }));
  };

  // Experience
  const addExperience = (newEntry) => {
    setCvData(prev => ({ ...prev, experience: [...prev.experience, newEntry] }));
  };
  const updateExperience = (id, field, value) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(entry =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    }));
  };
  const removeExperience = (id) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter(entry => entry.id !== id)
    }));
  };

  // Skills
  const addSkill = (skill) => {
    setCvData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
  };
  const removeSkill = (skill) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  // Actions
  const handleLoadExample = () => {
    setCvData(MOCK_CV_DATA);
  };

  const handleClearAll = () => {
    setCvData(EMPTY_CV_STATE);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="app-header-title">CV Builder</h1>
        <div className="app-header-actions">
          <button type="button" className="btn btn-secondary" onClick={handleLoadExample}>
            <Sparkles size={15} /> Load Example
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleClearAll}>
            <Trash2 size={15} /> Clear All
          </button>
          <button type="button" className="btn btn-blue" onClick={handlePrint}>
            <Printer size={15} /> Download PDF
          </button>
        </div>
      </header>

      <div className="app">
        <div className="sidebar">
          <PersonalInfoForm personalData={cvData.personal} onUpdate={updatePersonal} />
          <EducationForm 
            educationList={cvData.education}
            onAdd={addEducation}
            onUpdate={updateEducation}
            onRemove={removeEducation}
          />
          <ExperienceForm 
            experienceList={cvData.experience}
            onAdd={addExperience}
            onUpdate={updateExperience}
            onRemove={removeExperience}
          />
          <SkillsForm 
            skillsList={cvData.skills}
            onAdd={addSkill}
            onRemove={removeSkill}
          />
        </div>
        <div className="preview">
          <CVDocument data={cvData} printRef={printRef} />
        </div>
      </div>
    </div>
  );
};

export default App;