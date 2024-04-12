import PropTypes from "prop-types";
import './Pagination.css'

const PaginationComponent = ({ activePage, totalPages, setActivePage }) => {
  return (
    <div className="pagination-container">
      <button
        onClick={() => setActivePage(activePage - 1)}
        disabled={activePage === 1}
        className="pagination-button"
      >
        Prev
      </button>
      <div className="pagination-info">
        <span>Page:</span>
        <span>{activePage}</span>
        <span>of</span>
        <span>{totalPages}</span>
      </div>
      <button
        onClick={() => setActivePage(activePage + 1)}
        disabled={activePage === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

PaginationComponent.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired
};

export default PaginationComponent;
