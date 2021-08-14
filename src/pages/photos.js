import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

const Photos = (props) => (
    <Layout>
        <Helmet>
            <title>Photos</title>
            <meta name="description" content="Look at photos of both the podcast production
                  and Manfred's pictures from his original photo album." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Photos</h1>
                    </header>
                    <Gallery />
                </div>
            </section>
        </div>

    </Layout>
)

export default Photos
