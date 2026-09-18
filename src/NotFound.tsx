import { useNavigate } from 'react-router-dom' 

function NotFound() {
    const nav = useNavigate();
  return (
    <div>
        <h1> Page Not Found </h1>
        <button className='p-4 bg-red-500 text-white' onClick = {() => nav(-1)}>
            Go back
        </button>
    </div>
  )
}

export default NotFound