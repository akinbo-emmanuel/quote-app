import { FC, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { fetchQuotes } from "./api/api";

interface Quotes {
  _id: number;
  author: string;
  content: string;
}



const App : FC = () => {
  const [quotes, setQuotes] = useState<Quotes[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuotes(page);

      if (page === 1) {
        setQuotes(data);
      } else {
        setQuotes(prevQuotes => [...prevQuotes, ...data]);
      }
      setLoading(false);
    }

    fetchData();
  }, [page]);
  

  return (
    <main>
      <Navbar />
    </main>
  )
}

export default App