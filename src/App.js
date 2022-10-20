import axios from 'axios';
import { useState ,useEffect} from 'react';
import './App.css';

function App() {

  const [Users, fetchUsers] = useState([])

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    <div>
      <h1>hello mati </h1>
      <ul>
        {Users.map((item, i) => {
          return <li key={i}>{item.name}</li>
        })}
      </ul>
    </div>
    </>
  );
}

export default App;
