import CreateYourAccount from "@/components/heros/createYourAccount";
import CreateYourFlashcardsHero from "@/components/heros/createYourFlashcards";
import SamplesHero from "@/components/heros/samples";
import MainTheme from "@/themes/main.theme";

export default function Home() {
  return (
    <MainTheme>
      <CreateYourFlashcardsHero />
      <SamplesHero />
      <CreateYourAccount />
    </MainTheme>
  );
}
