export class Book {
 constructor (title,author,description,pages,currentPage,read)
 {
   this.title = title;
   this.author = author;
   this.description = description;
   this.pages = pages;
   this.currentPage = currentPage;
   this.read = read;
   
 }
 readBook(page)
 {
   if(page<1 || page>pages)
   {
     return 0;
   }
   else if(page>=1 && page< pages)
   {
     currentPage = page;
     return 1;
   }
   else if(page==pages)
   {
     currentPage = page;
     read = true;
     return 1;
   }

 }
}

const obj1 = new Book("In Search of Lost Time","Marcel Proust","Rating 4.5",15,1,false);
const obj2 = new Book("Ulysses ","James Joyce","Rating 3",20,5,false);
const obj3 = new Book("Moby Dick","Herman Melville","Rating 3.5",30,3,false);

export const books = [obj1,obj2,obj3];
