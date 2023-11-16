import Bingo from "../components/HomePageComponents/Bingo/Bingo";
import AboutInfoTable from "../components/HomePageComponents/About/About";
import Advantages from "../components/HomePageComponents/Advantages/Advantages";
import AppAndSoft from "../components/HomePageComponents/AppAndSoft/AppAndSoft.client";
import BonusAndPromotions from "../components/HomePageComponents/Bonus/Bonus";
import ReviewEsports from "../components/HomePageComponents/ReviewEsports/ReviewEsports";
import TypesOfSportsBetting from "../components/HomePageComponents/TypesOfSportsBetting/TypesOfSportsBetting";
import Toto from "../components/HomePageComponents/Toto/Toto";
import LiveBetting from "../components/HomePageComponents/LiveBetting/LiveBetting";
import Casino from "../components/HomePageComponents/Casino/Casino";
import RegistrationLottery from "../components/HomePageComponents/RegistrationLottery/RegistrationLottery";
import Support from "../components/HomePageComponents/Support/Support";

export default function HomePage() {
  return (
    <>
      <AboutInfoTable />
      <BonusAndPromotions />
      <AppAndSoft />
      <Advantages />
      <TypesOfSportsBetting />
      <ReviewEsports />
      <Bingo />
      <Toto />
      <LiveBetting />
      <Casino />
      <RegistrationLottery />


      <Support />
    </>
  );
}
