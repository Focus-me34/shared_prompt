export async function GET(request) {
  // * Handle GET request for /api/users
  // * Retrieves all users from the database or any data source.
  const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Bob"}
  ]

  // * send the users as a response
  return new Response(JSON.stringify(users))
}

// ! ALL OTHER FETCH FUNCTIONS HANDLED BY NEXT JS
// export async function GET(request) {}
// export async function HEAD(request) {}
// export async function POST(request) {}
// export async function PUT(request) {}
// export async function DELETE(request) {}
// export async function PATCH(request) {}
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request) {}
