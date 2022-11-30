import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaParticipantes } from "./hook/useListaParticipantes"
import Rodape from "./Rodape"

jest.mock('./hook/useListaParticipantes', ()=>{
  return {
    useListaParticipantes: jest.fn()
  }
})

const mockNavegacao =  jest.fn()
jest.mock('react-router-dom', ()=>{
  return {
    useNavigate: ()=> mockNavegacao
  }
})
describe('Onde não existem participantes suficientes',() =>{
  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })
  test('A brincadeira não pode ser iniciada',() =>{
    render(
      <RecoilRoot>
        <Rodape/>
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')
    expect(botao).toBeDisabled()
  })
})

describe('quando existem participantes suficientes',() =>{
  const participantes = ['Ana', 'Catarina', 'Josefina']
  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
  })
  test('A brincadeira pode ser iniciada',() =>{
    render(
      <RecoilRoot>
        <Rodape/>
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')
    expect(botao).not.toBeDisabled()
  })

  test('A brincadeira foi iniciada',()=>{
    render(
      <RecoilRoot>
        <Rodape/>
      </RecoilRoot>
    )
    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalled()
  })
})