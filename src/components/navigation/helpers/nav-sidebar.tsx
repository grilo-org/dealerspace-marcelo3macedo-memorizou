import Item from "./item";
import { ItemSidebarProps } from "./props/item";

export default function NavSidebar({ items }: { items: ItemSidebarProps[] }) {
  if (!items) return <></>;

  return (
    <nav className="-mx-3 space-y-3 ">
      {items.map((i) => (
        <Item key={i.label} Icon={i.Icon} label={i.label} link={i.link} />
      ))}
    </nav>
  );
}
