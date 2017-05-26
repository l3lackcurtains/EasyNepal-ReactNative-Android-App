import A from './index'

// Listing for browsing map
export const fetchListing = (page) => ({
	type: A.REQ_LISTING,
	page
})

export const recListing = data => ({
	type: A.REC_LISTING,
	data
})

export const recListingErr = data => ({
	type: A.REC_LISTING_ERR,
	data
})

// listing for search result
export const fetchSearchListing = (page, query) => ({
	type: A.REQ_SEARCH_LISTING,
	page,
	query
})

export const recSearchListing = data => ({
	type: A.REC_SEARCH_LISTING,
	data
})

export const recSearchListingErr = data => ({
	type: A.REC_SEARCH_LISTING_ERR,
	data
})

export const clearSearchListing = () => ({
	type: A.REC_SEARCH_LISTING_CLEAR
})

// single listing
export const fetchSingleListing = id => ({
	type: A.REQ_SINGLE_LISTING,
	id
})

export const recSingleListing = data => ({
	type: A.REC_SINGLE_LISTING,
	data
})

export const recSingleListingErr = data => ({
	type: A.REC_SINGLE_LISTING_ERR,
	data
})

export const clearSingleListing = () => ({
	type: A.REC_SINGLE_LISTING_CLEAR
})

