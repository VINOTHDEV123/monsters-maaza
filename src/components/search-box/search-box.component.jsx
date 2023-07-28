import './search-box.styles.css';

const Searchbox = ({ className, placeHolder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeHolder}
    onChange={onChangeHandler}
  />
);

export default Searchbox;