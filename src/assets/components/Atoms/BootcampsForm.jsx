import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetch from '../../service/useFetch';
import axios from 'axios';

const BootcampsForm = () => {
    const [bootcampName, setBootcampName] = useState('');
    const { data } = useFetch('http://127.0.0.1:8000/api/bootcamps');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/bootcamps', { bootcamp: bootcampName });

            if (response.status === 201) {
                handleSuccess();
            } else {
                handleError();
            }
        } catch (error) {
            handleError();
        }
    };

    const handleSuccess = () => {
        toast.success('¡El bootcamp se guardó exitosamente!', { autoClose: 3000 });
        setBootcampName('');
    };

    const handleError = () => {
        console.error('Hubo un problema al guardar el bootcamp.');
        toast.error('¡Hubo un problema al guardar el bootcamp!', { autoClose: 3000 });
    };

    return (
        <div className="mt-16 max-w-md mx-auto border rounded border-indigo-200 clear text-azul">
            <form
                className="bg-azul rounded-lg px-8 py-8 space-y-6"
                onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor="bootcamp" className="block text-sm font-bold text-blue pb-2">
                        Agregar Bootcamps a participar de la Hackathon
                    </label>
                    <input
                        type="text"
                        id="bootcamp"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="  bootcamp"
                        value={bootcampName}
                        onChange={(e) => setBootcampName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-family-custom font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                    >
                        Guardar
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default BootcampsForm;