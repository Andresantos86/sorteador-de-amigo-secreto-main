import { useSetRecoilState } from "recoil"
import { listaParticipantesstate } from "../state/atom"

export const useAdicionarParticipante = () =>{
  const setLista = useSetRecoilState(listaParticipantesstate)
  // funcao para adicionar o nome , recebe o nome e retorna a lista atual e a nova lista com o participante novo
  return (nomeDoParticipante: string)=>{
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}