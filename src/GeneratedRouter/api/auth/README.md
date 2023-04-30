# Auth

API for managing objects

## Operations

### postAuthToken

```http
POST /auth/token
```


## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function postAuthToken(request: Api.AuthCredentials): Promise<t.PostAuthTokenResponse> {
	throw 'Unimplemented'
}


const api: t.AuthApi = {
	postAuthToken,
}

export default api
```
