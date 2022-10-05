import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import { Entrada } from "./Entrada";

interface FormularioProps {
  cliente: Cliente
  cancelCliente?: () => void
  clientChange?: (cliente: Cliente) => void 
}

export function Formulario({cliente, cancelCliente, clientChange}: FormularioProps) {
  const id = cliente?.id
  const [nome, setNome] = useState(cliente?.name ?? '')
  const [idade, setIdade] = useState(cliente?.age ?? 0)
  return (
    <div>
      {id ? (
        <Entrada text='Código:' tipo="text" value={id} somenteLeitura className='mb-2' />
      ) : false}
      <Entrada text='Nome:' tipo="text" value={nome} valueOnChange={setNome} className='mb-2' />
      <Entrada text='Idade:' tipo="number" value={idade} valueOnChange={setIdade}/>
      <div className="mt-4 flex justify-end">
        <Botao className="mr-2" 
        onClick={() => clientChange?.(new Cliente (nome, idade, id))} color="blue">
          {id ? 'Alterar' : 'Salvar'}
          </Botao>
        <Botao onClick={cancelCliente}>Cancelar</Botao>
      </div>
    </div>
  )
}