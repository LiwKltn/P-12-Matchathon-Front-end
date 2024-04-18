import React from 'react';

const FormCodersUser = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-md">
        <input
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Apellidos"
          required
        />
        <input
          className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
    </div>
  );
};

export default FormCodersUser;
