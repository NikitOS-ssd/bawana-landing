import Block from "../../Block/Block";
import Button from "../../Button/Button.client";
import styles from "./TypesOfSportsBetting.module.css";

export default function TypesOfSportsBetting() {
  return (
    <Block
      title={'Bwanabet Website Types of Sports Betting'}
    >
      <p className="mb-6 text-gray-800">
        At Bwanabet you can bet on all official sports tournaments and matches.
        In this case, an important advantage is the constant bonuses from Bwanabet, as well as the ability to watch LIVE broadcasts for free.
        The fact that you can make bets of several types is also pleasing. We will briefly tell you about the most popular sports disciplines among Indian users, on which you can bet on Bwanabet
      </p>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* <h2 className="text-xl font-semibold mb-8 text-gray-800">Welcome Bonus Up</h2> */}
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-gray-800">
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Cricket</h3>
            <p className={`${styles.card_content}`}>
              Cricket is an international bat-and-ball sport, most popular in India. In cricket, two teams fight each other.
              The main roles are the batsman, the bouncer, and the bowler, the pitcher.
              The batsman’s job is to bounce the ball so that he can run to the other end of the pitch, thus earning a point for his team.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Volleyball</h3>
            <p className={`${styles.card_content}`}>
              In the middle of the volleyball court stretched a net. Teams are placed on both sides of the field and their task is to throw the ball to the opponent’s side in such a way that the opponent cannot deflect it. Bwanabet will offer you many options for betting on this discipline in LINE and LIVE.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Football</h3>
            <p className={`${styles.card_content}`}>
              Popular worldwide team game with a ball and goal. Teams of 11 players must score the most goals against their opponents to win. At Bwanabet all soccer tournaments are available for your betting. You will be able to watch LIVE Broadcasts in good quality.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Tennis</h3>
            <p className={`${styles.card_content}`}>
              In tennis, most often two players fight against each other on a field called a tennis court. There is also a net stretched across the middle of the court and the players must use their rackets to throw the ball to their opponent’s side so that the opponent cannot hit it back.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Ice Hockey</h3>
            <p className={`${styles.card_content}`}>
              Hockey is a game on the ice, where teams skate with sticks in their hands and the main task is to score a puck in the opponent’s goal. Hockey matches on Bwanabet are filled with interesting odds and you are sure to find interesting opportunities for your bets.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Table Tennis</h3>
            <p className={`${styles.card_content}`}>
              Table Tennis in its mechanics is similar to the standard, but here all the action takes place not on the court, but on the table, where in the middle is also stretched a net. Two players fight with each other and the task is also to throw the ball so that the opponent could not kick it.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Basketball</h3>
            <p className={`${styles.card_content}`}>
              Basketball is a popular team game where the main task is to send the largest number of balls into the opponent’s hoop. This sport is very dynamic and every second counts, so it is interesting to watch.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button size={"big"}>
            BET NOW
          </Button>
        </div>
      </div>
    </Block>
  )
}