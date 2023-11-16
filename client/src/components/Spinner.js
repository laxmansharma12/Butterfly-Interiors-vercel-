import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Spinner = ({ path = "" }) => {
    const [count, setCount] = useState(3);
    const Navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000)
        count === 0 && Navigate(`/${path}`);
        return () => clearInterval(interval);
    }, [count, Navigate])
    return (
        <>
            <div className="d-flex flex-column justify-content-center">
                <h1>Redirecting you to Home Page in {count}s </h1>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner