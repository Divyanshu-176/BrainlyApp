import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button size="sm" variant="primary" text="share" />
      <Button size="md" variant="secondary" text="Add content" startIcon={<PlusIcon size={"lg"}/>} endIcon={<ShareIcon size={"lg"}/>}/>
      <Button size="lg" variant="secondary" text="Add content" />
    </>
  )
}

export default App
