import React from "react";
import {useParams} from "react-router-dom";

export const ExploreTopicBlogsPage: React.FC = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Exploring Blogs for topic: {id}</h1>
        </div>
    );
};