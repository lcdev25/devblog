import React from 'react';
import { useParams } from 'react-router-dom';

export const ViewBlogPage: React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Viewing Blog Post</h1>
            <p>Blog ID: {id}</p>
            {/* Fetch and display the blog post using the ID */}
        </div>
    );
};