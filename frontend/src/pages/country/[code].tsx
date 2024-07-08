import { useRouter } from "next/router"
import { useGetCountryByCodeQuery } from "@/graphql/generated/schema"
import Layout from "@/components/Layout";

export default function CountryCode () {

    const router = useRouter()
    const {code} = router.query;

    const {data} = useGetCountryByCodeQuery({
        variables: {code : code?.toString()},
        skip: !router.isReady
    })

    const country = data?.country

    return (
        <Layout>
            <div className="flex flex-col gap-4">
                <div className="text-9xl mt-4">{country?.emoji}</div>
                <div>Name : {country?.name} ({country?.code})</div>
                {/* <div>{country?.continent}</div> */}
            </div>
        </Layout>
    )
}