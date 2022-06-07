import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Loading = () => {
    return (
        <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )
}

export default Loading