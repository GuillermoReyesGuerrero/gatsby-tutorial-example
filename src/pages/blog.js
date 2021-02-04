import React from 'react'
import Layout from '../components/layout'
import styles from  '../components/blog.module.css'

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>hello from blog</h1>
                <p className={styles.text}>
                    esto es una prueba de lo que puede
                    suceder si no haces las cosas bien.
                </p>
            </div>
        </Layout>
    )
}

export default blog
