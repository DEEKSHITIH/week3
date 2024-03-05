let book ={
    title:"the javascript",
    author:"adithya saladi sir",
    pages:100,
    isread:true,

     read:function(){
        return(` the tittle of the book is ${this.title} and the author of the book is ${this.author} and the pages of the book is ${this.pages} and the book is read ${this.isread}`)
     }


};

console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isread);
console.log(book.read());

