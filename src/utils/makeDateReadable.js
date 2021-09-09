// make date human readable
const makeDateReadable = date => {
  const newDate = new Date(date);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    newDate.getDate() +
    ' ' +
    monthNames[newDate.getMonth() + 1] +
    ' ' +
    newDate.getFullYear()
  );
***REMOVED***

export default makeDateReadable;
