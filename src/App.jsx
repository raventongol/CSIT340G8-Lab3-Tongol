const App = () => {
  const course = 'Data Analytics 1'
  const part = 'Apps Development & Emerging Tech'
  const units = 3

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part} {units}
      </p>
    </div>
  )
}

export default App