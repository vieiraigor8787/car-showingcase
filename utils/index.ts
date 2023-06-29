export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '7eb1a29c5amsh2d64701b534e615p1e024ejsn0e483d8a26f5',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
      headers: headers,
    }
  )

  const result = await response.json()

  return result
}
