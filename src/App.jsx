import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  const [pacientes, setPacientes] = useState([])

  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      //pacienteLS va a set un obj json si hay algo en el LS 
      //de lo contrario retorna un []
      console.log(pacientesLS)

      //llenara el state con lo del LS
      setPacientes(pacientesLS);

    }

    obtenerLS();
  }, [])
  

  useEffect(() => {
  
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  
  }, [pacientes])
  

  const eliminarPaciente = (id) =>{
    
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mt-16 ">
     <Header/>
      <div className="mt-12 md:flex">

        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>
      


    </div>
  )
}

export default App