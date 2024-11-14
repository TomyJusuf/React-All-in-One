import { tours } from '../data'
import Toure from './Toure'

function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {/* single tour */}
        {tours.map((tour) => {
          return <Toure key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}
export default Tours
