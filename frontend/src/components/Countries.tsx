import { useGetCountriesQuery } from "@/graphql/generated/schema"
import { Country } from "../types"
import CountryCard from "./CountryCard"

export default function Countries() {

    const { data } = useGetCountriesQuery()
    const countries: Country[] = data?.countries || []

    return (
        <section className="w-100 flex items-center justify-center gap-4 flex-wrap">
            {
                countries.map((country: Country) => (
                    <CountryCard key={country?.id} id={country?.id} name={country?.name} code={country?.code} emoji={country?.emoji} />
                ))
            }
        </section>
    )
}