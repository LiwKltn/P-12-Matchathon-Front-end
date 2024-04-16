import React, { useState } from 'react';

const FormCodersUser = ({ formData, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
    </div>
  );
};

export default FormCodersUser;

