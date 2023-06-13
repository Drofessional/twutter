import { Link } from 'react-router-dom'

export default function Post({
  id, text, handle, username,
}) {
  return (
    <div key={id}>
      <h3>
        {username} 
        <Link to={`/${handle}`}>
          @{handle}
        </Link>
      </h3>
      {/* whiteSpace lets us use new-lines */}
      <p style={{whiteSpace: 'pre-wrap'}}>
        {text}
      </p>
    </div>
  )
}