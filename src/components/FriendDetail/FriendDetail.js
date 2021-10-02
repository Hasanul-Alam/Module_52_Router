import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);
    const { id, name, phone, website, username, company } = friend;
    return (
        <div>
            <h2>This is {id} no. friend detail.</h2>
            <h3>His/her name is {name}</h3>
            <h3>And the username is {username}</h3>
            <h4>Phone number is {phone}</h4>
            <p>Vsit his/her website: {website}</p>
            <p>His/her company name is {company?.name}</p>
        </div>
    );
};

export default FriendDetail;