interface MenuGrupoProps{
    texto: string


}

export default function MenuGrupo(props: MenuGrupoProps){
    return (
        <div className="uppercase text-sm text-zinc-400 font-bold pt-6">
            {props.texto}
        </div>
    )
}