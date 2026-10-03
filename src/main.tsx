import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { keepChatWidgetAvatar } from './lib/chatWidgetAvatar'

createRoot(document.getElementById("root")!).render(<App />);
keepChatWidgetAvatar();
