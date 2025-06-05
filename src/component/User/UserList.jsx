import { Link } from "react-router-dom"

export default function UserList() {
    const userData = [
        { id: 1, name: 'Appaso' },
        { id: 2, name: 'Ajay' },
        { id: 3, name: 'Pranav' },
        { id: 4, name: 'Avii' },
        { id: 5, name: 'Prithm' },
    ]
    return (
        <div style={{ marginLeft: 20 }}>
            <h1>User Page using Dynamic routing</h1>
            {
                userData.map((item) => (
                    <div>
                        <h4><Link to={"/users/"+item.id}>{item.name}</Link></h4>
                    </div>
                ))
            }
        </div>
    )
}