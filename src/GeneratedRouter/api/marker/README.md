# Marker

API for managing objects

## Operations

### getMarker

```http
GET /marker
```


### postMarker

```http
POST /marker
```


## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function getMarker(__user: any): Promise<t.GetMarkerResponse> {
	throw 'Unimplemented'
}

async function postMarker(request: Api.Marker, __user: any): Promise<t.PostMarkerResponse> {
	throw 'Unimplemented'
}


const api: t.MarkerApi = {
	getMarker,
	postMarker,
}

export default api
```
