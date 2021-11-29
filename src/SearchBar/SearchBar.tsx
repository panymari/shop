import { useState, ChangeEventHandler } from 'react';
//styles
import { Wrapper } from './SearchBar.styles';
import { Input }from './SearchBar.styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
//types
import { CartItemType } from '../App';


type Props = {
    filteredData: CartItemType[];
    setFilteredData: any;
    data: CartItemType[] | undefined;
    placeholder: string;
    seeAll: () => void;
}


const Header: React.FC<Props> = ({ placeholder, data, filteredData, setFilteredData, seeAll }) => {
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter: ChangeEventHandler<HTMLInputElement> = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter: any = data?.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    const clearAndShowAllElem = () =>{
      clearInput(); 
      setTimeout(() => { seeAll() }, 1000);
    }
  
    return (
      <Wrapper>
        <div className="search-inputs">
          <Input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="search-icon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearAndShowAllElem} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="data-result">
            {filteredData.slice(0, 15).map((value: CartItemType) => {
              return (
                  <p>{value.title}</p>
              );
            })}
          </div>
        )}
      </Wrapper>
    );
};

export default Header;
