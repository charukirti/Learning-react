function Lists() {
  //   const fruits = ['Apple', 'Banana', 'Watermelon', 'Orange', 'Grapes']

  const fruits = [
    { id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Orange', calories: 45 },
    { id: 3, name: 'Banana', calories: 105 },
    { id: 4, name: 'Coconut', calories: 159 },
    { id: 5, name: 'Pinaple', calories: 37 },
  ]

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabeticle
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)) // Reverse alphabeticle
//   fruits.sort((a, b) => a.calories - b.calories) // Sorted by calories(numeric)
//   fruits.sort((a, b) => b.calories - a.calories) // Sorted by calories(reverse-numeric)

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calories}</b>
    </li>
  ))

  return <ol>{listItems}</ol>
}

export default Lists
