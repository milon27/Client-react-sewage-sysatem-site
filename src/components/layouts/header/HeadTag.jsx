import React from 'react'


export default function HeadTag({ title }) {
    return (
        <>
            <title>{title || "New generation sewage system"}</title>
        </>
    )
}
