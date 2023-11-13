import React, { ChangeEvent, useState, Dispatch } from "react";
import classes from "./SearchBar.module.scss";
import { getAutoComplete } from "../../utils/actions/actions.api";
import { LocationData } from "../../utils/interfaces/location.interface";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const REGEX: RegExp = /^[a-zA-Z -]*$/;

interface SearchBarProps {
  handleSearch: Dispatch<LocationData>;
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [results, setResults] = useState<LocationData[]>([]);
  const [search, setSearch] = useState<string>("");

  const mutation = useMutation({
    mutationFn: (search: string) => {
      return getAutoComplete(search);
    },
    onSuccess: (data) => {
      if (data) return setResults(data);
      return setResults([]);
    },
    onError: (error) => {
      setSearch("");
      setResults([]);
    },
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const rawSearchValue = e.target.value;
    const searchValue = rawSearchValue.split(",")[0];

    if (!REGEX.test(searchValue)) {
      toast.error("Please enter only English letters");
      return;
    }

    setSearch(searchValue);
    mutation.mutate(searchValue);
  };

  const handleSelectedOption = () => {
    const selectedLocationItem = results.find(
      (res) => res.LocalizedName === search
    );

    if (!selectedLocationItem) {
      toast.error(`Couldn't find a location based on your search`);
      return;
    }
    handleSearch(selectedLocationItem);
  };

  return (
    <div className={classes.__searchBar}>
      <div className={classes.__searchInput}>
        <input
          type="text"
          value={search}
          onChange={onChangeHandler}
          list="locationOptions"
        />
        <datalist id="locationOptions">
          {results.map((loc) => (
            <option
              key={loc.Key}
              value={`${loc.LocalizedName},${loc.Country.LocalizedName}`}
            />
          ))}
        </datalist>
      </div>
      {mutation.isPending && <>....</>}
      {mutation.isSuccess && (
        <button onClick={handleSelectedOption}>Search</button>
      )}
      {mutation.isError && <>{mutation.error.message}</>}
    </div>
  );
};

export default SearchBar;
