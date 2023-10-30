import React from 'react'
import { Link } from 'react-router-dom'

export const LinkElement = ({ content, path }) => {
    return (
        <Link to={path} className="p-4">
            {content}
        </Link>
    )
}
