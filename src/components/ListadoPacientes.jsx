import { useEffect } from 'react'
import Paciente from './Paciente'
    

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    
    
        
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen sm:mt-5 md:mt-0   '>

            {pacientes && pacientes.length ? (
                <>

                    <h2 className='font-black text-3xl text-center'>ListadoPacientes</h2>
                    <p className='mb-5 mt-5 text-lg text-center'> Administra tus <span className="text-blue-500 font-bold text-lg"> Pacientes</span></p>

                    <div className=' md:h-screen overflow-y-scroll '>

                        {pacientes.map((paciente)=>(
                            
                            <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                            />
                            
                            ))}
                    </div>

                </>

            ): (
                <>
                    <h2 className='font-black text-3xl text-center'>No Hay Pacientes</h2>
                        <p className='mb-5 mt-5 text-lg text-center'> Agrega a tus <span className="text-blue-500 font-bold text-lg"> Pacientes</span></p>
                </>
            )}

            
        
        
        </div>
    )
    }

    export default ListadoPacientes