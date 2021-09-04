import React from 'react'

export default function SectionTop({ classNames, children, style }) {
    return (
        <section style={style} className={"top " + classNames?.join(" ").toString()}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}
