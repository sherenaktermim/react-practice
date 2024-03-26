

const User10 =({user1}) => {
    const{username,phone,website}=user1

    return (
        <div className="cards" >
                <h1> {username} </h1>
                <h1> {phone} </h1>
                <h1> {website} </h1>
               
                </div>

    );
};

export default User10;