import React from "react";
import {useParams} from "react-router-dom";

export const ViewProfilePage : React.FC = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Viewing Profile</h1>
            <p>Profile ID: {id}</p>
            {/* Fetch and display the blog post using the ID */}
        </div>
    );
};