const urlSlug = require('url-slug');

exports.createPages = async ({actions, graphql, reporter}) => {
    const resultado = await graphql(`
    query {
        allStrapiPaginas {
            nodes {
                    id
                    nombre
                }
            }
        allStrapiPropiedades {
              nodes {
                      id
                      nombre
                  }
        
            }
        }
        
    `)

    if(resultado.errors){
        reporter.panic('Hubo un error', resultado.errors)
    }

    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;

    paginas.forEach(pagina => {
        actions.createPage({
            path: urlSlug(pagina.nombre),
            component: require.resolve('./src/components/pagina.js'),
            context: {
                id: pagina.id
            }
        })
    })

    propiedades.forEach(propiedad => {
        actions.createPage({
            path: urlSlug(propiedad.nombre),
            component: require.resolve('./src/components/propiedad.js'),
            context: {
                id: propiedad.id
            }
        })
    })
}