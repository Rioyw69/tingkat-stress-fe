import React, { Fragment } from 'react'
import Header from './Header'

function Layout(props) {
    return (
        <Fragment>
            <Header {...props} />
            {props.children}
        </Fragment>
    )
}

export default Layout