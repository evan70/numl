import Nude, {
  NuElement,
  NuBase,
  NuGrid,
  NuBlock,
  NuHeading,
  NuBtn,
  NuTab,
  NuCard,
  NuIcon,
  NuLayout,
  NuLine,
  NuPane,
  NuGridTable,
  NuBadge,
  NuInput,
  NuScroll,
  NuSwitch,
  NuFlex,
  NuBtnGroup,
  NuTablist,
  NuMenu,
  NuMenuItem,
  NuLink,
  NuTheme,
  NuVar,
  NuAttrs,
  NuDecorator,
  NuActiveElement,
  NuTriangle,
  NuTooltip,
  NuCell,
  NuColumnHeader,
  NuRowHeader,
  NuRow,
  NuRowGroup,
  NuTable,
  NuPopup,
  NuPopupMenu,
  NuGroup,
  NuCheckbox,
  NuLabel,
  NuNumInput,
  NuSpecial,
  NuStrong,
  NuSvg,
  NuImg,
  NuCode,
  NuClamp,
} from './index';

Nude.elements = {
  NuElement,
  NuGrid,
  NuBlock,
  NuHeading,
  NuActiveElement,
  NuBtn,
  NuTab,
  NuCard,
  NuIcon,
  NuLayout,
  NuLine,
  NuPane,
  NuGridTable,
  NuBadge,
  NuInput,
  NuScroll,
  NuSwitch,
  NuFlex,
  NuBtnGroup,
  NuTablist,
  NuMenu,
  NuMenuItem,
  NuLink,
  NuTriangle,
  NuTooltip,
  NuCell,
  NuColumnHeader,
  NuRowHeader,
  NuRow,
  NuRowGroup,
  NuTable,
  NuPopup,
  NuPopupMenu,
  NuGroup,
  NuCheckbox,
  NuLabel,
  NuNumInput,
  NuSpecial,
  NuStrong,
  NuSvg,
  NuImg,
  NuCode,
  NuClamp,
  // decorators
  NuDecorator,
  NuTheme,
  NuVar,
  NuAttrs,
};

Nude.init(
  ...Object.values(Nude.elements),
);

Nude.elements.NuBase = NuBase;

window.Nude = Nude;

export default Nude;
