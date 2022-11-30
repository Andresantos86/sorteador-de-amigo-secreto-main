import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesstate } from "../state/atom"

export const useAdicionarParticipante = () =>{
  const setLista = useSetRecoilState(listaParticipantesstate)
  const lista = useRecoilValue(listaParticipantesstate)
  const setErro = useSetRecoilState(erroState)
  // funcao para adicionar o nome , recebe o nome e retorna a lista atual e a nova lista com o participante novo
  return (nomeDoParticipante: string)=>{
    if(lista.includes(nomeDoParticipante)){
      setErro('Nomes duplicados não são permitidos!')
      setTimeout(()=>{
        setErro('')
      },5000)
      return
    }
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
  }
}