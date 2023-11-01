const useGenres = (selectedGenres) => {
if(selectedGenres.length < 1) return "";

const GenreIds = selectedGenres.map((g) => g.id);
return GenreIds.reduce((acc, curr) => acc + "," + curr);
};
export default useGenres;

// GenreIds.reduce will take ids as 
// 1 
// 2
// 3
// 4 
// and takes two parameter acc, curr and append curr with Comma
// so 1, 2, 3, 4, 5