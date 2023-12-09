import React from "react";

interface MenuItemProps {
  icone: any;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div className="flex  items-center gap-2  py-2 px-3 rounded-md text-zinc-400 hover:bg-black">
      <span>{React.cloneElement(props.icone, {
            stroke:1 /* afinar os icones */
      })}</span>
      <span className="text-sm">{props.texto}</span>
    </div>
  );
}
