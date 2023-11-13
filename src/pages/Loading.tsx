import loading from "../assets/loading.svg";

export default function Loading() {
  return (
  <div className="h-screen flex items-center justify-center">
    <img src={loading} alt="Imagem de loading" className="animate-spin w-10" />
  </div>
  )
}