import { useEffect, useState } from 'react';
import AdminNav from '../components/AdminNav';
import useAuth from '../hooks/useAuth';
import Alerta from '../components/Alerta';

const CambiarPassword = () => {

    const { guardarPassword } = useAuth()
    const [alerta, setAlerta ] = useState({})
    const [password, setPassword] = useState({ pwd_actual: '', pwd_nuevo: ''});


    const handleSubmit = async e =>{
        e.preventDefault();

        if(Object.values(password).some( campo => campo === '')){
          setAlerta({msg:'Ambos campos son obligatorios', error: true})
          return;
        }

        if(password.pwd_nuevo.length < 6){
          setAlerta({ msg: 'El password debe tener minimo 6 carateres', error: true });
          return;
        }

       const respuesta = await guardarPassword(password)

       setAlerta(respuesta)
          
        
    }

    const { msg } = alerta;
  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Password
      </h2>
      <p className="text-xl mt-5 mb-10 text-center ">
        Modifica tu{' '}
        <span className="text-indigo-600 font-bold">Password aqui</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form action="" onSubmit={handleSubmit} className="mb-5">
            <div className="my-3">
              <label
                htmlFor="nombre"
                className="uppercase font-bold text-gray-600"
              >
                Password Actual
              </label>
              <input
                id="pwd_actual"
                name="pwd_actual"
                type="password"
                placeholder="Inserta tu password actual"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className="my-3">
              <label
                htmlFor="nuevoPassword"
                className="uppercase font-bold text-gray-600"
              >
                Nuevo Password
              </label>
              <input
                id="pwd_nuevo"
                name="pwd_nuevo"
                type="password"
                placeholder="Nuevo password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>

            <input
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full hover:bg-indigo-600 cursor cursor-pointer mt-5"
            />
          </form>

          {msg && <Alerta alerta={alerta} />}
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
