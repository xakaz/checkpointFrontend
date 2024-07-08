import { useAddCountryMutation } from "@/graphql/generated/schema"
import { useRouter } from "next/router"
import { CreateCountry } from "@/types"
import { FormEvent } from "react"

export default function FormCountry() {

    const router = useRouter()
    const [newCountry] = useAddCountryMutation()

    const submitForm = async (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(e)

        const formData = new FormData(e.target as HTMLFormElement)
        const formJson: any = Object.fromEntries(formData.entries())

        await newCountry({variables : {data : formJson}})
        .then(res => {
            router.push(`/country/${res.data?.addCountry.code}`)
        })
        .catch(err => {
            console.error(err)   
        })
    }

    return (
        <form 
        onSubmit={submitForm}
        method="post" 
        className="flex flex-col md:flex-row justify-between bg-slate-200 p-2 gap-4 w-fit border border-1 border-slate-300">
            
            {/** Name */}
            <div className="flex flex-col items-start gap-2 m-2">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required/>
            </div>
            
            {/** Emoji */}
            <div className="flex flex-col items-start gap-2 m-2">
                <label htmlFor="emoji">Emoji</label>
                <input type="text" name="emoji" id="emoji" required/>
            </div>
            
            {/** Code */}
            <div className="flex flex-col items-start gap-2 m-2">
                <label htmlFor="code">Code</label>
                <input type="text" name="code" id="code" required/>
            </div>

            {/** Button */}
            <div className="flex justify-end items-center m-2 w-100">
                <button 
                type="submit" 
                className="bg-pink-600 rounded text-white p-2 w-max"
                >Add</button>
            </div>
        </form>
    )
}