const ExcelJS = require("exceljs");
const mysql = require("mysql2/promise");

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    date_of_birth DATE NOT NULL
  );
`;

const pool = mysql.createPool({
  host: 3306,
  user: "root",
  password: "Rsk@2000",
  database: "ExcelData",
});

async function uploadFile(fileBuffer) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(fileBuffer);
  const worksheet = workbook.getWorksheet(1);

  const data = [];
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      const [name, address, age, date_of_birth] = row.values;
      data.push({ name, address, age, date_of_birth });
    }
  });

  return data;
}

async function validateAndInsertData(data) {
  await pool.query(createTableQuery);
  const insertQuery = `
    INSERT INTO users (name, address, age, date_of_birth) 
    VALUES (?, ?, ?, ?)
  `;

  for (const user of data) {
    if (
      typeof user.age === "number" &&
      !isNaN(Date.parse(user.date_of_birth)) &&
      user.address.length >= 25
    ) {
      await pool.query(insertQuery, [
        user.name,
        user.address,
        user.age,
        user.date_of_birth,
      ]);
    }
  }
}

module.exports = { uploadFile, validateAndInsertData };
