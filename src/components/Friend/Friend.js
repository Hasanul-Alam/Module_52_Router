import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const { name, email, address, id } = props.friend;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div className='single-friend'>
            <h2>Hello I am {name}</h2>
            <h4>Mail me: {email}</h4>
            <p>My home address: <small>{address.city}</small></p>
            <Link to={`/friend/${id}`}>View Detail</Link>
            <br />
            <button onClick={handleClick}>Visit Me2</button>
        </div>
    );
};

export default Friend;