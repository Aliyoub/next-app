import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import { Waypoint } from 'react-waypoint';
import Script from 'next/script'

export default function Livres({posts}) {

    const _handleEnter = () =>{
        alert('ok')
    }

  return (
    <>
      <Head>
        <title>Create Next App</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
        <Header />
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></Script>
    <Waypoint onEnter={_handleEnter} />
        <div className="d-flex justify-content-center align-items-center">
            <Carousel />
        </div>

    

      <div className="album py-5 bg-light">
    <div className="container">
        <div className="row">
        {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}
            <div className="d-flex justify-content-center align-items-center">
            <h2 className="title">PARFUMS POUR FEMMES</h2>
            </div>
        </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        
        {
            
            posts.map(post=>
                        post.image && post.description ?
                        <div key={post.id.toString()} className="col">
                <div className="card shadow-sm item">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="50" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: {post.description}" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">{post.description}</text>
                    </svg>
                    <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <Image src={post.image} height={200} />
                    </div>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
                </div>
                </div>
                : null
            )
        }
      </div>
    </div>
  </div>
          <Footer />
    </>

  )
}

export async function getStaticProps(){
    const posts = await fetch('https://next-app-henna.vercel.app/api/parfumsFemme').then( // .then... pour convertir les données en json
        r=>r.json()
        )
        // ).then(myData => setPosts(myData))
    return {
        props: {
            posts
        }
    }
}

