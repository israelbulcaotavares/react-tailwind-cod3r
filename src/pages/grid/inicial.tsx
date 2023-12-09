import Caixa from "@/components/Caixa";

export default function Inicial() {
    return(
        <div className="
        p7 grid gap-2.5
         lg:grid-cols-6">
            <Caixa className="row-span-2">#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
            <Caixa>#4</Caixa>
            <Caixa className="col-span-2">#5</Caixa>
            {/* <Caixa>#6</Caixa> */}
            <Caixa className="col-span-3">#7</Caixa>
            {/* <Caixa>#8</Caixa> */}
            <Caixa>#9</Caixa>
            <Caixa>#10</Caixa>
            <Caixa>#11</Caixa>
            <Caixa>#12</Caixa>
        </div>
    )
}