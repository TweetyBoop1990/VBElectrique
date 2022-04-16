import styles from './ContactUsForm.module.scss'
import { useState, React } from 'react'
import { Button, Form } from 'semantic-ui-react'


export default function ContactUsForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          name,
          email,
          phone,
          message
        }
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)
            setName('')
            setPhone('')
            setEmail('')
            setMessage('')
          }
        })
      };

    return (
        <div className={`ui container ${styles.input}`}>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Full Name</label>
                    <input
                        placeholder='John Smith'
                        onChange={(e)=>{setName(e.target.value)}}
                        name="name"
                        value={name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='john.smith@example.com'
                        type="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        name="email"
                        value={email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Phone Number</label>
                    <input
                        placeholder='(555) 555-5555'
                        onChange={(e)=>{setPhone(e.target.value)}}
                        name="phone"
                        value={phone}
                    />
                </Form.Field>
                <Form.TextArea
                    placeholder="More details..."
                    onChange={(e)=>{setMessage(e.target.value)}}
                    name="message"
                    value={message}
                >
                    <label>Message</label>
                </Form.TextArea>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
