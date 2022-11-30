import { useRecoilValue } from "recoil"
import { listaParticipantesstate } from "../state/atom"

export const useListaParticipantes =() =>{
  return useRecoilValue(listaParticipantesstate)
}