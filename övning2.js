var triangles = [
    { width: 12, height: 22 },
    { width: 21, height: 12 },
    { width: 35, height: 49 },
    { width: 12, height: 50 },
    { width: 20, height: 35 }
];


var areaResult = triangles.map(function(areas) {
    const area = areas.width * areas.height / 2;
    areas.area = area;
})


console.log(triangles);