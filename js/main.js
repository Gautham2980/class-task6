class Book{
    constructor(title,author,year){

        this.title=title;
        this.author=author;
        this.year=year
    }


    bookDetails(){
        document.write("Title :"+this.title+"<br>");
        document.write("Author :"+this.author+"<br>");
        document.write("Published Year :"+this.year+"<br>")
    }
}

let book=new Book("The old Man and the Sea","Ernest Hemmingway",1952);

class Books extends Book{
    constructor(title,author,year,price){
        super(title,author,year)
            this.price=price
        

    }


    books(){
        document.write(`Book price : Rs ${this.price}`)
    }
}

let find=new Books("The old Man and the Sea","Ernest Hemmingway",1952,350);
find.bookDetails();
find.books()