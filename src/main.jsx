import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { FavoritesProvider } from './context/favoritesContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FavoritesProvider>
      <App />
      <Toaster position="bottom-right" />
    </FavoritesProvider>
  </BrowserRouter>
)
