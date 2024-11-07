import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import { Root } from './Root.tsx'
import { AppProvider } from './AppContet.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AppProvider>
        <Root />
      </AppProvider>
    </Router>
  </StrictMode>,
)
