import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { ThemeProvider } from './components/providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme='dark'>
			<App />
		</ThemeProvider>
	</StrictMode>
)
