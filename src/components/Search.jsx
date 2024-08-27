import { useEffect, useRef, useState } from "react";
import styles from "./search.module.css";

export default function Search({ setFoodList }) {
  const [searchItem, setSearchItem] = useState("Pasta");
  const secretKey = "091a613635334d82832613f9cbc64f6c";
  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const debounceTimeoutRef = useRef(null);

  function debounce(func, delay) {
    return (...args) => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current); // Clear the previous timeout
      }
      debounceTimeoutRef.current = setTimeout(() => {
        func(...args); // Execute the function after the delay
      }, delay);
    };
  }

  async function fetchSearch() {
    const response = await fetch(
      `${url}?query=${searchItem}&apiKey=${secretKey}`
    );
    const data = await response.json();
    console.log("response : ", data.results);
    setFoodList(data.results);
  }

  const debouncedFetchSearch = debounce(fetchSearch, 500);

  useEffect(() => {
    // fetchSearch();
    if (searchItem) {
      debouncedFetchSearch(searchItem); // Use debounced version
    }

    // Cleanup function to clear timeout when component unmounts
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchItem]);

  return (
    <>
      <form className={styles.formContainer}>
        <input
          type="text"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          placeholder="Search food recipe."
        />
      </form>
    </>
  );
}
