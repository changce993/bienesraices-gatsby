import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {

    const datos = useStaticQuery(graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    nombre
                    descripcion
                    id
                    WC
                    precio
                    estacionamiento
                    habitaciones
                    categoria {
                        nombre
                    }
                    agentes {
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid( maxWidth: 600, maxHeight: 400){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `)

    // console.log(datos)
    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        id : propiedad.id,
        WC : propiedad.WC,
        precio : propiedad.precio,
        estacionamiento : propiedad.estacionamiento,
        habitaciones : propiedad.habitaciones,
        agentes: propiedad.agentes,
        categoria: propiedad.categoria,
        imagen: propiedad.imagen
    }))
}

export default usePropiedades;