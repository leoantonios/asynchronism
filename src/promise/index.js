const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Works!');
        }else{
            reject('Oh no!');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err))
