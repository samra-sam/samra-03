import { promises } from "node:dns"
import { resolve } from "node:path"

export default async function About(){
    await new Promise((resolve) => {
        setTimeout(resolve , 5000);
    })

    return(
        <div>
        <h1 className="head">About Page</h1>
        </div>
    )
}