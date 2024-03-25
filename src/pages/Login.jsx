import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await login(username, password)

            // Redirect
            console.log('Login Berhasil')
            navigate('/dashboard', {replace: true})
        } catch (error) {
            console.log('Login gagal: ', error)
        }
    }

    return (
        <>
            <div>Selamat Datang di FakeStoreAPI</div>
            <form onSubmit={handleLogin} >
                <h3>Login</h3>
                <div className="mb-3" >
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(event) => setUsername(event.target.value)}
                        className="form-control"
                        placeholder="Masukkan username anda" />
                </div>
                <div className="mb-3" >
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                        placeholder="Masukkan password anda" />
                </div>
                <div className="d-grid" >
                    <button type="submit" className="btn btn-primary" >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )

}

export default Login;