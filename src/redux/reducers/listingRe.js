import A from '../actions'

const initState = {
	isLoading: false,
	isReceived: false,
	data: {},
	error: false
}

// Listing Reducers
export const listingRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_LISTING:
		return {
			...state,
			isLoading: true
		}
	case A.REC_LISTING:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_LISTING_ERR:
		return {
			...state,
			error: true
		}
	default:
		return state
	}
}

// Search Result Listing
export const searchListingRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_SEARCH_LISTING:
		return {
			...state,
			isLoading: true
		}
	case A.REC_SEARCH_LISTING:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_SEARCH_LISTING_ERR:
		return {
			...state,
			error: true
		}
	case A.REC_SEARCH_LISTING_CLEAR:
		return {
			isLoading: false,
			isReceived: false,
			data: {},
			error: false
		}
	default:
		return state
	}
}

// Single listing reducers
export const singleListingRe = (state = initState, action) => {
	switch (action.type) {
	case A.REQ_SINGLE_LISTING:
		return {
			...state,
			isLoading: true
		}
	case A.REC_SINGLE_LISTING:
		return {
			...state,
			isReceived: true,
			isLoading: false,
			data: action.data
		}
	case A.REC_SINGLE_LISTING_ERR:
		return {
			...state,
			error: true
		}
	case A.REC_SINGLE_LISTING_CLEAR:
		return {
			isLoading: false,
			isReceived: false,
			data: {},
			error: false
		}
	default:
		return state
	}
}

