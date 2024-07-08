import Header from "@/components/Header";
import FormCountry from "@/components/FormCountry";
import Countries from "@/components/Countries";

export default function Home() {

  return (
    <>
      <Header />
      <div className="w-full flex justify-center p-10">
        <FormCountry />
      </div>
      <Countries/>
    </>
  )
}
