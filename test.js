
const points = [{x:45, y:64}, {x:56, y:98}, {x:23, y:44}];
const point = {x:23, y:44};

const pointInside = (point, points) => {
    const index = points.findIndex(p => point.x === p.x && point.y === p.y)
    return index > -1 ? true : false;
}

const isTrue = pointInside(point, points);
console.log(isTrue);

const isFalse = pointInside({x:57, y:99}, points);
console.log(isFalse);