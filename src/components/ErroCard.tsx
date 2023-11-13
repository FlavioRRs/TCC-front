import { IProblem } from "../types/Problem"

export default function ErroCard({nome, cod, desc, crit, dir, aux}: IProblem) {
  return(
    <div className="flex flex-col justify-between text-[#34858A] border-2 border-[#34858A] w-full max-w-[256px]">
      <p className="font-bold p-2 text-xl">{nome}</p>
      <div className="bg-[#34858A] text-white flex justify-between px-2 text-lg">
        <p>Nível: <strong>{crit}</strong></p>
        <p>Código: {cod}</p>
      </div>
      <p className="p-2 text-lg">{desc}</p>
      <div className="px-2 flex justify-between">
        <a target="_blank" href={dir} className="underline opacity-80 hover:opacity-100">acessar critério</a>
        <a target="_blank" href={aux} className="underline opacity-80 hover:opacity-100">material auxiliar</a>
      </div>
    </div>
  )
}