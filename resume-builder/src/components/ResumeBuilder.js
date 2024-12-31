import React, { useState } from 'react';
import Preview from './Preview'; // Import the Preview component
import { jsPDF } from 'jspdf'; // For exporting the resume as a PDF

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.text('Resume', 10, 10);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Email: ${formData.email}`, 10, 30);
    doc.text(`Phone: ${formData.phone}`, 10, 40);
    doc.text(`Skills: ${formData.skills}`, 10, 50);

    doc.save('resume.pdf');
  };

  return (
    <div className="resume-builder">
      <h2>Build Your Resume</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Skills:
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </label>
      </form>
      <Preview formData={formData} /> {/* Pass the data to the Preview component */}
      <button onClick={handleExportPDF} className="export-button">
        Download Resume as PDF
      </button>
    </div>
  );
}

export default ResumeBuilder;
