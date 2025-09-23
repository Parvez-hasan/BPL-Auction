import { Suspense } from "react"
import { AvalaliblePl } from "./components/AvalaliblePl/AvalaliblePl"
import { Navber } from "./components/Navber/Navber"
import { Selected } from "./components/SelectedPl/Selected"

 const fetchPlayers = async () => {
    const res = await fetch("/plyear.json")
   return res.json()
  }

function App() {

  const playerPromise = fetchPlayers() 

  return (
    <>

  <Navber></Navber>
 <Suspense fallback={<span className="loading loading-dots loading-lg flex mx-auto mt-4"></span>}>
   <AvalaliblePl playerPromise={playerPromise}></AvalaliblePl>
 </Suspense>
  <Selected></Selected>

    </>
  )
}

export default App
