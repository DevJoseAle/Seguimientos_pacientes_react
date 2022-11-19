import React, { useEffect } from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


    const handleEliminar=()=>{
        const respuesta = confirm('¿Deseas eliminar paciente?')
        if(respuesta){

            eliminarPaciente(paciente.id)
        }
        
    }

    

  return (
    <div className='mt-5 bg-white shadow-md m-3 px-5 py-10 rounded-xl'>
    <p className=' font-bold mb-3 text-gray-600 uppercase'>Nombre Mascota: {''}

        <span className='font-normal normal-case'>{paciente.nombre}</span>
    </p>
    <p className=' font-bold mb-3 text-gray-600 uppercase'>Nombre Propietario: {''}

        <span className='font-normal normal-case'>{paciente.propietario}</span>
    </p>
    <p className=' font-bold mb-3 text-gray-600 uppercase'>Email de Contacto: {''}

        <span className='font-normal normal-case'>{paciente.email}</span>
    </p>
    <p className=' font-bold mb-3 text-gray-600 uppercase'>Fecha de Ingreso: {''}

        <span className='font-normal normal-case'>{paciente.alta}</span>
    </p>
    <p className=' font-bold mb-1 text-gray-600 uppercase'>Sintomas: {''}

        <span className='font-normal normal-case'>{paciente.sintomas}</span>
    </p>
    <div className='flex justify-around'>

    <button onClick={()=> setPaciente(paciente)}
    className='bg-blue-600 mt-2 rounded-md text-white font-bold uppercase px-10 py-2 hover:bg-blue-900'>editar
    </button>
    <button 
        onClick={handleEliminar}
        className='bg-red-600 mt-2 rounded-md text-white font-bold uppercase px-10 py-2 hover:bg-red-900'>Eliminar
    
    </button>
    
    </div>
</div>
  )
}

export default Paciente;

