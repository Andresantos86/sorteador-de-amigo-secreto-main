import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

// Jest
test('quando o input esta vazio, novos participantes nao podem ser adionados',()=>{
  render(<Formulario/>)

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('insira os nomes dos participantes')
  //encontra o botao
  const botao = screen.getByRole('button')
  //garantir que o input esteja no documento
  expect(input).toBeInTheDocument()
  //garantir que o botao esteja desabilitado
  expect(botao).toBeDisabled()
})

test('adicionar um participante caso exista um nome preenchido', ()=>{
  render(<RecoilRoot>
      <Formulario/>
  </RecoilRoot>)

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('insira os nomes dos participantes')
  //encontra o botao
  const botao = screen.getByRole('button')
  // inserir um valor no input
  fireEvent.change(input,{
    target:{
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