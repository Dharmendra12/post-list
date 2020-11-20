import React from 'react';
import { Link } from 'react-router-dom';
const User = () => {
    return (
        <div className="col-lg-5 col-md-6 col-sm-6 offset-3">
            <div className="card card-stats">
                <div className="card-header card-header-info card-header-icon">
                    <div className="card-icon">
                        <i className="material-icons">{'people'}</i>
                    </div>
                    <p className="card-category">{'Dharmendra Singh'}</p>
                    <h3 className="card-title">{'Full Stack Developer'}</h3>
                </div>
                <div className="card-footer">
                    <div className="stats offset-4">
                        <Link className="btn btn-info text-center" to={'post-list'}>POST LIST</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default User;
