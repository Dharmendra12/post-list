import React from 'react';

const PostList = ({ data }) => {
    return (
        <table className="table table-border">
            <thead className=" text-info">
                <tr>
                    <th className="text-center">ID</th>
                    <th>Post Id</th>
                    <th  className="text-center">Name</th>
                    <th  className="text-center">Email</th>
                    <th className="text-center">Body</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.postId}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PostList;
