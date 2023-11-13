import axios from "axios";
import {useState} from "react";

interface IProps {
  setLoading: any,
  setHtmlContent: any
}

export default function UrlModal({setLoading, setHtmlContent}: IProps) {

  const [url, setUrl] = useState<string>('');

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setLoading(true);
    e.preventDefault();
    const resposta = await axios.post("http://localhost:3000/url", JSON.stringify({url}), {
      headers : {'Content-Type': 'application/json'}
    })
    setLoading(false)
    setHtmlContent(resposta.data.htmlContent);
  }


  return(
    <form className="h-screen bg-black/50 flex items-center justify-center px-2">
      <div className="p-10 flex flex-col gap-10 bg-white text-[#022A2D] rounded-sm max-w-[500px] w-full">
        <label className="text-3xl text-center font-bold" htmlFor="url">URL</label>
        <input onChange={(e) => setUrl(e.target.value)} type="text" name="url" id="url" placeholder="https://" className="outline-none p-2 w-full border-b-2 focus:bg-gray-100/50 duration-300" required />
        <button type="submit" onClick={(e) => handleSubmit(e)} className="border-2 border-[#34858A] text-[#34858A] py-4 rounded-sm hover:bg-[#34858A] hover:text-white transition-colors duration-200">Analisar</button>
      </div>
    </form>
  )
}