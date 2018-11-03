This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tutorial followed

YouTube video: [Redux Crash Course With React](https://www.youtube.com/watch?v=93p3LxR9xfM)

## Debugging notes

Had a strange error similar to:

```
Installing packages. This might take a couple of minutes.
internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module
```

Solved by following [this](https://github.com/facebook/create-react-app/issues/4951).

In short:
1. updating yarn
2. running `yarn cache clean`


## Acknowledgments

Thanks to [@bradtraversy](https://github.com/bradtraversy)