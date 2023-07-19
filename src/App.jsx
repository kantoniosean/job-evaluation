import "./style.css"

export default function App() {
  return (
    <form className="evaluation-standards">
      <div className="factor">
        <label htmlFor="new-factor">Add New Factor</label>
        <input type="text" id="new-factor"></input>
      </div>
    </form>
  )
}
