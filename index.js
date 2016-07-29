const HEAP_API = 'https://heapanalytics.com/api'
const TRACK_URL = `${HEAP_API}/track`
const ADD_USER_PROPERTIES = `${HEAP_API}/add_user_properties`

export default class HeapClient {
    constructor(id) {
        this.appId = id
    }

    setIdentity(identity) {
        this.identity = identity
        return this
    }

    postJSON(url, json) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
        }).then((response) => response.text()).then((text) => {
            if (text !== 'OK') {
                return new Error(text)
            }
            return text
        })
    }

    track(identity, event, properties) {
        return this.postJSON(TRACK_URL, {
            app_id: this.appId,
            identity,
            event,
            properties,
        })
    }

    trackEvent(event, properties) {
        return this.track(this.identity, event, properties)
    }

    addUserProperties(identity, properties) {
        return this.postJSON(ADD_USER_PROPERTIES, {
            app_id: this.appId,
            identity,
            properties,
        })
    }
}
