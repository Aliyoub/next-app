// Rendu côté client
export default function Post ({post}) {
    return (
        <>
        <main>vvv
            {post.id}
        </main>
        </>
    )
}

// Rendu côté serveur
export async function getStaticProps({params}){
    const post = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`).then( // .then... pour convertir les données en json
        r=>r.json()
        )
    return {
        props: {
            post // ce props sera envoyé à la fonction Post plus haut
        }
    }
}

export async function getStaticPaths(){
    const posts = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(r=>r.json())
    
    return {
        paths: posts.map(post=>({
            // Pour récupérer tous les ids de l'api
            params: {id: post.id.toString()} // cet objet params sera envoyé à la fonction getStaticProps plus haut
        })),
        // Le fallback permet de définir une valeur par défaut, au cas où un id n'existerait pas
        // fallback: false => on lui dit qu'il n'y a pas de fallback à définir, dans ce cas on aura un 404
        fallback: false,
    }
}
