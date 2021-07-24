import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

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
                </div>
            </section>
        </div>

    </Layout>
)

export default Photos
