import Block from "../../Block/Block";
import Button from "../../Button/Button.client";
import styles from "./ReviewEsports.module.css";

export default function ReviewEsports() {
  return (
    <Block
      title={'Bwanabet Review Esports'}
    >
      <p className="mb-6 text-gray-800">
        In Bwanabet eSports are very widely represented: not only popular games like Dota 2, FIFA, CS: GO, LoL but also less-known ones like Call of Duty, Rainbow 6: Siege, and others. In this case, betting is available on both top competition and the less important “Tier 2” tournaments. At 1xbet, bets are available for the outcomes of meetings and totals, individual totals, handicaps, and so on.      </p>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* <h2 className="text-xl font-semibold mb-8 text-gray-800">Welcome Bonus Up</h2> */}
        <div className="grid md:grid-cols-2 gap-4 mb-6 text-gray-800">
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>Dota 2</h3>
            <p className={`${styles.card_content}`}>
              This is a game in the MOBA genre, where players need to protect their “throne” and destroy the enemy’s “throne.” Each team has five people, each with a character and a role. In addition to the players in the “booths” at the tournaments, there is also a coach to help at the stage of selecting characters.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>League of Legends (LoL)</h3>
            <p className={`${styles.card_content}`}>
              League of Legends and Dota 2 are the descendant games from a Warcraft III modification map. League of Legends is more popular than Dota 2.
              Another game in the MOBA genre has the same meaning. Interesting fact: LoL and Dota 2 are the “descendants” of DoTA Allstars-modification maps for Warcraft III. Here, as there are two teams of 5 members each, players wager on the characters with abilities and roles in the game. LoL is more popular in the United States, Europe, and Asia.            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>CS:GO</h3>
            <p className={`${styles.card_content}`}>
              A well-known online shooter is a descendant of the famous Counter-Strike. Each team also has five players.
            </p>
          </div>
          <div className={`${styles.card}`}>
            <h3 className={`${styles.card_title} text-lg font-semibold mb-2`}>FIFA</h3>
            <p className={`${styles.card_content}`}>
              The most famous soccer simulator is from EA Sports. Tournaments are held every year. A lot of usual soccer teams make cyber units and sign up players for FIFA to develop their brand in the world.            </p>
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