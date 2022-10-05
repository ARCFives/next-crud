import { useState } from 'react'

export default function useTableOrForm() {
  const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')

  const showTable = () => setVisible('tabela')
  const showForm = () => setVisible('form')

  return {
    formVisible: visible === 'form',
    tableVisible: visible === 'tabela',
    showForm,
    showTable
  }
}
