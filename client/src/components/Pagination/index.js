import { Pagination } from "antd";
// import "./style.css";

function PaginationSet({ current, onChange, total, productSize, showQuickJumper }) {
  const handlePageChange = (page) => {
    onChange(page);
  };

  return (
    <Pagination
      current={current}
      onChange={handlePageChange}
      total={total}
      pageSize={productSize}
      showQuickJumper={showQuickJumper}
    />
  );
}

export default PaginationSet;
