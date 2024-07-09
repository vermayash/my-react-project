import { useContext } from "react";
import BooksContext from "./contexts/books";

const Child1 = () => {
    const booksValue = useContext(BooksContext);

    return (
        <div>
            <h3>Context Child 1</h3>
            <p>Books count:  {booksValue}</p>
        </div>
    );
};

export default Child1;