import React from 'react'
import { TextBtn } from '../../components/button'
import { removeLocalStorage } from '../../utils/localStorage'
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'

export default function Home() {
    const navigate = useNavigate()
    const logout = () => {
        removeLocalStorage("myUser")
        navigate("/login")
    }
    return (
        <div className={styles.main}>
            <h1 >Welcome at Manish Mittal's Home</h1>
            <TextBtn
                title="logout"
                onClick={logout}
            />

        </div>
    )
}
