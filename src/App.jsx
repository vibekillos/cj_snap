import { useState } from "react"
import CardComponent from "./components/Card"
import Navbar from "./components/Navbar"
import Typewriter from "./components/Typewriter"
import SelectedImageView from "./components/SelectedImageView"

const App = () => {
  const [selectedFile, setSelectedFile] = useState([])
  const getSelectedFile = (selectedFile) => {
    setSelectedFile(selectedFile)
  }
  return (
    <div className='w-full min-h-screen p-5 dark:bg-deep-black bg-surface-white'>
      {/* navbar */}
      <Navbar />
      {/* middle */}
      <div className="pt-16 flex flex-col space-y-10">
        {/* text  */}
        <div>
          <div className="pb-3">
            <Typewriter text={"hello world"}
              className={"text-4xl font-jet font-medium dark:text-surface-white"}
              cursor_color={"deep-black"}
              // d_cursor_color={"surface-white"} currently not being executed
            />
          </div>
        <h1 className="font-inter dark:text-surface-white/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Cumque sint laudantium quaerat exercitationem odit maxime fuga 
         commodi id unde, corrupti dignissimos molestias eos alias, ratione
          suscipit! Porro sit doloribus asperiores.
          </h1>
      </div>
      {/* card */}
        <div>
          <CardComponent getFile={getSelectedFile} />
        </div>
        {/* selected image view */}
        <SelectedImageView selectedImage={selectedFile} />
      </div>
    </div>
  )
}

export default App 
