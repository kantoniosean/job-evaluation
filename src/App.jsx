import "./style.css"

export default function App() {
  return (
    <form className="evaluation-standards">
      <div className="factor">
        <input type="text" id="new-factor" className="input"></input>
        <span htmlFor="new-factor" className="newFactor">Add New Factor</span>
      </div>
    </form>
  )
}
