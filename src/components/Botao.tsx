interface BotaoProps {
  color?: 'green' | 'blue' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}


export default function Botao(props: BotaoProps) {
  const cor = props.color ?? 'gray'
  return (
    <button className={`bg-gradient-to-r font-bold from-${cor}-400 to-${cor}-700
     text-white px-4 py-2 rounded-md ${props.className}`} onClick={props.onClick}>
      {props.children}
      </button>
  )
}