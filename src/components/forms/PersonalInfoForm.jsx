import React from 'react';
import { Input } from '../ui/Input.jsx';

export const PersonalInfoForm = ({ personalData, onUpdate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...personalData, [name]: value });
  };
  

  return (
    <div className="card-container">
      <h2 className="card-title">Personal Info</h2>
      <Input label="Full Name" name="fullName" value={personalData.fullName} onChange={handleChange} placeholder="Jane Doe" />
      <Input label="Email" name="email" value={personalData.email} onChange={handleChange} placeholder="jane@email.com" />
      <Input label="Phone" name="phone" value={personalData.phone} onChange={handleChange} placeholder="555-010-2020" />
      <Input label="Location" name="location" value={personalData.location} onChange={handleChange} placeholder="City, Country" />
      <Input label="LinkedIn" name="linkedin" value={personalData.linkedin} onChange={handleChange} placeholder="linkedin.com/in/janedoe" />
      <Input label="GitHub" name="github" value={personalData.github} onChange={handleChange} placeholder="github.com/janedoe" />
    </div>
  );
};