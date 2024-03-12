import { FC, useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
import { fetchQuotes } from "./api/api";
import QuoteCard from "./components/QuoteCard";
import SkeletonContainer from "./components/SkeletonContainer";


interface Quotes {
  _id: string;
  author: string;
  content: string;
  dateAdded: string;
}



const App : FC = () => {
  // useState for quotes, page number and loading
  const [quotes, setQuotes] = useState<Quotes[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ loading, setLoading ] = useState<boolean>(true);

  // useState for filtered Quotes
  const [filteredQuotes, setFilteredQuotes] = useState<Quotes[]>([]);

  // useStates for filter and sort
  const [authorFilter, setAuthorFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('');
  const [sortBy, setSortBy] = useState<'id' | 'author'>('id');



  // useEffect for fetching data from quotes api and storing in the useState
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuotes(page);

      if (page === 1) {
        setQuotes(data);
        setFilteredQuotes(data);
      } else {
        setQuotes(prevQuotes => [...prevQuotes, ...data]);
        setFilteredQuotes(prevFilteredQuotes => [...prevFilteredQuotes, ...data]);
      }
      setLoading(false);
    }

    fetchData();
  }, [page]);



  // useEffect for sorting snf filtering data as selected by the user
  useEffect(() => {
    const filtered = quotes.filter(quote => {
      const matchesAuthor = !authorFilter || quote.author.toLowerCase().includes(authorFilter.toLowerCase());
      const matchesDate = !dateFilter || quote.dateAdded === dateFilter;
      return matchesAuthor && matchesDate;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'id') {
        return a._id.localeCompare(b._id);
      } else {
        return a.author.localeCompare(b.author);
      }
    });

    setFilteredQuotes(sorted);
  }, [quotes, authorFilter, dateFilter, sortBy]);




  // function to control the amount of quotes displayed to the user
  const loadMoreQuotes = () => {
    setPage(prevPage => prevPage + 1);
  };
  

  return (
    <main className=" w-full min-h-full container mx-auto px-4 py-8 ">
      <nav className="flex justify-between ">
        <h1 className="text-2xl font-semibold mb-4">Quotes</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Filter by Author"
            value={authorFilter}
            onChange={e => setAuthorFilter(e.target.value)}
            className="rounded mr-4 px-2 py-1 border border-gray-300"
          />
          <input
            type="date"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
            className="rounded px-2 py-1 border border-gray-300"
          />
        </div>

        <div className="mb-4">
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as 'id' | 'author')}
            className="rounded px-2 py-1 border border-gray-300"
          >
            <option value="id">Sort by ID</option>
            <option value="author">Sort by Author</option>
          </select>
        </div>
      </nav>

      <section>
        {loading ? (
          <SkeletonContainer />
        ) : (
          <div>
            <div className="grid grid-cols-5 gap-4">
              {filteredQuotes.map(quote => (
                <QuoteCard key={quote._id} author={quote.author} content={quote.content} />
              ))}
            </div>
            
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