import React, { useState, useEffect } from 'react';
import { scrollToTop } from '../utils';

const Pagination = (allproducts) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (allproducts && allproducts.length > 0) {
      setData(allproducts);
      setTotalPages(Math.ceil(allproducts.length / itemsPerPage));
    }
  }, [allproducts,itemsPerPage]);

  // Cập nhật trang hiện tại
  const handlePageChange = (page) => {
      setCurrentPage(page);
      scrollToTop();
  };

  // Tính toán các giá trị cần thiết để hiển thị phân trang
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Hiển thị dữ liệu và các nút phân trang
  return {data,pages,startIndex,endIndex,handlePageChange};
};

export default Pagination;
