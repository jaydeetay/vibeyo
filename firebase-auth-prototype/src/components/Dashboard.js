
import React from 'react';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";

const Dashboard = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center">Dashboard</h2>
                            <p className="text-center">Welcome, you are logged in!</p>
                            <div className="text-center">
                                <button className="btn btn-primary" onClick={handleSignOut}>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
