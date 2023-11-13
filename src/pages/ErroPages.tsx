import { useEffect, useState } from "react"
import getProblems from "../services/getProblems"
import Problem from "../services/Problem";
import ErroCard from "../components/ErroCard";

export default function ErrosPage({htmlContent, setHtmlContent}: {htmlContent: string, setHtmlContent: React.Dispatch<React.SetStateAction<string | undefined>>}) {

  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    setProblems(getProblems(htmlContent))
  }, [])

  return(
    <div className="flex flex-col items-center gap-10">
      <button className="text-[#34858A] bg-transparent border-2 border-[#34858A] px-4 py-2 text-xl absolute top-10 left-10 opacity-50 hover:opacity-100 hover:text-white hover:bg-[#34858A] transition-opacity duration-100" onClick={() => {setHtmlContent("")}}>voltar</button>
      {problems.length !== 0 ? (
        <>
          <div>
            <h1 className={`text-2xl text-center mt-10 px-8 py-4 border-2 ${problems.length >= 5 * 90 / 100 ? "text-[#DA2A01] bg-[#FBEAE5] border-[#DCBDB9]": ""} ${problems.length < 5 * 90 / 100 && problems.length >= 5*60/100 ? "text-[#F0A135] bg-[#FEF8E6] border-[#F0E2CE]": ""} ${problems.length < 5 * 60 / 100 ? "text-[#459F31] bg-[#EDF6EA] border-[#80AD77]": ""}`}>Total de erros: {problems.length}/5</h1>
          </div>
          <div className="flex justify-center gap-10 flex-wrap max-w-[90%]">
            {problems.map(problem => {
              return(<ErroCard key={problem.codigo} nome={problem.nome} cod={problem.codigo} desc={problem.desc} crit={problem.crit} dir={problem.dir} aux={problem.aux} />)
            })}
          </div>
          <hr className="w-[90%] border-[#34858A30]"/>
          <h2 className="text-[#34858A]">Nem todas diretrizes podem ser verificadas atraves do código, por isso se recomenda olhar a documentação da <a target="_blank" className="font-bold underline" href="https://www.w3.org/WAI/standards-guidelines/">WCAG</a></h2>
        </>
      ) : (
        <div className="h-screen flex items-center flex-col justify-center text-2xl text-center">
          <div className="px-16 py-8 border-2 text-[#459F31] bg-[#EDF6EA] border-[#80AD77]">
            <h1 className="mb-5">O verificador não encontrou nenhum erro no seu código, mas isso não significa que ele esta 100%.</h1>
            <h2>Existem erros que não podem ser totalmente verificadas pelo código, por isso, recomendo visitar a documentação da <a target="_blank" className="font-bold underline" href="https://www.w3.org/WAI/standards-guidelines/">WCAG</a>.</h2>
          </div>
        </div>
      )}
      
    </div>
  )
}