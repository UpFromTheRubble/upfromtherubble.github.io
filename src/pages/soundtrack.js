import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Soundtrack = (props) => (
    <Layout>
        <Helmet>
            <title>Soundtrack Album</title>
            <meta name="description" content="The original soundtrack music, recorded with
                  string quartet and piano, is available through
                  all the major music streaming platforms.
                  Links provided on this page." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Soundtrack Album</h1>
                    </header>
                </div>
            </section>
        </div>

    </Layout>
)

export default Soundtrack
