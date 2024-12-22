import React from "react";
import { useParams } from "react-router-dom";

const Profile: React.FC = () => {
    const { id } = useParams<Record<string, string>>();
    return (
        <div>Profile ID: {id}</div>
    )
}

export default Profile;
