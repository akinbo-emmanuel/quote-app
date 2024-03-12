import { FC, useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
import { fetchQuotes } from "./api/api";
import QuoteCard from "./components/QuoteCard";
import SkeletonContainer from "./components/SkeletonContainer";


// Define the structure of a quote
interface Quotes {
  _id: string;
  author: string;
  content: string;
  dateAdded: string;
}

// Main component of the application
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

  // useEffect for sorting and filtering data as selected by the user
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

  // Function to load more quotes
  const loadMoreQuotes = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  // Render the main UI
  return (
    <main className="w-screen min-h-screen mx-auto px-8 py-8">
      <nav className=" lg:flex justify-between">
        <h1 className="text-2xl font-semibold mb-4">Quotes</h1>
        
        <div className=" sm:flex justify-between">
          <div className="mb-4 flex ">
            <input
              type="text"
              placeholder="Filter by Author"
              value={authorFilter}
              onChange={e => setAuthorFilter(e.target.value)}
              className="rounded mr-4 px-2 py-1 border border-gray-300 outline-blue-500 "
            />
            <input
              type="date"
              value={dateFilter}
              onChange={e => setDateFilter(e.target.value)}
              className="rounded px-2 py-1 border border-gray-300 outline-blue-500 "
            />
          </div>

          <div className="mb-4">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'id' | 'author')}
              className="rounded px-2 py-1 border border-gray-300 outline-blue-500 "
            >
              <option value="id">Sort by ID</option>
              <option value="author">Sort by Author</option>
            </select>
          </div>
        </div>
      </nav>

      <section>
        {/* Check if data is still loading */}
        {loading ? (
          // If loading, display skeleton container
          <SkeletonContainer />
        ) : (
          // If not loading, display the fetched quotes
          <div>
            {/* Display quotes in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {/* Map through filteredQuotes and render a QuoteCard for each */}
              {filteredQuotes.map(quote => (
                <QuoteCard key={quote._id} author={quote.author} content={quote.content} />
              ))}
            </div>
            
            {/* Button to load more quotes */}
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
