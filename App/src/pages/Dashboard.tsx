import { useEffect, useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
  const {contents,fetch} = useContent()

  useEffect(()=>{fetch()},[fetch, modalOpen])

  return (<div>
    
    <Sidebar/>

    <div className='ml-76 p-4 min-h-screen bg-gray-100'>

      <div className='opacity-80'>
        <CreateContentModal open={modalOpen} onClose={()=>{setModalOpen(false)}} />
      </div>

      <div className='flex justify-between gap-4'>
        <span className='pl-1 font-semibold text-4xl'>Add Notes</span>
        <div className='flex justify-end gap-4'>
          <Button onClick={()=>{setModalOpen(true)}} size="md" variant="primary" text="Add content" startIcon={<PlusIcon size={"md"}/>}/>
          <Button size="md" variant="secondary" text="share" startIcon={<ShareIcon size={"md"}/>} 


          onClick={async () => {
          try {
            const response = await axios.post(`${BACKEND_URL}/api/brain/share`, { share: true },{
              headers:{Authorization:localStorage.getItem("authorization")}
            });
  
            const shareUrl = `http://localhost:5173${response.data.point}`;
            console.log(`${shareUrl}`)
          
            await navigator.clipboard.writeText(shareUrl.toString());
            alert("copied")
          } catch (err) {
            console.error("Error:", err);
          }
        }}/>

        </div>
        
      </div>
      



      <div className='flex gap-4 mt-4 flex-wrap'>
        {contents.map(({title, link, type})=><Card type={type} link={link} title={title} />)}
      </div>

        <br /><br /><br />

      <span>Fixed cards for demo (Still working on delete & sidebar)</span>
      <div className='flex gap-4 mt-4 flex-wrap'>
        
        <Card type='youtube' title='Youtube Card' link='https://www.youtube.com/watch?v=XnQ7Py8D6v0'/>
        <Card type='twitter' title="X (Twitter) Card" link='https://x.com/ani_shots/status/1985412920616829387/photo/1' />
        <Card type="other" title='Random Reddit' link='https://www.reddit.com/r/VinlandSaga/comments/1cen9y5/my_top_20_vinland_saga_episodes/' />
      </div>
    
    
    
    </div>

</div>
  )
}


