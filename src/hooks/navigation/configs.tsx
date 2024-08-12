import {
  LinkIcon,
  NewspaperIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/solid";

import { ConfigSidebarProps } from "@/components/navigation/helpers/props/config";

const useConfigsNavigation = () => {
  const items = [
    {
      Icon: NewspaperIcon,
      label: "aboutUs.title",
      description: "aboutUs.description",
      link: "/institutional/aboutUs",
    },
    {
      Icon: PhoneArrowUpRightIcon,
      label: "contactUs.title",
      description: "contactUs.description",
      link: "/institutional/contactUs",
    },
    {
      Icon: LinkIcon,
      label: "privacyPolicy.title",
      description: "privacyPolicy.description",
      link: "/institutional/privacyPolicy",
    },
  ] as ConfigSidebarProps[];

  return {
    items,
  };
};

export { useConfigsNavigation };
