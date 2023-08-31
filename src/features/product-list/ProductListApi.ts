// A mock function to mimic making an async request for data
export async function fetchAllPrroducts() {

  // tod: we will not hard code
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()
    resolve({ data })
  })
}
