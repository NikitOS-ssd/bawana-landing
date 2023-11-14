import Block from "../../Block/Block";
import Button from "../../Button/Button.client";

export default function AboutInfoTable() {
  // Массив с данными для таблицы
  const tableData = [
    { key: 'Name', value: 'Bwanabet' },
    { key: 'Founded', value: '2007' },
    { key: 'Website Address', value: 'https://Bwanabet.com/' },
    { key: 'Promo Code', value: '1X1WIN' },
    { key: 'Welcome Bonus', value: '+100% up to INR 13,000' },
    { key: 'Services', value: 'Sport Betting, Casino, eSports Betting, Poker, Live Casino, Lotteries' },
    { key: 'Payment Methods', value: 'Visa, Mastercard, Payment systems, Bank transfer, PayTM, UPI, Neteller, Skrill, Webmoney, QIWI, etc.' },
    { key: 'Mobile Apps', value: 'for Android and iOS' },
    { key: 'Legal in India', value: 'Yes' },
    { key: 'Accepts rupees', value: 'Yes' },
    { key: 'Customer Support', value: 'E-mail, Live Chat, Telephone' },
    { key: 'Minimum Deposit', value: 'INR 100' },
    { key: 'Minimum Withdrawal', value: 'INR 300' },
    { key: 'Withdrawal Time', value: 'From 3 Hours' }
  ];

  // Функция для рендеринга строки таблицы
  const renderTableRow = (data, index) => (
    <tr key={index} className="table-tr">
      <td className="p-2 text-gray-800">{data.key}</td>
      <td className="p-2 text-gray-800">{data.value}</td>
    </tr>
  );

  return (
    <>
      <Block
        title={'About Bwanabet India'}
      >
        <>
          <p className="mb-6 text-gray-800">
            Bwanabet is a reliable bookmaker with a proven reputation with headquarters located in Cyprus. The table below illustrates some additional information about the company:
          </p>
          <div className="overflow-x-auto rounded-xl">
            <table className="w-full rounded-xl border border-white" style={{ borderCollapse: 'separate' }}>
              <tbody>
                {tableData.map(renderTableRow)}
              </tbody>
            </table>
          </div>
          <p className="mt-4 mb-6 text-gray-800">
            What is the secret of success? It was influenced by: reliability, a guarantee of payments, high odds, low margin, a large selection of events, making it possible to bet on thousands of matches, a bonus program, and that’s not all. The site is user-friendly. In this article, we will look in detail at the company and its advantages.
          </p>
          <div className="flex justify-center">
            <Button size="big">
              JOIN BWANABET
            </Button>
          </div>
        </>
      </Block>
    </>
  );
}
