import { Routes, Route } from "react-router-dom";
import SPA from "./pages/SPA";

const App = () => {
  return (
    <main className='w-screen min-h-screen bg-gray-950 text-white'>

      <Routes>
        <Route path="/" element={<SPA />} />
      </Routes>

    </main>
  )
}

export default App