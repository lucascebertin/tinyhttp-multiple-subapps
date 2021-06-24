# Sample of multiple subapps

There is two subapps:
get: /subapps/first
get: /subapps/second

This is how the app is being created
```typescript
const app = new App()
  .use(firstSubapp)
  .use(secondSubapp)
```

Trying to get the second one always returns "Not Found"


