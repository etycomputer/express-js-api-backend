# Markers

API for managing objects

## Operations

### getMarkers

```http
GET /markers/{markerId}
```


### patchMarkers

```http
PATCH /markers/{markerId}
```


### getMarkersReadings

```http
GET /markers/{markerId}/readings
```


### postMarkersReadings

```http
POST /markers/{markerId}/readings
```


### deleteMarkersReadings

```http
DELETE /markers/{markerId}/readings/{readingId}
```


## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function getMarkers(markerId: number, __user: any): Promise<t.GetMarkersResponse> {
	throw 'Unimplemented'
}

async function patchMarkers(markerId: number, request: Api.Marker, __user: any): Promise<t.PatchMarkersResponse> {
	throw 'Unimplemented'
}

async function getMarkersReadings(markerId: number, startTimestamp: Date | undefined, endTimestamp: Date | undefined, limit: number | undefined, __user: any): Promise<t.GetMarkersReadingsResponse> {
	throw 'Unimplemented'
}

async function postMarkersReadings(markerId: number, request: Api.Reading, __user: any): Promise<t.PostMarkersReadingsResponse> {
	throw 'Unimplemented'
}

async function deleteMarkersReadings(markerId: number, readingId: number, __user: any): Promise<t.DeleteMarkersReadingsResponse> {
	throw 'Unimplemented'
}


const api: t.MarkersApi = {
	getMarkers,
	patchMarkers,
	getMarkersReadings,
	postMarkersReadings,
	deleteMarkersReadings,
}

export default api
```
