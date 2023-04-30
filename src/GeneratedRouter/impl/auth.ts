import * as t from '../api/auth/types'
import { Api } from '../models'

async function postAuthToken(request: Api.AuthCredentials): Promise<t.PostAuthTokenResponse> {
	throw 'Unimplemented'
}


const api: t.AuthApi = {
	postAuthToken,
}

export default api
