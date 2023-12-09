interface TituloProps {
  principal: string;
  secundario: string;
  gradiente?: boolean;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex flex-col items-start">
      <h1
        className={`text-3xl font-black font-mono ${
          props.gradiente ? "bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"  : ""
        }`}
      >
        {props.principal}
      </h1>
      <span className="text-base font-light text-zinc-500">
        {props.secundario}
      </span>
    </div>
  );
}
