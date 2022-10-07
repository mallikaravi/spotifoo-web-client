export const Pagination = ({ songsPerPage, totalSongs, paginate }: any) => {
  const pageNumers = [];
  if (totalSongs < songsPerPage) {
    return null;
  }
  for (let index = 1; index <= Math.ceil(totalSongs / songsPerPage); index++) {
    pageNumers.push(index);
  }
  return (
    <nav className="nav justify-content-center">
      <ul className="pagination">
        {pageNumers.map((number) => (
          <li key={number} className="page-item" style={{ padding: "2px" }}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
