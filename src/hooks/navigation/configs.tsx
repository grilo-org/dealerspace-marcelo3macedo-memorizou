import {
  LinkIcon,
  NewspaperIcon,
  PhoneArrowUpRightIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { ConfigSidebarProps } from "@/components/navigation/helpers/props/config";

const useConfigsNavigation = () => {
  const items = [
    {
      Icon: UserIcon,
      label: "user.title",
      description: "user.description",
      link: "/institutional/user",
    },
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
