import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from './../../actions/postActions';
import { setLoading } from './../../actions/miscActions';

import PostList from './PostList';
const Posts = ({ setLoading, getPosts, loading, post }) => {
    const [posts, setPosts] = useState(post.posts);

    useEffect(() => {
        postList();
    }, [post.posts.length]);

    const postList = () => {
        setLoading(true);
        getPosts();
        setPosts(post.posts);
    };
    return (
        <div className="wrapper ">
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-icon card-header-info row">
                                    <div className="col-md-6">
                                        <div className="card-icon">
                                            <i className="material-icons">
                                                comments
                                            </i>
                                        </div>
                                        <h4 className="card-title text-info">Posts</h4>
                                    </div>
                                    <div className="col-md-3 left">
                                        <a
                                            className="btn btn-info btn-link"
                                            onClick={() => {
                                                postList();
                                            }}
                                            title="Home Page">
                                            <i className="material-icons">
                                                refresh
                                            </i>
                                            Referesh
                                        </a>
                                    </div>
                                    <div className="col-md-3 right">
                                        <Link
                                            className="btn btn-info btn-link"
                                            to="/"
                                            title="Home Page">
                                            <i className="material-icons">
                                                home
                                            </i>
                                            Go To Home Page
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive table-wrap">
                                        <PostList data={posts} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    post: state.post,
    loading: state.misc,
});
const mapDispatchToProps = (dispatch) => {
    return {
        setLoading: (loading) => {
            dispatch(setLoading(loading));
        },
        getPosts: () => {
            dispatch(getPosts());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
