import React from "react";
import {useParams} from "react-router-dom";

export const EditBlogPage : React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Editing Blog Post</h1>
            <p>Blog ID: {id}</p>
            {/* Fetch and display the blog post using the ID */}
        </div>
    );
};