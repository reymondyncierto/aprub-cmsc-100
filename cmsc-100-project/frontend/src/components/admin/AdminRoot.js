import Cookies from 'universal-cookie';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AdminRoot() {
    const navigate = useNavigate()
    const handleLogout = (e) => {
        // Clear the authentication token (if applicable)
        // Example: If you are using cookies, use the following code:
        const cookies = new Cookies();
        cookies.remove('authToken');
    
        // Navigate to the homepage
        navigate('/');
    }

    return(
        <div>
            <button type="button" onClick={handleLogout}>Logout</button>
            <Link to="/admin/manage-student-apps">
                <button type="button" className='active' id='student-button' onClick={() => {
                    document.getElementById("student-button").classList.add("active")
                    document.getElementById("approver-button").classList.remove("active")
                }}>Manage Student Applications</button>
            </Link>
            <Link to="/admin/manage-approvers">
                <button type="button" id='approver-button' onClick={() => {
                    document.getElementById("approver-button").classList.add("active")
                    document.getElementById("student-button").classList.remove("active")
                }}>Manage Approvers</button>
            </Link>
            ADMIN
            <br/>
            <Outlet />
        </div>
    )
}