// Example
// const before = '595656 0 159466 0 56'
// const after = '555669 0 145669 0 56'

const divideAndSort = (numbers) => {
  const splitNumbers = String(numbers).split("0")
  const result = []

  for (const splitNumber of splitNumbers) {
    const sortedNumber = splitNumber.split('').sort()
    result.push(sortedNumber.join(""))
  }

  return Number(result.join(""))
}

console.log(divideAndSort(5956560159466056));