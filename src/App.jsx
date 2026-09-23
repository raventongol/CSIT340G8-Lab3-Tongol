import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

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
      <Header course={course} />
      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />
      <Total total={total} />
    </div>
  )
}

export default App