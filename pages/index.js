import 'bootstrap/dist/css/bootstrap.css';
import Header from './comps/Header';
import Link from "next/link";
import { useState } from 'react';
const imgurl = "http://localhost:8000/";
const ur1 = "http://localhost:8000/jsonapi/node/article/?include=field_image";


const Article = ({ articles, error }) => {

  if (error) {
    return (
      <div className="error">
        Server is down
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <dir className="error">Add Content</dir>
    )
  }

  return (
    <div>
      <Header />
      <section>
        {articles.map((item, index) => {

          return (


            <div key={index} style={{ width: "18rem" }} className="card" >
              <img src={imgurl + item.url} className="card-img-top" alt="img" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">  </p>
                <Link href={`/article/${item.id}`}><a className="btn btn-primary">{item.title}</a></Link>

              </div>

            </div>



          )
        })}
      </section>
    </div>
  )
}



export const getStaticProps = async () => {

  try {
    const response = await fetch(ur1).then((res) => {
      return res.json()

    });

    const articles = response.data.map((dataItem, index) => {
      const article = {
        id: dataItem.id,
        title: dataItem.attributes.title,
        body: dataItem.attributes.body.value,
        url: response.included[index].attributes.uri.url

      }

      return article
    });

    if (response) {
      return {
        props: { articles }
      }
    }
  } catch (error) {
    console.log(error);
    return {
      props: { error: true }
    }

  }

  return {
    props: { articles: [] }
  }








}




export default Article;