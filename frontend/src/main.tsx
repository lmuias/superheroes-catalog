import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import { Root } from './Root';
import { AppProvider } from './AppContet';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AppProvider>
        <Root />
      </AppProvider>
    </Router>
  </StrictMode>,
)
