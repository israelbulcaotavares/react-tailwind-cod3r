interface TituloProps {
    principal: string 
    secundario: string
}


export default function Titulo(props: TituloProps){
    return(
        <div className="flex flex-col">
            <span className="text-3xl font-black font-mono">{props.principal}</span>
            <span className="text-base font-light text-zinc-500">{props.secundario}</span>
        </div>
    )
}