# heapanalytics-client
Zero-dependency client for HEAP-analytics based on Fetch API

### Usage

```sh
    $ npm install heapanalytics-client --save
```

```js
import HeapClient from 'heapanalytics-client'

const heap = new HeapClient('123')

heap.track('user@example.com', 'event', {
    property: 'test',
}).then(() => {
    // ...
})

```
