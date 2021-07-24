import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const MediaReleases = (props) => (
    <Layout>
        <Helmet>
            <title>Media Releases</title>
            <meta name="description" content="See coverage of Up from the rubble in the
                  print and online media. Reviews of the podcast
                  are also housed here." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Media Releases</h1>
                    </header>
                </div>
            </section>
        </div>

    </Layout>
)

export default MediaReleases
