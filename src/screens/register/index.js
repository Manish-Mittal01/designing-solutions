
import React, { useEffect, useState } from 'react';
import styles from './register.module.css'
import { PrimaryBtn, TextBtn } from '../../components/button';
import TextField from '../../components/textField';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export default function Register() {
    const [login, setLogin] = useState(0);
    const [signupDetails, setSignupDetails] = useState({
        mobile: "",
        name: "",
        password: "",
        email: ""
    });
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([])


    useEffect(() => {
        const existingUsers = Array.isArray(getLocalStorage("designingSolutionsUser")) ? getLocalStorage("designingSolutionsUser") : [];
        setAllUsers(existingUsers)
    }, [])

    const singupFeilds = [
        {
            placeholder: "Mobile Number",
            key: "mobile",
            type: "number"
        },
        {
            placeholder: "Full Name",
            key: "name"
        },
        {
            placeholder: "Password",
            key: "password"
        },
        {
            placeholder: "Email",
            key: "email"
        },

    ];

    const userSignup = async () => {
        setErr("")
        const emptyField = Object.values(signupDetails).find(value => !value)
        if (emptyField?.length === 0) return setErr({ message: "all fields are required" })
        if (![10].includes(signupDetails.mobile?.toString().length) || !(["6", "7", "8", "9"].includes(signupDetails.mobile?.toString()[0]))) {
            return setErr({ message: "Invalid Mobile Number" });
        }
        if (!signupDetails.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) return setErr({ message: "password must include alphanumeric character and a capital letter" })
        if (!signupDetails.email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) return setErr({ message: "invalid email" })

        const mobileExist = allUsers.find(user => user.mobile === signupDetails.mobile)
        if (mobileExist) return alert("user already exist")
        allUsers.push(signupDetails)
        setErr("");
        setLocalStorage("designingSolutionsUser", allUsers)
        navigate('/login');
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.main}>
                <>
                    {
                        singupFeilds.map(item => (
                            <div className={styles.textFieldWrapper} key={item.key}>
                                <TextField
                                    placeholder={item.placeholder}
                                    onChange={(e) => {
                                        setSignupDetails({
                                            ...signupDetails,
                                            [item.key]: e.target.value
                                        })
                                    }}
                                    inputType={item.type || "text"}
                                    value={signupDetails[item.key]}
                                />
                            </div>
                        ))
                    }
                    {err && <p className='error'>{err.message}</p>}
                    <PrimaryBtn
                        title="Signup"
                        onClick={() => { userSignup() }}
                        mainStyle={{ textAlign: 'center' }}
                        style={{ width: "50%", backgroundColor: "#2bb0b7", color: "#fff", fontWeight: 500 }}
                    />
                    <TextBtn
                        title="Login"
                        onClick={() => navigate("/login")}
                        mainStyle={{ textAlign: 'center' }}
                    />
                </>

            </div>
        </div>
    )
}
