import { useGlobalContext } from './context'
import { FilterSection, SingleCard } from './index'

function Home() {
  const { countries, text, sort } = useGlobalContext()

  return (
    <div className={`lg:max-w-[1180px] xl:max-w-[1660px] max-w-[80%] mx-auto`}>
      <FilterSection />

      <div className='flex flex-wrap gap-8 justify-center'>
        {countries.map((country) => {
          if (
            country.region.toUpperCase() === sort.toUpperCase() ||
            sort === 'ByRegion'
          ) {
            if (country.name.toUpperCase().includes(text.toUpperCase()))
              return <SingleCard key={country.id} {...country} />
          }
        })}
      </div>
    </div>
  )
}

export default Home
