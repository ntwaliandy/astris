import styles from "../styles/order.module.css"
import React , { useState } from 'react'
import { useRouter } from "next/router"

const Order = () => {
    const router = useRouter()
    const data = router.query


    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('sendinggg')
        let dataInfo = {
            firstName,
            lastName,
            email,
            address,
            data
        }

        fetch('/api/send', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setfirstName('')
              setlastName('')
              setEmail('')
              setAddress('')
            }
          })

          router.push('/')

    }
    return (
        <>
            <div className={styles.title}>Order details</div>
            <div className={styles.container}>
                <form>
                    <span className={styles.inputField} htmlFor="firstName">First Name: </span>
                    <input className={styles.inputInput} type="text" name="firstName" placeholder="Enter your First name" onChange={(e) => {setfirstName(e.target.value)}} /> <br />
                    <div className={styles.space}></div>
                    <span className={styles.inputField} htmlFor="lastName">Last Name: </span>
                    <input className={styles.inputInput} name="lastName"  type="text" placeholder="Enter your Last name" onChange={(e) => {setlastName(e.target.value)}} /> <br />
                    <div className={styles.space}></div>
                    <span className={styles.inputField} htmlFor="email">Email: </span>
                    <input className={styles.inputInput} name="email"  type="email" placeholder="Enter your Email" onChange={(e) => {setEmail(e.target.value)}} /> <br />
                    <div className={styles.space}></div>
                    <span className={styles.inputField} htmlFor="address">Address: </span>
                    <input className={styles.inputInput}  type="text" name="address" placeholder="Enter your Address" onChange={(e) => {setAddress(e.target.value)}}  /> <br />
                    <div className={styles.space}></div>
                    <input type="submit" className={styles.button} onClick={(e) => handleSubmit(e)} />
                </form>
            </div>
        </>
    )
}

export default Order