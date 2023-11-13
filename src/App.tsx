import { useState } from "react";
import UrlModal from "./components/UrlModal";
import ErrosPage from "./pages/ErroPages";
import Loading from "./pages/Loading";

function App() {

  const [loading, setLoading] = useState<boolean>(false)
  const [htmlContent, setHtmlContent] = useState<string>();


  return (
    <>
        <main className="h-screen">
          {
            htmlContent ?
            (<ErrosPage htmlContent={htmlContent} setHtmlContent={setHtmlContent}/>) :
            loading ? (<Loading/>) : (<UrlModal setLoading={setLoading} setHtmlContent={setHtmlContent}/>)
          }
        </main>
    </>
  )
}

export default App
