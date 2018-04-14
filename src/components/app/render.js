import React, { Fragment } from 'react';

import './styles.css';

export default ({
  settings: { size, diagonal },
  changeSize,
  changeDiagonal,
  submitSettings,
  query,
  changeQuery,
  submitSearch,
  matrix,
  loading,
}) => (
  <Fragment>
    <form onSubmit={submitSettings}>
      <fieldset>
        <legend>Settings</legend>
        <div className="field size">
          <label htmlFor="size">Matrix size: {size}</label>
          <input
            type="range"
            id="size"
            min="2"
            max="50"
            step="1"
            value={size}
            onChange={changeSize}
          />
        </div>
        <div className="control submit">
          <input type="submit" value="Generate" />
        </div>
      </fieldset>
    </form>
    <form onSubmit={submitSearch}>
      <fieldset>
        <legend>Search</legend>
        <div className="field query">
          <label htmlFor="query">Find your word(s)</label>
          <input type="text" id="query" value={query} onChange={changeQuery} />
        </div>
        <div className="field diagonal">
          <input
            type="checkbox"
            id="diagonal"
            checked={diagonal}
            onChange={changeDiagonal}
          />
          <label htmlFor="diagonal">Allow siblings on diagonal</label>
        </div>
        <div className="control submit">
          <input
            type="submit"
            value={`Search ${loading && '(loading...)'}`}
            disabled={loading}
          />
        </div>
      </fieldset>
    </form>
    <section>
      <h1>Letters</h1>
      <table>
        <tbody>
          {matrix.map((columns, row) => (
            <tr key={row}>
              {columns.map((letter, column) => (
                <td key={[row, column]}>{letter}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </Fragment>
);
