import React, { ChangeEvent, useState, Dispatch } from "react";
import classes from "./SearchBar.module.scss";
import { getAutoComplete } from "../../utils/actions/actions.api";
import { LocationData } from "../../utils/interfaces/location.interface";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const REGEX: RegExp = /^[a-zA-Z ]*$/;


interface SearchBarProps {
  setSelectedCity: Dispatch<LocationData>;
} 

const SearchBar = ({setSelectedCity}:SearchBarProps) => {
  const [results, setResults] = useState<LocationData[]>([]);
  const [search, setSearch] = useState<string>('');

  const mutation = useMutation({
    mutationFn: (search:string) => {
      return getAutoComplete(search);
    },
    onSuccess: (data) => {
      if(data) return setResults(data)
      return setResults([]);
    }
  })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if(!REGEX.test(searchValue.split(',')[0])) return toast.error("Please enter only english letters")
    setSearch((searchValue).split(',')[0]);
    mutation.mutate((searchValue).split(',')[0])
  };

  const optionHandlerSelectd = () => {
    const selectedCityItem = results.find((res) => res.LocalizedName === search);
    console.log(selectedCityItem);
    
    if(!selectedCityItem) return toast.error(`couldn't find a city based on your search` )
    setSelectedCity(selectedCityItem);
  }
  
  return (
    <div className={classes.__searchBar}>
      <div className={classes.__searchInput}>
        <input
          type="text"
          value={search}
          onChange={onChangeHandler}
          list="cityOptions"
        />
        <datalist id="cityOptions">
          {results.map((obj, index) => (
            <option key={index} value={`${obj.LocalizedName},${obj.Country.LocalizedName}`} />
          ))}
        </datalist>
      </div>
      {mutation.isPending && <>....</>}
      {mutation.isSuccess && <button onClick={optionHandlerSelectd}>Search</button>}
    </div>
  );
};

export default SearchBar;
