import { useContext } from "react";
import BooksContext from "./contexts/books";

const Child2 = () => {
    const booksValue = useContext(BooksContext);

    return (
        <div>
            <h3>Context Child 2</h3>
            <p>Books count:  {booksValue}</p>
        </div>
    );
};

export default Child2;