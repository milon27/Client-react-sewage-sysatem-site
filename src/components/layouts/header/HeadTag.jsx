import React, { useEffect } from 'react'


export default function HeadTag({ title }) {
    useEffect(() => {
        document.title = title ? title : "New generation sewage system"
    }, [title]);

    return (
        <>
        </>
    )
}
