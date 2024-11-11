import { promises } from "node:dns"
import { resolve } from "node:path"

export default async function About(){
    await new Promise((resolve) => {
        setTimeout(resolve , 5000);
    })

    return(
        <div>
        <h1 className="text-center text-white p-2 border-2 border-red-600 mt-11 rounded-3xl shadow-red-600 shadow-lg hover:bg-yellow-500 font-bold">About Page</h1>
        </div>
    )
}