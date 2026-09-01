import React from 'react';

export const Input = ({ label, type = "text", ...props }) => (
  <div className="input-wrapper">
    <label className="input-label">{label}</label>
    <input type={type} className="input-field" {...props} />
  </div>
);

export const TextArea = ({ label, ...props }) => (
  <div className="input-wrapper">
    <label className="input-label">{label}</label>
    <textarea rows={3} className="input-field" {...props} />
  </div>
);