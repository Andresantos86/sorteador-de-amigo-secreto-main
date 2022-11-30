import React, { useRef, useState } from "react"
import { useAdicionarParticipante } from "./hook/useAdicionarParticipante"
import { useMensagemErro } from "./hook/useMensagemErro"
import './Formulario.css'
const Formulario = () => {

  const [nome, setNome] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const adicionarNaLista = useAdicionarParticipante()
const mensagemErro = useMensagemErro()

  const addparticipante = (evento: React.FormEvent<HTMLFormElement>) =>{
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form   onSubmit={addparticipante} >
      <input type="text" 
              ref={inputRef}
              placeholder="insira os nomes dos participantes" 
              value={nome}
              onChange={evento => setNome(evento.target.value)}/>
      <button disabled={!nome}>Adicionar</button>
      {mensagemErro && <p role='alert'>{mensagemErro}</p>}
    </form>

  )
}
export default Formulario