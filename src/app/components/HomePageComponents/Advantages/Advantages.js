import Block from "../../Block/Block";
import Button from "../../Button/Button.client";

export default function Advantages() {
  return (
    <Block title={'Bwanabet Online Advantages for Indian Players'}>
      <p className="mb-6 text-gray-800">
        Bwanabet bookmaker has a lot of advantages which it has gained for more than 10 years of its existence and it is constantly
        updated with new features, giving players a pleasant betting experience. If we take a closer look at all of Bwanabet’s tools,
        we can conclude that it is great real money betting assistant for every Indian player and there are several reasons for that:
      </p>
      <div className="px-10 mb-6">
        <ul className="list-disc list-inside text-sm mt-3">
          <li>Thousands of matches, both regional and international, are available for betting daily;</li>
          <li>Several types of bets – Single, Accumulator, Lucky, Chain Bet, Anti-Accumulator;</li>
          <li>A large number of markets within each LINE and LIVE match;</li>
          <li>Bonuses both for new and active players;</li>
          <li>Licenses and legality in India, high reliability and good reputation;</li>
          <li>Thousands of casino entertainment from dozens of licensed and well-known providers;</li>
          <li>Convenient interface and navigation, the ability to use the interface in Hindi;</li>
          <li>Ability to use INR for deposits and withdrawals through a large number of payment systems.</li>
        </ul>
      </div>

      <p className="mb-6 text-gray-800">
        All these factors indicate that you will have a great time choosing Bwanabet as your betting and casino platform.
        Everything you need to play for real money will always be at your fingertips
      </p>
      <div className="text-center">
        <Button size={'big'} url={'https://bwanabet.com/en/auth/signup'}>
          JOIN BWANABET
        </Button>
      </div>
    </Block>
  )
}