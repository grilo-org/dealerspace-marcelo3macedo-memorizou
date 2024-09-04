import image1 from "@/assets/images/themes/1.jpg";
import image2 from "@/assets/images/themes/2.jpg";
import image3 from "@/assets/images/themes/3.jpg";

const useHeroNavigation = () => {
  const items = [
    {
      id: 1,
      title: "Biologia",
      description: "Ciência que estuda a vida, em todos os seus aspectos",
      imageUrl: image1.src,
    },
    {
      id: 2,
      title: "História",
      description:
        "Estuda os acontecimentos do passado e a ação do homem no tempo e espaço",
      imageUrl: image2.src,
    },
    {
      id: 3,
      title: "Química",
      description:
        "Ciência que estuda a matéria, sua estrutura, formação e as transformações que ela sofre",
      imageUrl: image3.src,
    },
  ];

  return {
    items,
  };
};

export { useHeroNavigation };
