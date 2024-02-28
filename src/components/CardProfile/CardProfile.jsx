import React from 'react'
import '../../App.css'
function CardProfile(props) {
    return (
        <div className='Element-flex'>
            <div className="info-card">
                <h1>Data diri peserta kelas Reactjs</h1>
                <hr />
                <ul>
                    <li><b>Nama Lengkap:</b> {props.name}</li>
                    <li><b>Email:</b> {props.email}</li>
                    <li><b>GitHub:</b> {props.github}</li>
                </ul>
            </div>
        </div>
    )
}

export default CardProfile;