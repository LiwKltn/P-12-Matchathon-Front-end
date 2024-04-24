import React from 'react';

const FormCodersButton = ({ handleSubmit }) => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white bg-azul hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{ color: 'white' }}
      >
        Submit
      </button>
    </div>
  );
};

export default FormCodersButton;
