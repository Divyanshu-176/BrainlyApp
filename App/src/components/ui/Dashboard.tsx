import { useState } from 'react'
import { Button } from './Button'
import { Card } from './Card'
import { CreateContentModal } from './CreateContentModal'
import { PlusIcon } from '../../icons/PlusIcon'
import { ShareIcon } from '../../icons/ShareIcon'
import { Sidebar } from './Sidebar'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)

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
      



      <div className='flex gap-4 mt-4'>
        <Card title='Youtube videos' link='https://www.youtube.com/watch?v=LL5pu9GzziA' type='youtube'/>
        <Card title='Important tweet' link='https://x.com/piyush100x/status/1984972162747560005' type='twitter'/>
      </div>
    
    
    
    </div>

</div>
  )
}


