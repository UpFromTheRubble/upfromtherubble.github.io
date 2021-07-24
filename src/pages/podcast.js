import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Podcast = (props) => (
    <Layout>
        <Helmet>
            <title>Podcast</title>
            <meta name="description" content="Links to all four episodes of the podcast
                  series, on all the major podcast platforms,
                  including transcripts of every episode." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Podcast</h1>
                    </header>
                </div>
            </section>
        </div>

    </Layout>
)

export default Podcast
