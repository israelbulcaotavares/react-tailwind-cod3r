import Menu from "./Menu"

interface PaginaProps{
    children: any
}

export default function Pagina(props: PaginaProps){
    return(
        <div className="flex h-screen">
            <Menu className="bg-zinc-800 w-72" />
            <div className="p-7">
            <div>{props.children}</div>
        </div>
        </div>
    )
}