import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiRestaurant } from '../pages/Categories'
import { ApiResponse } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<ApiRestaurant, string>({
      query: (restaurantId) => `/${restaurantId}` // Retorna um único restaurante
    }),
    getRestaurantes: builder.query<ApiResponse[], void>({
      query: () => '' // Retorna um array de restaurantes
    })
  })
})

export const { useGetRestauranteQuery, useGetRestaurantesQuery } = api

export default api
