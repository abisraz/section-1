let movies=['RRR','pk','KGF','Mard','mard2', 'yxxjm'];

//Indexing
console.log(movies[3]);
console.log(movies.indexOf('RRR'));
console.log(movies.at(-1));

//slicing
console.log(movies.slice(2,5));
console.log(movies.slice(2));
console.log(movies.slice(2,100));

//adding element
console.log([...movies,'Barfi']);
//movies=[...movies,'Barfi'];
console.log(['batmasn',...movies,'Barfi']);
console.log(movies);
console.log(...movies.slice(0,3), 'jkihj' ,...movies.slice(4));
console.log(movies);

movies.pop();
console.log(movies);
movies.shift();
console.log(movies);
movies=[...movies,'flash','exit14','nh10']
console.log(movies);
movies.splice(2,4);
console.log(movies);




//add element at 4 position
const numbers=[00,11,22,33,44,55,66,77,88]
console.log(...numbers.slice(0,4),99,...numbers.slice(4));
//replace element at 4 position
console.log(...numbers.slice(0,3),99,...numbers.slice(4));
//five friends name



