import { useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import useTableOrForm from './useTableOrForm'

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente()
  const { formVisible, showForm, showTable, tableVisible } = useTableOrForm()
  const [client, setClient] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      showTable()
    })
  }

  function clientEdit(cliente: Cliente) {
    setClient(cliente)
    showForm()
  }

  async function clientDelete(client: Cliente) {
    await repo.excluir(client)
    obterTodos()
  }

  function newClient() {
    setClient(Cliente.vazio())
    showForm()
  }

  async function saveClient(client: Cliente) {
    await repo.salvar(client)
    obterTodos()
  }

  return {
    clientes,
    client,
    saveClient,
    newClient,
    clientDelete,
    clientEdit,
    obterTodos,
    tableVisible,
    showTable,
  }
}
