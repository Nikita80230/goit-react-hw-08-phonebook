import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            Error 404. Non-existing-route
            <Link to={'/'}>Back home</Link>
        </div>
    )
}

export default NotFound;