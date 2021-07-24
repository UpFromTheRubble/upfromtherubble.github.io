import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/crew/">Crew</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/podcast/">Podcast</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/soundtrack/">Soundtrack Album</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about-contact/">About / Contact</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/photos/">Photos</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/media-releases/">Media Releases</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
