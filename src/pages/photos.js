import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'
import { Grid } from '@material-ui/core'

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
                    <Grid container spacing={24} justify="center">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/Y_WuOJvLUeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/dUa1NpIhYJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                </div>
            </section>
        </div>

    </Layout>
)

export default Photos
