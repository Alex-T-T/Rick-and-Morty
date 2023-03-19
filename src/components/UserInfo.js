
export const UserInfo = ({ avatar, userName }) => {

    return (
        <div style={{ padding: '5px', textAlign: 'center' }}>
            <h2 >Welcome</h2>
            <img src={avatar} style={{ margin: '10px auto', borderRadius: '50%' }} alt="user" />
            <p>{userName}</p>
        </div>
    )
}