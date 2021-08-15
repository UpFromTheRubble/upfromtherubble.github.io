import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import MarketingGallery from '../components/MarketingGallery'

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
                    <iframe
                      width="100%"
                      height="166"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1103276980&color=%23746c84&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                    </iframe>
                    <MarketingGallery />
                </div>
            </section>
        </div>

    </Layout>
)

export default MediaReleases
