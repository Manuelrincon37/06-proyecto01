export const saveInStorage = (key, item) => {
  // Get elements already in local storage
  let items = JSON.parse(localStorage.getItem(key))

  // Chek if is an array
  if (Array.isArray(items)) {
    // Save new item in array
    items.push(item)
  } else {
    // Create new array with new movie
    items = [item]
  }

  // Save in local storage
  localStorage.setItem(key, JSON.stringify(items))
  console.log(items)
  // Retunr object
  return item
}
