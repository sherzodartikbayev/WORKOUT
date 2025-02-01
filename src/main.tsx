import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './components/providers/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './components/providers/auth-provider.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider defaultTheme='dark'>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
