function RenderList() {
const iplTeams = ['CSK', 'MI', 'RCB', 'GT', 'KKR', 'DC', 'LSG'];

const listItems = iplTeams.map(team => <li key={team}>{team}</li>)

return (
    <>
    <ul>
        {listItems}
    </ul>
    </>
)
}

export default RenderList