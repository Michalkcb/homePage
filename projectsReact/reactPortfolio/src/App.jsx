import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Certificates from './certificates'

function App() {

  return (
    <>
<Sidenav/>
<Main/>
<Projects/>
<Certificates/>
<Resume/>
<Work/>
<Contact/>
    </>
  )
}

export default App
