import Link from "next/link"
import { Country } from "@/types"

export default function CountryCard({ id, name, emoji, code }: Country) {
    return (
        <Link className="p-3 rounded flex flex-col items-center border border-1 border-slate-400 w-fit" key={id} href={`/country/${code}`} >
            <p>{name}</p>
            <div>{emoji}</div>
        </Link >
    )
} 