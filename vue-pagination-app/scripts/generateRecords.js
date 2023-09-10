const fs = require('fs');

const records = [];

const outputPath = 'src/components/records.json';

for (let i = 1; i <= 100; i += 1) {
  const record = {
    id: i,
    title: `Запись ${i}`,
    description: `Описание ${i}`,
  };
  records.push(record);
}

const jsonContent = JSON.stringify(records, null, 2);

fs.writeFileSync(outputPath, jsonContent, 'utf8', (err) => {
  if (err) {
    console.error('Ошибка при создании файла:', err);
    return;
  }
  console.log('JSON файл успешно создан!');
});
