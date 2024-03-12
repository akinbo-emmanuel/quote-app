import { FC, useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
import { fetchQuotes } from "./api/api";
import QuoteCard from "./components/QuoteCard";
import SkeletonContainer from "./components/SkeletonContainer";


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

  const loadMoreQuotes = () => {
    setPage(prevPage => prevPage + 1);
  };
  

  return (
    <main className=" w-full min-h-full ">
      {/* <Navbar /> */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Quotes</h1>

        {loading ? (
          <SkeletonContainer />
        ) : (
          <div className="grid grid-cols-5 gap-4">
            {quotes.map(quote => (
              <QuoteCard key={quote._id} author={quote.author} content={quote.content} />
            ))}
            <div className="">
              <button onClick={loadMoreQuotes} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Load More
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default App