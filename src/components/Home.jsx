import { useGlobalContext } from './context'
import { FilterSection, SingleCard } from './index'

function Home() {
  const { countries } = useGlobalContext()

  return (
    <div className={`lg:max-w-[1180px] max-w-[80%] mx-auto`}>
      <FilterSection />

      <div className='flex flex-wrap gap-8 justify-center'>
        {countries.map((country) => {
          return <SingleCard key={country.id} {...country} />
        })}
      </div>
    </div>
  )
}

export default Home
