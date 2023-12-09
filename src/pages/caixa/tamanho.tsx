import Caixa from "@/components/Caixa";

export default function Tamanho() {
    return (
        <div className="flex flex-row gap-5">
            <Caixa className="w-16 h-16">#1</Caixa>
            <Caixa className="w-4/5">#2</Caixa>
            <Caixa className="w-1/2">#3</Caixa>
            <Caixa className="w-[75%]">#4</Caixa>
            <Caixa className="min-w-[200px]">#5</Caixa>
            <Caixa className="h-full">#6</Caixa>{/* Altura completa */}
           {/*  <Caixa className="h-screen">#7</Caixa> altura da tela */}
            <Caixa className="w-[75%]">#8</Caixa>
            <Caixa className="w-[75%]">#9</Caixa>
            <Caixa className="w-[75%]">#10</Caixa>
        </div>
    )
}