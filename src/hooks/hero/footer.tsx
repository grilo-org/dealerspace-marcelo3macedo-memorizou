const useFooterNavigation = () => {
  const items = {
    institutional: [
      {
        id: 1,
        name: "aboutUs",
        link: "/institutional/aboutUs",
      },
      {
        id: 2,
        name: "privacyPolicy",
        link: "/institutional/privacyPolicy",
      },
      {
        id: 3,
        name: "contactUs",
        link: "/institutional/contactUs",
      },
      {
        id: 4,
        name: "user",
        link: "/institutional/user",
      },
    ],
    helpfulLinks: [
      {
        id: 1,
        name: "notebooks",
        link: "/user/notebooks",
      },
      {
        id: 2,
        name: "list",
        link: "/notebooks/list",
      },
    ],
  };

  return {
    items,
  };
};

export { useFooterNavigation };
