import { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";

const EditarPerfil = () => {

    const { auth, actualizarPerfil } = useAuth();
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta ] = useState({})
    
    useEffect(()=>{
        setPerfil(auth)
    },[auth])

    const handleSubmit = async e =>{
        e.preventDefault();

        const { nombre, email } = perfil;

        if(nombre === '' || email === ''){
            setAlerta({msg: 'Nombre e email son obligatorios', error: true})
            return;
        }

        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado);


    }

    const { msg } = alerta;

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Editar Perfíl</h2>
      <p className="text-xl mt-5 mb-10 text-center ">
        Modifica tu{' '}
        <span className="text-indigo-600 font-bold">Informacion aqui</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form action="" onSubmit={handleSubmit} className="mb-5">
            <div className="my-3">
              <label
                htmlFor="nombre"
                className="uppercase font-bold text-gray-600"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                value={perfil.nombre || ''}
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className="my-3">
              <label
                htmlFor="web"
                className="uppercase font-bold text-gray-600"
              >
                Sitio web
              </label>
              <input
                id="web"
                name="web"
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                value={perfil.web || ''}
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className="my-3">
              <label
                htmlFor="telefono"
                className="uppercase font-bold text-gray-600"
              >
                Telefono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                value={perfil.telefono || ''}
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className="my-3">
              <label
                htmlFor="email"
                className="uppercase font-bold text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                value={perfil.email || ''}
                onChange={(e) =>
                  setPerfil({ ...perfil, [e.target.name]: e.target.value })
                }
              />
            </div>

            <input
              type="submit"
              value="Guardar Cambios"
              className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full hover:bg-indigo-600 cursor cursor-pointer mt-5"
            />
          </form>

          {msg && <Alerta alerta={alerta}/>}
        </div>
      </div>
    </>
  );
}

export default EditarPerfil