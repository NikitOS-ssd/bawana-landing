import Block from "../../Block/Block"
import Button from "../../Button/Button.client"

export default function Support() {
  // Массив с данными для таблицы
  const tableData = [
    { key: 'Phone Numbers', value: 'Bwanabet' },
    { key: 'Email	', value: '2007' },
    { key: 'Facebook', value: 'https://Bwanabet.com/' },
    { key: 'Twitter', value: '1X1WIN' },
    { key: 'Instagram	', value: '+100% up to INR 13,000' },
    { key: 'Live Chat', value: 'Sport Betting, Casino, eSports Betting, Poker, Live Casino, Lotteries' },
  ]

  // Функция для рендеринга строки таблицы
  const renderTableRow = (data, index) => (
    <tr key={index} className="table-tr">
      <td className="p-2 text-gray-800">{data.key}</td>
      <td className="p-2 text-gray-800">{data.value}</td>
    </tr>
  )

  return (
    <>
      <Block
        title={'Bwanabet Support'}
      >
        <>
          <p className="mb-6 text-gray-800">
            The fastest format of communication with moderators is live chat. Administrators answer user messages within 1-2 minutes. Complicated problems are better resolved by phone.

            For the manager to correctly understand the client’s problem, it is necessary to describe the issue and attach screenshots. No player’s problem will remain unanswered.
          </p>
          <div className="overflow-x-auto rounded-xl">
            <table className="w-full rounded-xl border" style={{ borderCollapse: 'separate', borderColor: 'rgba(255, 255, 255, 0.4)' }}>
              <tbody>
                {tableData.map(renderTableRow)}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-7">
            <Button size="big" url={'https://bwanabet.com/en/auth/signup'}>
              JOIN BWANABET
            </Button>
          </div>
        </>
      </Block>
    </>
  )
}
