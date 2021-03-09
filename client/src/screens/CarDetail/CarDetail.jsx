import React, { useState, useEffect } from 'react'
// import './CarDetail.css'
import Layout from '../../components/shared/Layout/Layout'
import { getCar } from '../../services/cars'
import { useParams } from 'react-router-dom'

const carDetail (props) {

    const [car, setCar] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchCar = async () => {
            const car = await getCar(id)
            setCar(product)
            setLoaded(true)
        }
        fetchCar()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <div className='car-details'>
                <div className='car-image-container'>
                    <img className='car-image-main' src={car.imgURL[0]} alt={car.year} {car.make} {car.model} />
                    <img className='car-image-thumbnail' src={car.imgURL} alt='Click image to enlarge' />
                </div>
                <div className='car-detail-container'>
                    <div className='car-detail-title'>
                        <div className='year'>{car.year}</div>
                        <div className='make'>{car.make}</div>
                        <div className='model'>{car.model}</div>
                    </div>
                    <div className='car-detail-description'>{car.description}</div>
                    <div className='car-detail-price'>{car.price}</div>
                    <div className='button-container'>
                        <div className='contact-button'>
                        <button onclick="alertPopup()">Contact</button>
                            <script>function alertPopup() {
                            alert(`Contact this seller at email: ${user.email} , or phone: ${user.phone}`);
                            }
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default carDetail