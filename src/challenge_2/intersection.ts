export const intersection = (arr: string[]) => {
  let result: string[] = [];
  arr.forEach((element, j) => {
    arr.slice(j + 1).forEach(secondElement => {
      let distance = 0;
      const temp: string[] = [];
      element.split('').forEach((char, k) => {
        if (char !== secondElement[k]) {
          distance += 1;
        } else {
          temp.push(char);
        }
      });
      if (distance < 2) {
        result = temp;
      }
    });
  });
  return result.join('');
};
