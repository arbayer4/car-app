import api from './apiConfig'

export const getCars = async () => {
  try {
      const response = await api.get('/cars')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getCar = async id => {
  try {
      const response = await api.get(`/cars
      /${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createCar = async car => {
  try {
      const response = await api.post('/cars', car)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateCar = async (id, car) => {
  try {
      const response = await api.put(`/cars/${id}`, car)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteCar = async id => {
  try {
      const response = await api.delete(`/cars/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}