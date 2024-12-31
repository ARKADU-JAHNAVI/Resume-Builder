import React from 'react';
import { jsPDF } from 'jspdf';

function ExportPDF({ formData }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("Resume", 10, 10);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Email: ${formData.email}`, 10, 30);
    doc.text(`Phone: ${formData.phone}`, 10, 40);
    doc.text(`Skills: ${formData.skills}`, 10, 50);

    doc.save("resume.pdf");
  };

  return (
    <button onClick={generatePDF}>
      Download Resume as PDF
    </button>
  );
}

export default ExportPDF;
