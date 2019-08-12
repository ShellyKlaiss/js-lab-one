const name1 =prompt('enter name 1.');
const name2 =prompt('enter name 2.');
const name3 =prompt('enter name 3.');

if ((name1.length  > name2.length) && (name1.length > name3.length)) {
    console.log(`${name1} is a longer name than ${name2} and ${name3}.`);
}
if ((name2.length  > name1.length) && (name2.length > name3.length)) {
    console.log(`${name2} is a longer name than ${name1} and ${name3}.`);
}
if ((name3.length  > name1.length) && (name3.length > name2.length)) {
    console.log(`${name3} is a longer name than ${name1} and ${name2}.`);
} 
if ((name1.length === name2.length) && (name1.length === name3.length)) {
    console.log(`${name1}, ${name2}, and ${name3} are the same length.`);
};







 




