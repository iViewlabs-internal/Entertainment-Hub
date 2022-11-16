import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const Filter = (props: any) => {
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <div className="genres-div">
          <h4>Genres</h4>
          <a href="#!" className="closebtn" onClick={props.closeNav}>
            &times;
          </a>
        </div>
        <hr className="hr-genre" />
        {props.genre?.map(
          (val: {
            id: Key | null | undefined;
            name:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => {
            return (
              <div key={val.id} id="header-filter-div">
                <input
                  type="checkbox"
                  id={`check${val.id}`}
                  onClick={() => props.tempFunc(val.id, `check${val.id}`)}
                />
                <label className="all-lables">{val.name}</label>
              </div>
            );
          }
        )}
        <button onClick={props.applyFilter} className="btn-apply">
          Apply Filters
        </button>
      </div>
    </>
  );
};

export default Filter;