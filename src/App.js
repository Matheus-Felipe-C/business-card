import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

function App () {
    return (
        <div>
            <h1>Hello!</h1>
        </div>
    )
}
export default App

root.render(<App />)