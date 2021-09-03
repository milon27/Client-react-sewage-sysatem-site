import React from 'react'


export default function HeadTag({ title }) {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <title>{title || "New generation sewage system"}</title>

            <link rel="icon" type="image/x-icon" href="./assets/images/icons/favicon.ico" />

        </>
    )
}
