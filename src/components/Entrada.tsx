interface EntradaProps {
  tipo: 'text' | 'number',
  text: string,
  value: any,
  className?: string,
  somenteLeitura?: boolean,
  valueOnChange?: (value: any) => void,  
}

export function Entrada({tipo, text, value, somenteLeitura, valueOnChange, className}: EntradaProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-4">{text}</label>
      <input type={tipo} 
      value={value} 
      readOnly={somenteLeitura} 
      onChange={e => valueOnChange?.(e.target.value)}
      className={`border border-purple-500 rounded-lg 
      focus:outline-none bg-gray-50 px-4 py-2 ${somenteLeitura ? '' : 'focus:bg-white'}`}/>
    </div>
  )
}