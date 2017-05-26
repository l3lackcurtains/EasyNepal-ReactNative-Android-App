import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import A from '../actions'
import {
	recListing,
	recListingErr,
	recSearchListing,
	recSearchListingErr,
	recSingleListing,
	recSingleListingErr
} from '../actions/listingAc'

const getData = link => axios.get(link).then(response => response.data)

// sagas for listing in map
export function* fetchListing(action) {
	try {
		const url = `https://easynepal.com/wp-json/wp/v2/job_listing?fields=id,title.rendered,geolocation_formatted_address,featured_media,geolocation_state_long&search=${action.query}`
		const data = yield call(getData, url)
		const media = yield data.map(media => call(getData, `https://easynepal.com/wp-json/wp/v2/media/${media.featured_media}?fields=source_url`))
		media.map((img, i) => data[i].image = img.source_url)
		yield put(recSearchListing(data))
		yield put(recListing(data))
	} catch (error) {
		yield put(recListingErr(error.toString()))
	}
}

function* fetchListingSaga() {
	yield takeEvery(A.REQ_LISTING, fetchListing)
}

// sagas for listing results
export function* fetchSearchListing(action) {
	try {
		const url = `https://easynepal.com/wp-json/wp/v2/job_listing?fields=id,title.rendered,geolocation_formatted_address,featured_media,geolocation_state_long&search=${action.query}`
		const data = yield call(getData, url)
		const media = yield data.map(media => call(getData, `https://easynepal.com/wp-json/wp/v2/media/${media.featured_media}?fields=source_url`))
		media.map((img, i) => data[i].image = img.source_url)
		yield put(recSearchListing(data))
	} catch (error) {
		yield put(recSearchListingErr(error.toString()))
	}
}

function* fetchSearchListingSaga() {
	yield takeEvery(A.REQ_SEARCH_LISTING, fetchSearchListing)
}

// sagas for single Listing
export function* fetchSingleListing(action) {
	try {
		const url = `https://easynepal.com/wp-json/wp/v2/job_listing/${action.id}?fields=id,title.rendered,geolocation_formatted_address,geolocation_state_long,email,website,phone,content.rendered,rest_api_enabler.geolocation_lat,rest_api_enabler.geolocation_long`
		const data = yield call(getData, url)
		yield put(recSingleListing(data))
	} catch (error) {
		yield put(recSingleListingErr(error.toString()))
	}
}

function* fetchSingleListingSaga() {
	yield takeEvery(A.REQ_SINGLE_LISTING, fetchSingleListing)
}

export default function* rootSagas() {
	yield [fetchListingSaga(), fetchSearchListingSaga(), fetchSingleListingSaga()]
}
