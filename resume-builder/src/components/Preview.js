import React from 'react';

function Preview({ formData }) {
  return (
    <div className="preview-section">
      <h2>Resume Preview</h2>
      <div className="preview-content">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
      </div>
    </div>
  );
}

export default Preview;
