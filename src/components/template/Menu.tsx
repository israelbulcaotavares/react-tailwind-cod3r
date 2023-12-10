import {
  Icon123,
  IconArrowAutofitContent,
  IconAspectRatio,
  IconBoxMargin,
  IconBoxModel2,
  IconBoxPadding,
  IconClick,
  IconComponents,
  IconContainer,
  IconDashboard,
  IconDatabase,
  IconDeviceMobile,
  IconDimensions,
  IconDots,
  IconGridDots,
  IconLayoutDashboard,
  IconLayoutGrid,
  IconNumber,
  IconNumbers,
  IconResize,
  IconTextPlus,
  IconTexture,
  IconTypography,
} from "@tabler/icons-react";
import MenuGrupo from "./MenuGrupo";
import MenuItem from "./MenuItem";

interface MenuProps {
  className?: string;
}

export default function Menu(props: MenuProps) {
  return (
    <div className={`p-7 ${props.className ?? ""}`}>

      <MenuGrupo texto="Conceitos" />
      <MenuItem icone={<IconTextPlus />} texto="Tudo é classes" url="/conceitos/classes" />
      <MenuItem icone={<IconClick />} texto="Pseudo Classes" url="/conceitos/pseudo" />
      <MenuItem icone={<IconDeviceMobile />} texto="Classes" url="/conceitos/mobile" />
      <MenuItem icone={<IconComponents />} texto="Classes" url="/conceitos/componentes" />

      <MenuGrupo texto="Box Model" />
      <MenuItem icone={<IconBoxPadding />} texto="Padding" url="/caixa/padding" />
      <MenuItem icone={<IconBoxMargin />} texto="Margin" url="/caixa/margin" />
      <MenuItem icone={<IconArrowAutofitContent />} texto="Espaços" url="/caixa/espacos" />
      <MenuItem icone={<IconResize />} texto="Tamanho" url="/caixa/tamanho" />
      <MenuItem icone={<IconBoxModel2 />} texto="Box Sizing" url="/caixa/boxsizing" />

      <MenuGrupo texto="Flex" />
      <MenuItem icone={<IconAspectRatio />} texto="Resumão flex" url="/flex/inicial" />
      <MenuItem icone={<IconDimensions />} texto="Redimensionamento" url="/flex/redimensionamento" />

      <MenuGrupo texto="Grid" />
      <MenuItem icone={<IconGridDots />} texto="Resumão Grid" url="/grid/inicial" />
      <MenuItem icone={<IconLayoutDashboard />} texto="Posicionamento" url="/grid/posicao" />
      <MenuItem icone={<IconLayoutGrid />} texto="Component Grid" url="/grid/layout" />

      <MenuGrupo texto="Extras" />
      <MenuItem icone={<IconContainer />} texto="Container" url="/" />
      <MenuItem icone={<IconTypography />} texto="Tipografia" url="/" />
      <MenuItem icone={<IconTexture />} texto="Background Gradiente" url="/" />
    </div>
  );
}
