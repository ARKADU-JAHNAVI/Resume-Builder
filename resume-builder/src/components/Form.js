import React from 'react';

function Form({ formData, handleChange }) {
  return (
    <form className="resume-form">
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
  );
}

export default Form;
