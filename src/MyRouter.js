
import { BrowserRouter,Route,Router } from 'react-router-dom'
import TextForm from './TextForm'
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import About from './Components/About'
import React, { useState} from 'react'

const MyRouter = () => {
    const [mode, setMode] = useState('light')
    const [modes, setModes] = useState('danger')
    const [ltText, setltText] = useState('Enable DarkMode')
    const [LtText, setLtText] = useState('Enable greenish mode')
    const [alert, setAlert] = useState(null)
    
    const showAlert = (message, type) => {
      setAlert({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      },1500)
      
    }
    const toggleMode = () => {
      if (mode === 'light' ) {
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        setltText('Disable DarkMode')
        showAlert("Dark Mode is Enabled",'success')
      }
   
  
      
    
  
      else
      {
        
          setMode('light')
          document.body.style.backgroundColor = 'white';
       
          setltText('Enable DarkMode')
          showAlert("Light mode is enabled", 'success')
        
        
      }
     
    }
    const togglishMode = () => {
        if (modes === "danger") {
            setModes('#25a123')
            document.body.style.backgroundColor = '#276769';
            setLtText('Enable lightmode')
            showAlert("greenish mode is enabled", 'success')
      
        }
        else {
     
        
            setModes('danger')
            document.body.style.backgroundColor = 'white';
     
            setLtText('Enable greennish mode')
            showAlert("Light mode is enabled", 'success')
      
        
        }
    }
      
  return (
      <>
          <BrowserRouter>
              <Router>
                  <Route page="/" element={<Navbar title='TextUtils' aboutme="About Us" mode={mode} modes={modes} togglishMode={togglishMode} toggleMode={toggleMode} textmode={ltText} textMode={LtText} />} />
                  <Route element={<Alert/>}/>
                  <Route page="/Home" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert } />} />
                  <Route page="/about" element={<About/>} />
              </Router>
          </BrowserRouter>
      </>
  )
}

    export default MyRouter