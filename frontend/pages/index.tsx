import { useEffect, useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/users', { credentials: 'include' })
      .then(res => res.json())
      .then(setUsers)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="border p-2 rounded">
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  )
}