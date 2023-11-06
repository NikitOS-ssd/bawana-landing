import Block from "../../Block/Block";
import Button from "../../Button/Button";
import styles from "./Bonus.module.css";

export default function BonusAndPromotions() {
  return (
    <Block
      title={'Bwanabet Bonus & Promotions'}
    >
      <p className="mb-6 text-gray-800">
        1xBet in Inida is famous among players around the world and in India for the huge number of bonus offers and the company is actively adding new ones. The bonuses will make your casino and betting experience here even better as you can win even more!

        Below we will tell you about the most popular 1xbet bonus offers among users.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* <h2 className="text-xl font-semibold mb-8 text-gray-800">Welcome Bonus Up</h2> */}
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-gray-800">
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Welcome Bonus Up</h3>
            <p className={`${styles.card_content}`}>
              The welcome bonus is a bonus that every new player from India who does not yet have a 1xbet account and has not made the first deposit can get.
              <br />
              <br />
              1xBet offers two types of welcome bonuses – for sports betting and for casino fans.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Poker Bonus</h3>
            <p className={`${styles.card_content}`}>
              In the Live Casino section at 1xBet, you can find video poker in a LIVE format and make bets and win at it. For poker fans, 1xbet also releases regular bonuses and cashback offers that you can use.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Sports Bonus</h3>
            <p className={`${styles.card_content}`}>
              As part of the welcome bonus, users can get 100% up to Rs 20,000 on their first deposit. This bonus is available to new players and you can use it as extra money in your bets on any sports and esports discipline in LINE and LIVE.
              <br />
              <br />
              You can even withdraw the bonus, but to do so you need to increase its size by 5 times by betting Accumulator odds of 1.40 and above.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Free Spins</h3>
            <p className={`${styles.card_content}`}>
              As part of both the 1xbet Casino Welcome Bonus and other offers, users from India can get free spins to play the best slots. This way, you make free spins at the casino, win real money, and can withdraw it from 1xbet.            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Casino Bonus</h3>
            <p className={`${styles.card_content}`}>
              This is a welcome bonus offer from 1xbet, designed for casino entertainment. You can get up to 1,500€ + 150 Free Spins on the best casino slots after your first deposit at 1xBet. To get it, you have to agree to receive the bonus in the “Account Settings” tab.            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Casino Bonus</h3>
            <p className={`${styles.card_content}`}>
              At 1xbet users get Cashback from their bets in the amount of 0.18%. This bonus is credited to users every Tuesday. The maximum amount of cashback is 5,000 rupees. Cashback goes to your account on all bets at odds of 1.80 and above!
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button size={"big"}>
            CLAIM BONUS
          </Button>
        </div>
      </div>
    </Block>
  )
}