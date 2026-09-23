const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.units1}
      </p>
      <p>
        {props.part2} {props.units2}
      </p>
      <p>
        {props.part3} {props.units3}
      </p>
    </div>
  )
}

export default Content