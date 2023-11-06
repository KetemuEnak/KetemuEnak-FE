const ConvertDate = (inputDate) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(inputDate);
  return date.toLocaleDateString("id-ID", options);
};

export default ConvertDate;
