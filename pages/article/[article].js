import Link from "next/link";
const imgurl = "http://localhost:8000/";


export const getStaticPaths = async () => {

    const response = await fetch("http://localhost:8000/jsonapi/node/article?include=field_image")
        .then((res) => {
            return res.json();
        });

    const paths = response.data.map((article) => {
        return {
            params: { article: article.id }
        }
    });

    return {
        paths,
        fallback: false
    }
}


const removeTags = (param) => {
    return param.replace(/<\/?[^>]+(>|$)/g, "")
}


export const getStaticProps = async (context) => {
    const id = context.params.article;
    const data = await fetch(`http://localhost:8000/jsonapi/node/article/${id}?include=field_image`)
        .then((res) => {
            return res.json();
        });

    const article = {
        id: data.data.id,
        title: data.data.attributes.title,
        body: removeTags(data.data.attributes.body.processed),
        url: data.included[0].attributes.uri.url

    };

    return {
        props: { article }
    }
}



const Article = ({ article }) => {
    return (

        <article>        <div className="card" style={{ width: "18rem" }}>
            <img src={imgurl + article.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.body}</p>
            </div>
        </div>
        </article>



    )
}


export default Article;