// import fetch from 'isomorphic-unfetch'
import filterProductList from '../../util/filterProduct'
import searchItemsByText from '../../util/searchItemsByText'
import * as Types from '../constants/actionTypes'

// Fetch Product fetchProduct
export const fetchProduct = (searchTerm, url, filters) => async dispatch => {
    try {

        const sendRequest = await fetch(url)
        const data = await sendRequest.json()
        window.products = data

        const searchedItems = searchItemsByText(searchTerm, data?.products)
        const filteredList = filterProductList(searchedItems, filters)

        dispatch({
            type: Types.FETCHED_PRODUCT,
            payload: { products: filteredList }
        })

    } catch (error) {
        console.log(error)
    }

}


// Fetch More Product 
export const fetchMoreProduct = (url, total) => async dispatch => {
    try {

        const sendRequest = await fetch(url)
        const data = await sendRequest.json()

        // const searchedItems = searchItemsByText(searchTerm,data)
        // const filteredList  = filterProductList(searchedItems,filters)

        dispatch({
            type: Types.FETCHED_MORE_PRODUCT,
            payload: { products: data?.products, total }
        })

    } catch (error) {
        console.log(error)
    }

}


// Fetch Product By Catagory

export const fetchByCatagory = async (url, filters) => {
    try {

        const sendRequest = await fetch(url)
        const data = await sendRequest.json()
        console.log('data', data);
        const filteredList = filterProductList(data?.products, filters)

        return filteredList

    } catch (error) {
        console.log(error)
    }
}