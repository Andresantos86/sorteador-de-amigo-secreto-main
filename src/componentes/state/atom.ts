import { atom } from "recoil";

export const listaParticipantesstate = atom<string[]>({
  key: 'listaParticipantesState',
  default:[]
})