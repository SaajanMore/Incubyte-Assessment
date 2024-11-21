export const calcTotal = (numList) => {
  console.log(numList);
  const numTotal = numList.reduce((a, b) => Number(a) + Number(b), 0);
  return numTotal;
};
