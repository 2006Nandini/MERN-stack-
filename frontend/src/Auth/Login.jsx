import React from 'react'

const Login = () => {
    const [userData, setUserData] = React.useState({
        email: "",
        password: ""
    });
    const handleChange=(e)=>{
        setUserData((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(userData);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email" name="email" placeholder='Enter the Email' value={userData.email} onChange={handleChange} />
        <label>password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login