import React from 'react'
import '../styles/card.css'

export const Card = () => {
    return (
        <div className="row">
            <div className="b-card mx-auto col-md-7 my-5">
                <div className="business-title">Business title</div>
                <div className="name">Name</div>
                <div className="company-name">Company</div>
                <div className="contacts">Contacts</div>
                <ul className="contacts-list">
                    <li>CellNumber</li>
                    <li>E-mail</li>
                    <li>Twitter</li>
                    <li>Dev.to</li>
                    <li>Github</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </div>
    )
}
