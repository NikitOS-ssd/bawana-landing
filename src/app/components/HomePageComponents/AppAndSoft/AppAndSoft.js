import Block from "../../Block/Block";
import Button from "../../Button/Button";

export default function AppAndSoft() {
  return (
    <Block title={`in Bwanabet com Applications and Software`}>
      <p className="mb-6 text-gray-800">
        There are two applications for the PC:
        <ul className="list-disc list-inside text-sm mt-5 px-10">
          <li>Bwanabet Access. Through the app, you cannot do sports betting. But it gives working mirrors for the site.</li>
          <li>Bwanabet. The program provides an opportunity to bet on sporting events without opening the website in the browser.</li>
        </ul>
      </p>
      <p className="mb-6 text-gray-800">
        The advantages of 1xWin are the following:
        <ul className="list-disc list-inside text-sm mt-3 px-10">
          <li>The program is regularly updated</li>
          <li>The interface is the same as on the official site</li>
          <li>There is the ability to bet live and pre-match</li>
          <li>All types of bets, including singles and express</li>
          <li>Online broadcasts</li>
          <li>Personal cabinet with an account, loyalty program, and special offers</li>
          <li>Standard deposit and withdrawal</li>
          <li>Use of bonuses and promo codes, promotional games, etc</li>
          <li>Traffic saving</li>
        </ul>
      </p>

      <p className="mb-6 text-gray-800">
        Windows system requirements: Windows XP or Vista, Windows 7, 8, 10 (for 1xWin), Windows 7, 8, 10 (for 1xbet Access). (Older computer versions are not supported).
        <br />
        <br />
        No download app for macOS.
      </p>

      <div className="text-center">
        <Button size={"big"}>
          DOWNLOAD APP
        </Button>
      </div>
    </Block>
  )
}