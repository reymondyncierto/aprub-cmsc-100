import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Root() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/sign-up');
        console.log("clicked")
    }
    return (
        <>
            <div className="login-container">
                <form>
                    <div class="imgcontainer">
                        <img src="https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*" alt="Avatar" class="avatar" />
                    </div>

                    <div class="container-form">
                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                    </div>
                </form>
                <div className='signup-container'>
                    <p>Don't have an account yet? Sign up instead.</p>
                    <button className="suStudent-btn" onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </>
    );
}   