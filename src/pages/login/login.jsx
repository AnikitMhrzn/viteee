import { useState } from 'react'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const onInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleSubmit = () => {
    setSubmitted(true)

    if (
      isEmailValid(formData.email) &&
      formData.password.length >= 6
    ) {
      alert('Login successful 🎉')
      navigate('/')
    }
  }

  return (
    <div className="flex justify-content-center p-4">
      <Card title="Login" className="w-full md:w-6">

        {/* Email */}
        <div className="field mb-3">
          <label>Email: </label>
          <InputText
            value={formData.email}
            onChange={(e) => onInputChange(e, 'email')}
            className={classNames({
              'p-invalid':
                submitted && !isEmailValid(formData.email)
            })}
          />
          {submitted && !isEmailValid(formData.email) && (
            <small className="p-error">Enter a valid email</small>
          )}
        </div>

        {/* Password */}
        <div className="field mb-4">
          <label>Password: </label>
          <Password
            value={formData.password}
            onChange={(e) => onInputChange(e, 'password')}
            toggleMask
            feedback={false}
            className={classNames({
              'p-invalid':
                submitted && formData.password.length < 6
            })}
          />
          {submitted && formData.password.length < 6 && (
            <small className="p-error">
              Password must be at least 6 characters
            </small>
          )}
        </div>

        <Button
          label="Login"
          icon="pi pi-sign-in"
          onClick={handleSubmit}
        />
      </Card>
    </div>
  )
}
