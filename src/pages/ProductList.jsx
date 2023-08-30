import React ,{useState} from 'react'
import { Dashboard } from './Dashboard'

export const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages=100;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Perform data fetching or update the UI with the new page content
  };
  return (
    <div>ProductList
    <Dashboard currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </div>
  )
}
