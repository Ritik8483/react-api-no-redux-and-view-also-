import React from 'react'
import styles from '../style/NavBar.module.css'

const ContactUs = () => {
  return (
    <div>
      <div className={styles.contactBox}>
        <h1>Contact Page</h1>
        <p className={styles.contact}><br/>Lorem Ipsum Press is licensed by Bionetwork Ltd. Our office is located within the company's building.<br/>
<br/>location
<br/>
<br/>Address:
<br/>Keas 69 Str.
<br/>15234, Chalandri
<br/>Athens,
<br/>Greece
<br/>
<br/>+30-2106019311 (landline)
<br/>+30-6977664062 (mobile phone)
<br/>+30-2106398905 (fax)</p>
      </div>
    </div>
  )
}

export default ContactUs