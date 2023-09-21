#  NOTES
1. The useEffect hook callback must be a synchronous function. useEffect callback function cannot be an async function (error:- destroy is not a function). Shown below is the way to write async callback function inside useEffect.
```js

useEffect(()=> {
    const asyncfn = async() => {
      const response = await getRedirectResult(auth);
      if(response){
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
      console.log(response)
    };
    asyncfn();
  }, []);

```
   
2. Read files inside git bash using 'cat'.
```git
MS@DESKTOP-2E1HL0J MINGW64 ~/OneDrive/Desktop/JS CONCEPTS
$ cat button.styles.scss
.button-container {
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  justify-content: center;
  }
```

3. filter() and empty array 

```
const arr = [2, 4, 5, 6, 7, 8];
const filteredArr = arr.filter(item => item > 4);
console.log(filteredArr); // [5, 6, 7, 8]
console.log(Boolean([])); // false
```
