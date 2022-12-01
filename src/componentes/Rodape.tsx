import { useNavigate } from "react-router-dom"
import { useListaParticipantes } from "./hook/useListaParticipantes"
import { useSorteador } from "./hook/useSorteador"
import './Rodape.css'

const Rodape =()=>{
  const participantes = useListaParticipantes()
  const navegarPara = useNavigate()
  const sortear = useSorteador()
  const iniciar =()=>{
    sortear()
    navegarPara('/sorteio')
  }
  return(
    <footer className="rodape-configuracoes">
      <button className="botao" disabled={participantes.length< 3} onClick={iniciar} >Iniciar Brincadeira</button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}
export default Rodape