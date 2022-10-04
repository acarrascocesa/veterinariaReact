import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este elemento?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="m-5 my-10 bg-slate-300 shadow-md px-5 py-10 rounded-xl">
      <p className="text-lg mt-5 uppercase text-gray-700 mb-3 font-bold">
        Nombre:{" "}
        <span className="text-indigo-600 font-normal normal-case">
          {nombre}
        </span>
      </p>

      <p className="text-lg mt-5 uppercase text-gray-700 mb-3 font-bold">
        Propietario:{" "}
        <span className="text-indigo-600 font-normal normal-case">{propietario}</span>
      </p>

      <p className="text-lg mt-5 uppercase text-gray-700 mb-3 font-bold">
        Email:{" "}
        <span className="text-indigo-600 font-normal normal-case">{email}</span>
      </p>

      <p className="text-lg mt-5 uppercase text-gray-700 mb-3 font-bold">
        Feacha Alta:{" "}
        <span className="text-indigo-600 font-normal normal-case">{alta}</span>
      </p>

      <p className="text-lg mt-5 uppercase text-gray-700 mb-3 font-bold">
        Sintomas:{" "}
        <span className="text-indigo-600 font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 rounded text-white uppercase font-bold"
        onClick={() => setPaciente(paciente)}
        >Editar</button>

        <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-800 rounded text-white uppercase font-bold"
        onClick={handleEliminar}
        >Eliminar</button>
        </div>
    </div>
  );
};

export default Paciente;
