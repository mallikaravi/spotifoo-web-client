import * as React from "react";
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { FaUserAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/react-fontawesome'


export interface ISearchProps {
  onChangeSearchQuery: (searchQuery: string) => void;
}

export default function SearchInput(props: ISearchProps) {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const { onChangeSearchQuery } = props;
  const debouncedSearchQuery = useDebounce(searchQuery, 50);

  useEffect(() => {
    if (debouncedSearchQuery !== undefined) {
      onChangeSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onChangeSearchQuery]);

  return (
    <>


      <Col>
        <br /><br />
        <div className="d-flex justify-content-start">
          <div className="col-md-5">
            <input id="search" className="form-control full-width form-rounded" type="search"  placeholder="Search..." aria-label="Search" onChange={(event) => setSearchQuery(event.target.value)} />
          </div>
        </div>
      </Col>
    </>
  );
}
