import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import InputFocus from './App.jsx'
import TabSwitcher from './components/TabSwitcher.jsx'

import FormValidation from './components/FormValidation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <InputFocus/> */}
    <TabSwitcher/>
    <FormValidation/>
  </StrictMode>,
)
