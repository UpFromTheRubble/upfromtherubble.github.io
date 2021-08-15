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
                    <p><iframe src="https://open.spotify.com/embed/episode/6iRwfaUAXYrxgVxTEJmEGp?theme=0" width="100%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
                    <p><a href="/podcast-episode-1/" alt="Podcast Episode 1">Episode 1</a></p>
                    <p><a href="/podcast-episode-2/" alt="Podcast Episode 1">Episode 2</a></p>
                    <p><a href="/podcast-episode-3/" alt="Podcast Episode 1">Episode 3</a></p>
                    <p><a href="/podcast-episode-4/" alt="Podcast Episode 1">Episode 4</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Podcast
