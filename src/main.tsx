import { createRoot } from 'react-dom/client'

import '~/app/i18n/init'
import './global.css'

import App from './App'

createRoot(document.getElementById('root')!).render(<App />)
