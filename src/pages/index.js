import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Up from the Rubble"
          meta={[
            { name: 'description', content: 'Up from the Rubble is a podcast about the life of Manfred Reich' },
            { name: 'keywords', content: 'rubble, reich, podcast, germany, war' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article>
              <Link
                aria-label="Link to Podcast Crew"
                to="/crew/"
                className="link primary"
              >
                <header className="major">
                  <h3>Crew</h3>
                  <p>Meet the passionate, creative members<br />
                  behind the podcast recording, music composition,<br />
                  sound design and editing.</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Link to Podcast Page"
                to="/podcast/"
                className="link primary"
              >
                <header className="major">
                  <h3>Podcast</h3>
                  <p>Links to all four episodes of the podcast<br />
                  series, on all the major podcast platforms,<br />
                  including transcripts of every episode.</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Link to Soundtrack Album"
                to="/soundtrack/"
                className="link primary"
              >
                <header className="major">
                  <h3>Soundtrack Album</h3>
                  <p>The original soundtrack music, recorded with<br />
                  string quartet and piano, is available through<br />
                  all the major music streaming platforms.<br />
                  Links provided on this page.</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Link to About / Contact"
                to="/about-contact/"
                className="link primary"
              >
                <header className="major">
                  <h3>About / Contact</h3>
                  <p>Find out the background behind this honest,<br />
                  tragic but ultimately heart warming series.<br />
                  Want to contact us? All the details are here.</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Link to Photos"
                to="/photos/"
                className="link primary"
              >
                <header className="major">
                  <h3>Photos</h3>
                  <p>Look at photos of both the podcast production<br />
                  and Manfred's pictures from his original photo album.</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Link to Media Releases"
                to="/media-releases/"
                className="link primary"
              >
                <header className="major">
                  <h3>Media Releases</h3>
                  <p>See coverage of "Up from the rubble" in the<br />
                  print and online media. Reviews of the podcast<br />
                  are also housed here.</p>
                </header>
              </Link>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
