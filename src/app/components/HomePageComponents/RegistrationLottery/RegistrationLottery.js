import Block from "../../Block/Block";
import Button from "../../Button/Button.client";

export default function RegistrationLottery() {
  return (
    <Block title={'Bwanabet Registration in Lottery'}>
      <p className="mb-6 text-gray-800">
        The lottery Bwanabet is presented in several sections of the official website of the company.
      </p>
      <div className="px-10 mb-6">
        <ul className="list-disc list-inside text-sm mt-3">
          <li><b>Bwanabet scratch lottery</b>. A lottery ticket consists of nine cells, some of which are empty, while others contain odds of one to nine. The rules of the game are the following: the player makes a bet and then chooses three cells. If the player opens a winning cell, the amount will increase by the odds indicated in it.</li>
          <li><b>Daily lottery Bwanabet.</b> Every day, players get the opportunity to buy tickets with six-digit numbers. There is no limit to the number of lottery tickets per person. The cost per ticket is $1.65. The participant then relies solely on luck. In the daily drawings, a random number generator selects the lucky numbers. If the ticket is among the winners, the player receives a cash prize.</li>
          <li><b>1xLotto is a separate section of Bwanabet.</b> Go to the main page, click on More in the header, find the Bwanabet sweepstakes subsection, and click on Lotto. Each game’s icon shows the draw and the date of the next drawing. </li>
          <li><b>Bwanabet TV lottery.</b>All draws in TVBet are held online. The player is offered to choose lucky numbers and bet on other options available for online betting (number of the first and last ball, odd/even, etc.).</li>
          <li><b>Instant lottery Bwanabet.</b> A player selects one of the tickets on the screen and erases three of the nine fields. The winnings are equal to the sum of the points in the open cells.</li>
          <li><b>Lottery “Lucky of the Day” from Bwanabet.</b>The principle of the game is as follows: a user receives a ticket and activates it by betting on sports. Every day, the bookmaker holds a drawing where 100 numbers of winners are determined at random.</li>
        </ul>
      </div>
    </Block>
  )
}