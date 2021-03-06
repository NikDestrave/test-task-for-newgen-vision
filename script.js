// Список курсов
let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filterFunc(arr) {
    return courses.filter((course) => {
        let new_filter = [ arr[0], !arr[1] ? Number.MAX_SAFE_INTEGER : arr[1] ]
        let new_courses = [
            course.prices[0],
            !course.prices[1] ? Number.MAX_SAFE_INTEGER : course.prices[1]
        ]
        return new_courses[0] >= new_filter[0] && new_courses[0] <= new_filter[1] && new_courses[1] >= new_filter[0] && new_courses[1] <= new_filter[1]
    })
}

console.log('1 вариант:', filterFunc(requiredRange1))
console.log('\n2 вариант:', filterFunc(requiredRange2))
console.log('\n3 вариант:', filterFunc(requiredRange3))
