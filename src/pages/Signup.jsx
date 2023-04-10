import { useState } from 'react';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = e => {
        e.preventDefault();

        if (!name) {
            alert('Please enter your name.');
            return;
        }

        if (!email) {
            alert('Please enter your email.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!password) {
            alert('Please enter your password.');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        alert('Form submitted successfully!');
        console.log(name, email, password)
    };

    return (
        <div className="app">
            <form className='form' onSubmit={handleSubmit} >
                <h1>Registration</h1>
                <div>
                    <label >Name</label>
                    <input className='inputField'
                        name='username'
                        value={name}
                        type="text"
                        placeholder='Enter the name...'
                        onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label >Email</label>
                    <input className='inputField'
                        name='email'
                        value={email}
                        type="text"
                        placeholder='Enter the email...'
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label >Password</label>
                    <input className='inputField'
                        name='password'
                        value={password}
                        type="text"
                        placeholder='Enter the password...'
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div >
                    <button className='button'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
