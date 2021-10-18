// const global=useContext(BorderContext)
// const a=global.searchBox;
export const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    return await response.json();
  };

