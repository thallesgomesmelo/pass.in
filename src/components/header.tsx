import unitIcon from '../assets/unit-icon.svg'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={unitIcon} alt="Icone Unite" />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-300">
          Eventos
        </a>
        <a href="" className="font-medium text-sm">
          Participante
        </a>
      </nav>
    </div>
  )
}
