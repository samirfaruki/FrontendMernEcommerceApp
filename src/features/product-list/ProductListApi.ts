/* eslint-disable prettier/prettier */
// A mock function to mimic making an async request for data
export async function fetchAllPrroducts() {
  // tod: we will not hard code
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()
    resolve({ data })
  })
}

export async function fetchAllFilterPrroducts(filter) {
  let queryString = ""
  for (const key in filter) {
    queryString += `${key}=${filter[key]}&`
  }
  // tod: we will not hard code
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:4000/products?" + queryString,
    )
    const data = await response.json()
    resolve({ data })
  })
}

export async function fetchProductDetails(id: any) {
 
  // tod: we will not hard code
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:4000/products/" + id,
    )
    const data = await response.json()
    resolve({ data })
  })
}

