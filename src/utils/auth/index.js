import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth({ Comp }) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false)
        if (!localStorage.getItem("myUser")) {
            navigate("/login")
        }
        else {
            navigate("/")
        }
    }, [])

    return !loading && <Comp />
}
