import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

console.log('Attempting to mount React app...');

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('FATAL: Root element not found!');
  document.body.innerHTML = '<h1 style="color:red">ERROR: Root element not found</h1>';
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    console.log('React app mounted successfully.');
  } catch (error) {
    console.error('Error mounting React app:', error);
    document.body.innerHTML = `<h1 style="color:red">Error mounting app: ${error}</h1>`;
  }
}
