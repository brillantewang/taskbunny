const today = new Date();
const day = today.getDate();
const month = today.getMonth() +1;
const year = today.getFullYear();

const todaysDateString = `${year}-${month}-${day}`;

export default todaysDateString;
