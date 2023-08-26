import {NextResponse, NextRequest} from "next/server"
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import  {books}  from '../../db/schema';
import {db} from '../../db/index'
import {eq} from 'drizzle-orm'

// {/*GET*/}
// export async function GET (request: NextRequest) {
//     const url = request.nextUrl;
//     if(url.searchParams.has("name")){
//         const name = url.searchParams.get("name");
//         return new NextResponse(`Hello, from:` + name);
//     }
//     else{
//         return new NextResponse(`Please send your name in searchbar`)
//     }

// }



//     {/*const res = {
//         "name": "Faiza",
//         "address": "hjkjwhj"
//     }
//     return NextResponse.json (res);
// }*/}

// {/*POST*/}
// export async function POST (request: NextRequest){
//     const req = await request.json();
//     if(req.name){
//         return NextResponse.json({
//             To: "Faiza",
//             Message: "All is well",
//             RequestType: "POST"
//         })
//     }
//     else{
//         return new NextResponse(`Please include your name in the POST request`)
//     }
// }
// {/*PUT*/}
// export async function PUT (request: NextRequest){
//     const req= await request.json()
//     if(req.name){
//         return NextResponse.json({
//             To: "Faiza",
//             Message: "This is an updated greeting",
//             RequestType: "PUT"
//         })
//     }
// }
// {/*DELETE*/}
// export async function DELETE(request: NextRequest) {
//   const req = await request.json();
//   if(req.name){
//     return NextResponse.json({
//       To: "Faiza",
//       Message: "I have deleted the greetings",
//       RequestType: "DELETE"
//     });
//   }
//   else {
//     return new NextResponse('Please include your name in the DELETE request');
//   }
// }







{/*GET*/}
export async function GET (request: NextRequest) {
    const data = await db.select().from(books)
    //.where(eq(books.id, 4));
    return NextResponse.json(data)

}
{/*POST*/}
export async function POST(request: Request){
const req = await request.json();
const title =req.title;
const id = req.id;
const author = req.author;
const data = await db.insert(books).values({id, title, author});
return NextResponse.json(data)
}
{/*PUT*/}
export async function PUT(request: Request){
const req = await request.json();
const title =req.title;
const id = req.id;
const author = req.author;
const data = await db.update(books).set({id, title, author}).where(eq(books.id, 6));
return NextResponse.json(data)

}
{/*DELETE*/}

export async function DELETE(request: NextRequest) {
  const deletedUser = await db.delete(books)
.where(eq(books.id, 9));
}


