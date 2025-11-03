import { useEffect, useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'

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
          <Button size="md" variant="secondary" text="share" startIcon={<ShareIcon size={"md"}/>} />
        </div>
        
      </div>
      



      <div className='flex gap-4 mt-4 flex-wrap'>
        {contents.map(({title, link, type})=><Card type={type} link={link} title={title} />)}
      </div>
    
    
    
    </div>

</div>
  )
}


