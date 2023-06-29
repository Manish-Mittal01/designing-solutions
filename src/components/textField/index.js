

import React from 'react';
import styles from '../components.module.css'

export default function TextField({ value = "", onChange, icon, placeholder, inputType = "text" }) {

    return (
        <div className={styles.code_input_box}>
            <div className={styles.code_input}>
                {icon && <img src={icon} alt="" />}
                <input
                    value={value}
                    onChange={(e) => {
                        onChange(e)
                    }}
                    type={inputType}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}
