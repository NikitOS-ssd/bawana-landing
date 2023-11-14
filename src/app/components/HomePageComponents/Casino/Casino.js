import Block from "../../Block/Block";
import Button from "../../Button/Button.client";
import styles from "./Casino.module.css"

export default function Casino() {
  return (
    <Block title={'Bwanabet Casino'}>
      <p className="mb-6 text-gray-800">
        The entertainment platform Bwanabet Casino has thousands of games. By playing certain slots, customers receive cash prizes.
      </p>

      <div>
        <h3>Slots</h3>
        <p className="mb-6 text-gray-800">
          A traditionally extensive section of the casino with the games from 130 providers, including such famous companies like NetEnt, Playson, Red Tiger, Play’N Go, Betsoft, and less-known studios like RubyPlay, Rival, PlayStar, and others. Slots are easy to filter by category. There are popular slot machines with bonus play, and jackpots, offering random cash and prizes.
        </p>
      </div>

      <div>
        <h3>Table Games</h3>
        <p className="mb-6 text-gray-800">
          Hundreds of classic gambling games are also categorized for easy reference. The Roulette section includes American, French, and European Roulette in a variety of variations. Card games are divided into baccarat, blackjack, and poker, with dozens of variations in each category that differ in rules, design, and betting size.
        </p>
      </div>

      <div>
        <h3>Live Casino</h3>
        <p className="mb-6 text-gray-800">
          The Live Casino section of 1xBet features games with real croupiers. There is a collection of live dealer games from more than 50 studios, including industry leaders Ezugi, Pragmatic Play, and Evolution Gaming. The entertainment is sorted into popular, keno, blackjack, others, roulette, new, baccarat, jackpot, poker.
        </p>
      </div>
    </Block>
  )
}