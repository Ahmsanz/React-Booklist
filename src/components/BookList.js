import React, {useContext} from 'react';
import {BookContext} from '../contexts/BooksContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length ? ( 
        <div className="book-list">
            { books.map( book => {
                return (
                    <BookDetails book={book} key={book.id}/>
                )
            })}
        </div>
     ) : (
         <div className="empty"> No books to read. Hello free time :) </div>
     )
}
 
export default BookList;