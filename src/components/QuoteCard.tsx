import { FC } from 'react';

interface Quote {
    author: string;
    content: string;
}



const QuoteCard: FC<Quote> = ({ author, content }) => {
  return (
    <div className="border border-gray-200 rounded p-4 mb-4">
      <p className="text-lg font-semibold mb-2">{author}</p>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}

export default QuoteCard