import { useState, useEffect } from "react"

import Error from "./Error";



const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {

   

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
      if(Object.keys(paciente).length >0){
       setNombre(paciente.nombre);
       setPropietario(paciente.propietario);
       setEmail(paciente.email);
       setAlta(paciente.alta);
       setSintomas(paciente.sintomas);
      }
    
    }, [paciente])
    

    function resetearForm(){
       setNombre('');
       setPropietario('');
       setEmail('');
       setAlta('');
       setSintomas('');
    }

    const generarId= () =>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36);
        return random + fecha
    }


    const handleSubmit=(e)=>{

        e.preventDefault();

        //validacion form
        if([nombre, propietario,email,alta,sintomas].includes('')){
            setError(true)
            return
        }
         setError(false)

         //Creamos obj paciente:
         const pacienteObj = {
            nombre, 
            propietario,
            email,
            alta,
            sintomas,
            
         }
        
        if(paciente.id){
            //Editando:
            pacienteObj.id = paciente.id; //3*

            const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? pacienteObj : pacienteState); //4*
            
            setPacientes(pacienteActualizado); //5*
            
            setPaciente({}) //5*

        }else{
            //nuevo Registro
            pacienteObj.id = generarId() //1*
            setPacientes([...pacientes, pacienteObj] )//2*
            
        }


         //Resetear el form:
         resetearForm();
    }

  return (
    <div className="md:w-1/2 lg:w-2/5"> 

    <h2 className="font-black text-center text-3xl">Paciente a Seguir:</h2>

    <p className=" text-lg mt-5 text-center mb-10"> Añade el paciente y {''} <span className="text-blue-500 font-bold text-lg">Administralos</span></p>

    <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md ml-7 rounded-lg py-10 px-5 ">

            {error && <Error> Todos los campos son Obligatorios </Error>}

        <div className="mb-5">
            <label 
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold">
                Nombre Mascota: {nombre}
            </label>
            <input 
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
            id="mascota"
            type="text" 
            placeholder=" Nombre de Mascota"
            className="border-2 py-2 w-full rounded-md mt-2 placeholder-gray-500"
            />
        </div>
        <div className="mb-5">
            <label 
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold">
                Nombre propietario:
            </label>
            <input 
            value={propietario}
            onChange={(e)=>setPropietario(e.target.value)}
            id="propietario"
            type="text" 
            placeholder=" Nombre de Propietario"
            className="border-2 py-2 w-full rounded-md mt-2 placeholder-gray-500"
            />
        </div>
        <div className="mb-5">
            <label 
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold">
                Email de Contacto:
            </label>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            type="email" 
            placeholder=" Ejemplo@correo.com"
            className="border-2 py-2 w-full rounded-md mt-2 placeholder-gray-500"
            />
        </div>
        <div className="mb-5">
            <label 
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold">
                Fecha de ingreso:
            </label>
            <input 
            value={alta}
            onChange={(e)=>setAlta(e.target.value)}
            id="alta"
            type="date" 
            className="border-2 py-2 w-full rounded-md mt-2 placeholder-gray-500"
            />
        </div>
        <div className="mb-2">
            <label 
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold">
                Sintomas:
            </label>
            < textarea
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
            className="border-2 py-2 w-full rounded-md mt-2 placeholder-gray-500"
            name="sintomas" 
            id="sintomas" 
            cols="10" 
            rows="4"
            placeholder="Describe los sintomas"/>
        </div>

        <input 
        type="submit"
        value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}
        name="" 
        id=""
        className=" bg-indigo-500 w-full rounded-2xl text-gray-200 font-bold p-2 uppercase hover:bg-indigo-700 cursor-ponter transition-all" />
    </form>
    </div>
  )
}

export default Formulario

/*


*/

