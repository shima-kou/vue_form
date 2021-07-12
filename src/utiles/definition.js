const yearArray = [];

// 元号の取得
const getJapaneseEra = (date) => {
  return date.toLocaleString('ja-JP-u-ca-japanese', {
    era: 'short',
    year: 'numeric',
  });
};

for (let i = new Date().getFullYear() - 50; i < new Date().getFullYear() + 1; i++) {
  const text = String(i + '年 (' + getJapaneseEra(new Date(i, 1, 1))) + ')';
  yearArray.push(text);
}

export default yearArray;
