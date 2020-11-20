import React from 'react';
import User from './User';
const Home = () => {
    return (
        <div className="off-canvas-sidebar">
            <div className="wrapper wrapper-full-page">
                <div className="page-header login-page header-filter">
                    <div className="container">
                        <div className="row">
                            <User />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
