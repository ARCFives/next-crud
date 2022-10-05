import Cliente from "../core/Cliente";
import { IconDelete, IconEdit } from "./Icones";

interface TabelaProps {
  clientes: Cliente[]
  clienteSelect?: (cliente: Cliente) => void
  clienteDelete?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {
  const showAction = props.clienteSelect || props.clienteDelete
  
  function renderHeader() {
    return (
      <tr>
        <th className='text-left p-4'>Código</th>
        <th className='text-left p-4'>Nome</th>
        <th className='text-left p-4'>Idade</th>
        {showAction ? <th className='p-4'>Ações</th> : false}     
      </tr>
    )}

    function renderDados() {
      return props.clientes?.map((cliente, i) => {
        return (
          <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
            <td className="text-left p-4">{cliente.id}</td>
            <td className="text-left p-4">{cliente.name}</td>
            <td className="text-left p-4">{cliente.age}</td>
            {showAction ? renderActions(cliente) : false}
          </tr>
        )})}

    function renderActions(cliente: Cliente) {
      return (
        <td className="flex justify-center">
          {props.clienteSelect ? (
            <button onClick={() => props.clienteSelect?.(cliente)} 
            className="flex justify-center items-center rounded-full p-2 m-1 text-green-600 hover:bg-purple-50">{IconEdit}</button>
          ) : false}
          {props.clienteDelete ? (
            <button onClick={() => props.clienteDelete?.(cliente)}
            className="flex justify-center items-center rounded-full p-2 m-1 text-red-600 hover:bg-purple-50">{IconDelete}</button>
          ) : false}
        </td>
      )
    }


  return (
    <table className="overflow-hidden rounded-xl w-full">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-200">
      {renderHeader()}
      </thead>
      <tbody>
        {renderDados()}
      </tbody>
    </table>
  )
}