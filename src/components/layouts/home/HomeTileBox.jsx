import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeTileBox({ url = "", forground_img = "", background_img = "", title = "", sub_title = "", empty = false }) {
    return (
        <div className={(!empty) ? "tile item-1" : "tile tile--blank item-1"}>
            {empty ? <></> :
                <Link className="tile__url" to={url}>
                    <div className="tile__image-shape" style={{ backgroundImage: 'url("' + forground_img + '")' }}>
                    </div>
                    <div className="full-color tile__image" style={{ backgroundImage: 'url("' + background_img + '")' }}>
                    </div>
                    <div className="tile__title-container">
                        <h3 className="tile__title">{title}</h3>
                        <p className="tile__subtitle">{sub_title}&nbsp;</p>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={40} height={28} viewBox="0 0 46 32">
                            <title>arrow</title>
                            <path fill="#fff" d="M30.374 15.768h-2.15l2.661 2.958h-21.013v1.787h21.088l-2.373 3.028h2.018l3.323-3.997z">
                            </path>
                        </svg>
                    </div>
                </Link>
            }


        </div>
    )
}
