import { createRoot } from 'react-dom/client'
import Info from './components/Info'

const root = createRoot(document.getElementById('root'))

function App () {
    return (
        <div>
            <Info />
        </div>
    )
}
export default App

root.render(<App />)