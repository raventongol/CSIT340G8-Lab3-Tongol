const App = () => {
  const course = 'Data Analytics 1'

  const part1 = 'Apps Development & Emerging Tech'
  const units1 = 3

  const part2 = 'RIZAL031 - The Life and Works of Rizal'
  const units2 = 3

  const part3 = 'Technopreneurship'
  const units3 = 3

  const total = units1 + units2 + units3

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {units1}
      </p>
      <p>
        {part2} {units2}
      </p>
      <p>
        {part3} {units3}
      </p>
      <p>
        <strong>Total units {total}</strong>
      </p>
    </div>
  )
}

export default App