import React from 'react'
import styles from '../components.module.css'

export function PrimaryBtn({ onClick, title, style, className, mainStyle, disabled = false }) {
    return (
        <div className={styles.main} style={mainStyle}>
            <button
                disabled={disabled}
                onClick={(e) => onClick()}
                className={styles.btn}
                style={style}
            >
                {title}
            </button>
        </div>
    )
}


export function TextBtn({ onClick, title, style, className, mainStyle, disabled = false }) {
    return (
        <div className={styles.main} style={mainStyle}>
            <button
                disabled={disabled}
                onClick={(e) => onClick()}
                className={styles.textBtn}
                style={style}
            >
                {title}
            </button>
        </div>
    )
}

