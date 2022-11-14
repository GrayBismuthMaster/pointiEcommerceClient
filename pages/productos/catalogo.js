import Layout from '../../components/Layout'
import {gql, useQuery} from '@apollo/client'
import Producto from '../../components/Producto';
import Link from 'next/link';

const OBTENER_PRODUCTOS = gql`
    query obtenerProductos{
        obtenerProductos{
            id
            nombre
            precio
            existencia,
            imagen
        }
    }
`
const productos_catalogo = () => {
    const {data, loading, error} = useQuery(OBTENER_PRODUCTOS);
    if (loading) return "cargando";
    console.log(data);
    return (
        <>
            <Layout>
                <h1 className = "text-2xl text-gray-800 font-light">Productos Catalogo</h1>
                <Link href='/nuevoproducto'>
                    <a className='bg-blue-800 py-2 px-5 mt-5 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold'>Nuevo Producto</a>  
                </Link>

                <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos Disponibles</h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {data.obtenerProductos.map((product) => (
                        <div key={product.id} className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                            src={product.imagen}
                            alt={product.nombre}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                            <h3 className="text-sm text-gray-700">
                                <a href={product.imagen}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.nombre}
                                </a>
                            </h3>
                            {/* <p className="mt-1 text-sm text-gray-500">{product.color || "rojo"}</p> */}
                            </div>
                            <p className="text-sm font-medium text-gray-900">{`${product.precio} $` || "50"}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                {/* <table className='table-auto shadow-md mt-10 w-full w-lg'>
                    <thead className='bg-gray-800'>
                    <tr className='text-white'>
                        <th className='w-1/5 py-2'>Nombre Producto</th>
                        <th className='w-1/5 py-2'>Cantidad Producto</th>
                        <th className='w-1/5 py-2'>Precio</th> 
                        <th className='w-1/5 py-2'>Eliminar</th>
                        <th className='w-1/5 py-2'>Editar</th>
                    </tr>
                    </thead>
        
                    <tbody className='bg-white'>
                    {
                        
                        data.obtenerProductos.map(producto => (
                        <Producto
                            key={producto.id}
                            producto = {producto}
                        />
                        ))
                        
                    }

            
                    
                    
                    </tbody>
                </table> */}
            </Layout>
        </>
    )
}
  
export default productos_catalogo