import { useState,useEffect } from 'react'
import { Card } from '../components/ui/Card'
import { Sidebar } from '../components/ui/Sidebar'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useParams } from 'react-router-dom'

export function SharedDashboard() {
const [contents, setContents] = useState([]);
const [username, setUsername] = useState('')

const {sharelink} = useParams()

  async function fetch() {
    const response = await axios.get(`${BACKEND_URL}/api/brain/${sharelink}`,);
    console.log(response)
    setContents(response.data.content || []);
    setUsername(response.data.username || '');
    console.log(username)
    console.log(contents)
  }

  useEffect(() => {
    fetch();
  }, []);














  return (<div>
    
    <Sidebar/>

    <div className='ml-76 p-4 min-h-screen bg-gray-100'>

      

      <div className='flex justify-between gap-4'>
        <span className='pl-1 font-medium text-2xl'>Brain From: <div className='text-4xl font-bold '>{username}</div> </span>     
      </div>
      



      <div className='flex gap-4 mt-4 flex-wrap'>
        {contents.map(({title, link, type})=><Card type={type} link={link} title={title} />)}
      </div>
    
    
    
    </div>

</div>
  )
}


