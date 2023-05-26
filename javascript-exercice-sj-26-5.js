const categories = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: []
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    name: 'category5',
    subcategories: []
  }
];
const testCases = [
  { categoryName: 'category4', result: '/category1/category3/category4' },
  { categoryName: 'category2', result: '/category1/category2' },
  { categoryName: 'category5', result: '/category5' },
  { categoryName: 'category6', result: null },
]

const getCategoryPath = (categories, categoryName) => {
  const categoryPath = categories.reduce((path, category) => {
    const subcategoryPath = getCategoryPath(category.subcategories, categoryName);
    if (subcategoryPath !== null) {
      return '/' + category.name + subcategoryPath;
    }
    else if (category.name === categoryName) {
      return '/' + category.name;
    }
    else {
      return path;
    }
  }, null);
  return categoryPath;
};


const testFunction = (categories, testCases) => {
  console.log('Running tests...')

  for (let i in testCases) {
    let test = testCases[i]
    let result = getCategoryPath(categories, test.categoryName)
    if (result === test.result) {
      console.log(`Test number ${+i + 1} completed successfully`)
    } else {
      console.log(`Error: Test number ${+i + 1}: Expected ${test.result}, got : ${result} `)
    }

  }
  console.log('Running tests done')

}

console.log(testFunction(categories, testCases))
