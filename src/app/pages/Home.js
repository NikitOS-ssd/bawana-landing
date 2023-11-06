import AboutInfoTable from "../components/HomePageComponents/About/About";
import Advantages from "../components/HomePageComponents/Advantages/Advantages";
import AppAndSoft from "../components/HomePageComponents/AppAndSoft/AppAndSoft";
import BonusAndPromotions from "../components/HomePageComponents/Bonus/Bonus";

export default function HomePage() {
  return (
    <>
      <AboutInfoTable />
      <BonusAndPromotions />
      <AppAndSoft />
      <Advantages />
    </>
  );
}
