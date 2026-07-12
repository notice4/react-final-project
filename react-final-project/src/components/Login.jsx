import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx'

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    general: '',
  })
  const { setIsAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  const validate = () => {
    let isValid = true
    const newErrors = { username: '', password: '', general: '' }

    if (!formData.username) {
      newErrors.username = 'Username is required.'
      isValid = false
    } else if (!/^[a-zA-Z0-9]{3,}$/.test(formData.username)) {
      newErrors.username =
        'Username must be at least 3 alphanumeric characters.'
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.'
      isValid = false
    } else if (!/^(?=.*[0-9]).{6,}$/.test(formData.password)) {
      newErrors.password =
        'Password must be at least 6 characters and contain a number.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors((prev) => ({ ...prev, general: '' }))

    if (validate()) {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        })

        const data = await response.json()

        if (response.ok && data.success) {
          localStorage.setItem('token', data.token)
          setIsAuthenticated(true)
          navigate('/')
        } else {
          setErrors((prev) => ({
            ...prev,
            general: data.message || 'Invalid credentials',
          }))
        }
      } catch {
        setErrors((prev) => ({
          ...prev,
          general: 'An error occurred during login',
        }))
      }
    }
  }

  return (
    <div style={{ padding: '100px 20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
      {errors.general && (
        <p style={{ color: 'red', marginBottom: '15px' }}>{errors.general}</p>
      )}
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              borderColor: errors.username ? 'red' : '#ccc',
            }}
          />
          {errors.username && (
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.username}
            </span>
          )}
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              borderColor: errors.password ? 'red' : '#ccc',
            }}
          />
          {errors.password && (
            <span style={{ color: 'red', fontSize: '12px' }}>
              {errors.password}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="btn"
          style={{
            background: '#d87d4a',
            color: '#fff',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}
