import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

// Jest

describe('Comportamento do Formulario.tsx', () => {

  test('quando o input esta vazio, novos participantes nao podem ser adionados', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('insira os nomes dos participantes')
    //encontra o botao
    const botao = screen.getByRole('button')
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botao esteja desabilitado
    expect(botao).toBeDisabled()
  })

  test('adicionar um participante caso exista um nome preenchido', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('insira os nomes dos participantes')
    //encontra o botao
    const botao = screen.getByRole('button')
    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: ' Ana'
      }
    })
    // clicar no botao de submeter
    fireEvent.click(botao)
    //garantir que o input esteja com foco ativo
    expect(input).toHaveFocus()
    //garantir que o input não tenha um valor
    expect(input).toHaveValue('')
  })

  test('Nomes duplicados não podem ser adicionados na lista', () => {
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('insira os nomes dos participantes')
    //encontra o botao
    const botao = screen.getByRole('button')
    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: ' Ana'
      }
    })
    // clicar no botao de submeter
    fireEvent.click(botao)
    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: ' Ana'
      }
    })
    // clicar no botao de submeter
    fireEvent.click(botao)
    const msgErro = screen.getByRole('alert')
    expect(msgErro.textContent).toBe('Nomes duplicados não são permitidos!')
  })

  test('Sair a mensagem apos os timers', () => {
    jest.useFakeTimers()
    render(<RecoilRoot>
      <Formulario />
    </RecoilRoot>)

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('insira os nomes dos participantes')
    //encontra o botao
    const botao = screen.getByRole('button')
    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: ' Ana'
      }
    })
    // clicar no botao de submeter
    fireEvent.click(botao)
    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: ' Ana'
      }
    })
    // clicar no botao de submeter
    fireEvent.click(botao)
    let mensagemErro = screen.queryByRole('alert')
    expect(mensagemErro).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    });


    mensagemErro = screen.queryByRole('alert')
    expect(mensagemErro).toBeNull()
  })

})
