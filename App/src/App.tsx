import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button size="md" variant="primary" text="share" startIcon={<ShareIcon size={"md"}/>} />
      <Button size="md" variant="secondary" text="Add content" startIcon={<PlusIcon size={"md"}/>}/>
    </>
  )
}

export default App
