import React from 'react';
import {useQuery, gql} from '@apollo/client'
import {useRouter} from 'next/router'

const OBTENER_USUARIO = gql`
    query obtenerUsuario{
        obtenerUsuario{
            id  
            nombre
            apellido
        }
    }
`

const Header = () => {
    //Routing 
    const router = useRouter();
    //Query de Apollo
    const {data, loading, error} = useQuery(OBTENER_USUARIO)
    console.log(data)
    console.log(loading)
    console.log(error)
    //Proteger que no accedamos a data antes de tener resultado
    if(loading) return null;

    //Si no hay datos
    if(!data){
        return router.push('/login')
    }
    //Destructuramos obtenerUsuario
    const {nombre, apellido} = data.obtenerUsuario;
    //Cerrar Sesión
    const cerrarSesion = () => {
        localStorage.removeItem('token')
        router.push('/login')
    }
    
    return ( 
        <div className='flex justify-between mb-6'>
                <p className='mr-2'>Hola {nombre} {apellido}</p>
                <button 
                    type="button"
                    className='bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md'
                    onClick={()=>cerrarSesion()}
                >
                    Cerrar sesión
                </button>
           </div> 
    );
}
 
export default Header;