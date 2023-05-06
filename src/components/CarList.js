import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store"

export default function CarList() {
    const dispatch = useDispatch()
    const cars = useSelector(({ cars: {data, searchTerm}})=>{
        return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    })

    const handleCarDelete =(car)=> {
        dispatch(removeCar(car))
    }

    const renderedCars = cars.map((car)=> {
        return (
            <div key={car.id} className="panel">
                <p>
                {car.name} - ${car.cost}
                </p> 
                <button className="button is-danger" onClick={()=>handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        )
    })

    
    return(
        <div>
        <div>{renderedCars}</div>
        <hr />
        </div>
    )
}