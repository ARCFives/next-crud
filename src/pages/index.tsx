import { useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import Botao from '../components/Botao'
import { Formulario } from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import useClientes from '../hooks/useClientes'

export default function Home() {
  const {
    client,
    clientes,
    clientDelete,
    clientEdit,
    newClient,
    saveClient,
    tableVisible,
    showTable
  } = useClientes()

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Cadastro Cliente">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Botao color="green" className="mb-4" onClick={newClient}>
                Cadastrar
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelect={clientEdit}
              clienteDelete={clientDelete}
            />
          </>
        ) : (
          <Formulario
            cliente={client}
            cancelCliente={showTable}
            clientChange={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}
