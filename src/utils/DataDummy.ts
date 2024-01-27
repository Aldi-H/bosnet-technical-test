// export const data = [
//   { id: 1, name: "John Doe", birthday: "1990-01-15", age: 32 },
//   { id: 2, name: "Jane Doe", birthday: "1985-05-22", age: 37 },
// ];

export const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 200; i++) {
    const randomAge = Math.floor(Math.random() * 50) + 20;
    const dummyRow = {
      no: i,
      id: i,
      name: `Person ${i}`,
      birthday: generateRandomDate(),
      age: randomAge,
    };
    dummyData.push(dummyRow);
  }

  return dummyData;
};

// export const generateDummyData = (perPage, offset) => {
//   const dummyData = [];

//   for (let i = 1; i <= 200; i++) {
//     const randomAge = Math.floor(Math.random() * 50) + 20;
//     const dummyRow = {
//       no: i,
//       id: i,
//       name: `Person ${i}`,
//       birthday: generateRandomDate(),
//       age: randomAge,
//     };
//     dummyData.push(dummyRow);
//   }

//   return dummyData.slice(offset, offset + perPage);
// };

const generateRandomDate = () => {
  const year = Math.floor(Math.random() * (2000 - 1970 + 1)) + 1970;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1; // Assuming all months have 28 days for simplicity

  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  const formattedDay = day < 10 ? `0${day}` : `${day}`;

  return `${year}-${formattedMonth}-${formattedDay}`;
};

// const dummyData = generateDummyData();
