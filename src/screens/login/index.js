import React, { useEffect, useState } from 'react'
import TextField from '../../components/textField'
import { PrimaryBtn, TextBtn } from '../../components/button'
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import styles from '../register/register.module.css'

export default function Login() {
    const [err, setErr] = useState("");
    const [loginDetails, setLoginDetails] = useState({});
    const [allUsers, setAllUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const existingUsers = Array.isArray(getLocalStorage("designingSolutionsUser")) ? getLocalStorage("designingSolutionsUser") : [];
        setAllUsers(existingUsers)
    }, [])

    const userLogin = () => {
        const validUser = allUsers.find(user => user.mobile === loginDetails.mobile && user.password === loginDetails.password)
        if (!validUser) return setErr({ message: "invalid user credentials" })
        setLocalStorage("myUser", validUser)
        navigate("/");
    };

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.main}>
                <>
                    <div className={styles.textFieldWrapper}>
                        <TextField
                            placeholder={"Mobile Number"}
                            onChange={(e) => setLoginDetails({
                                ...loginDetails,
                                mobile: e.target.value
                            })}
                            inputType={"Number"}
                            value={loginDetails.mobile}
                        />
                    </div>
                    <div className={styles.textFieldWrapper}>
                        <TextField
                            placeholder={"Password"}
                            onChange={(e) => setLoginDetails({
                                ...loginDetails,
                                password: e.target.value
                            })}
                            value={loginDetails.password}
                        />
                    </div>
                    {err && <p className='error'>{err.message}</p>}
                    <PrimaryBtn
                        title="Login"
                        onClick={() => { userLogin() }}
                        mainStyle={{ textAlign: 'center' }}
                        style={{ width: "50%", backgroundColor: "#2bb0b7", color: "#fff", fontWeight: 500 }}
                    />
                    <TextBtn
                        title="Register"
                        onClick={() => navigate("/register")}
                        mainStyle={{ textAlign: 'center' }}
                    />
                </>


            </div>
        </div>
    )
}
