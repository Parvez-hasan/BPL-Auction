import { Suspense, useState } from "react"
import { AvalaliblePl } from "./components/AvalaliblePl/AvalaliblePl"
import { Navber } from "./components/Navber/Navber"
import { Selected } from "./components/SelectedPl/Selected"
import Banner from "./components/Navber/Banner"

 const fetchPlayers = async () => {
    const res = await fetch("/plyear.json")
   return res.json()
  }


 const playerPromise = fetchPlayers() 

function App() {
  const [toggle, setToggle] = useState(false);
  const [avalalibleBalence, setAvalalibleBalence] = useState(150000);


  return (
    <>

  <Navber avalalibleBalence={avalalibleBalence}></Navber>
  <Banner></Banner>

  <div className="container mx-auto flex justify-between items-center py-3 px-3">
    <h1 className="text-xl md:text-2xl font-bold">Available Players</h1>
    <div className="flex ">
      <button onClick={() => setToggle(true)} className={`border-2 border-gray-500 border-r-0 rounded-l-xl font-bold py-3 px-5 ${toggle === true ? "bg-[#E7FE29]" : ""}`} >Available Players</button>
      <button onClick={() => setToggle(false)} className= {`border-2 border-gray-500 border-l-0 rounded-r-xl font-bold py-3 px-5 ${toggle === false ? "bg-[#E7FE29]" : "" }`}>Selected <span>0</span> </button>
    </div>
  </div>


  {
    toggle ?  <Suspense fallback={<span className="loading loading-dots loading-lg flex mx-auto mt-4"></span>}>
   <AvalaliblePl playerPromise={playerPromise} 
   avalalibleBalence={avalalibleBalence}
    setAvalalibleBalence={setAvalalibleBalence}></AvalaliblePl>
 </Suspense> 
 :  <Selected></Selected>
  }
    </>
  )
}

export default App
