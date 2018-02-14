

/****************объект "яблоко"*************/

var Apple;
// конструктор яблока
 Apple = function(age, color, size, fresh, onTree){
	 this.age    = age;
	 this.color  = color;
	 this.size   = size;
	 this.fresh  = fresh;
	 this.onTree = onTree;
	//упасть с дерева
	this.fall = function fall() {
		this.onTree = false;
		console.log("Hello Mr. Newton!");
		};
	//испортиться
	this.spoil = function spoil() {
		this.fresh = false;
		console.log("Don't eat this apple!");
		};
 };









/*********************массив "сад"********************/

var garden = [];

// возраст сада
garden.age = 25;
// плодоносный цикл сада
garden.spawingCircle = 30;

// добавление нового дерева
garden.addNewTree = function addNewTree() {
	treeForAddNewTree = new Array();
	this.push(treeForAddNewTree);
	console.log("Growing Strong");
};

//новое яблоко на заданном дереве
garden.addNewApple = function addNewApple(numTree, age, color, size, fresh, onTree) { 
  
	var apple = new Apple(age, color, size, fresh, onTree);
	this[numTree].push(apple);
	console.log("new apple"+"-"+(this[numTree].length) + " on tree " + numTree );
	console.log(apple.age + "  " + apple.color + "  " + apple.size + "  " + apple.fresh + "  " + apple.onTree);
 
};

// подсчет и вывод количества деревьев
garden.countTrees = function countTrees() {
   console.log ("В саду " + garden.length + " деревьев");
};

//данные по яблокам на дереве
 garden.checkAppleStatus = function checkAppleStatus(numTree) {
    
    for (var k = 0; k < this[numTree].length; k++) {
		console.log( "age :" + this[numTree][k].age + " color :" 
                + this[numTree][k].color + " size :" + this[numTree][k].size 
                + " onTree : " + this[numTree][k].onTree + " fresh : " 
                + this[numTree][k].fresh );
	}
}  

//переменная для суммирования яблок на деревьях
var applesQuantity = 0;

// функция перебора массива garden суммирующая длинны массивов деревьев

function forCountApples(tree,i,garden){
	applesQuantity += tree.length;
	console.log("На дереве " + i + " " + garden[i].length + " яблок");
}

// вычисление и вывод количества яблок
garden.countAppels = function f() {
	garden.forEach(forCountApples);
	console.log("В саду " + applesQuantity + " яблок" + " на " + 
        garden.length + " деревьях");
	
	applesQuantity = 0;
};

// метод увеличения возраста сада


garden.passDay = function passDay(numDays){
	for (var l = 0; l < numDays; l++) {
		garden.age++; // добавление задонного количества суток
			garden.forEach( function(tree,i,garden) { 
			var checkSpawing = ((garden.age/30) % 1) // проверка прохождения 30 суток
				// порождение яблок в зависимости от garden.spawingCircle
				if  (checkSpawing === 0){
					garden.addNewApple(i, 0, "red", "big", true, true);
				}
						//фильтрация яблок по возрасту
						garden[i].forEach( function(apple,k) {
							garden[i][k].age++;
							console.log("tree " + i +" apple " + k + " age " + garden[i][k].age);
							// падение с дерева
							if  (garden[i][k].age == 30){
								garden[i][k].fall();
							}
							// разложение 
							if  (garden[i][k].age == 31){
								garden[i][k].spoil();
								garden[i].splice(k,1);
							} 
							// увеличение возраста каждого яблока на numDays
							//garden[i][k].age +=  numDays;					
						});		
		});
	}
console.log("garden.age :" + garden.age);
console.log("garden.spawingCircle :" + garden.spawingCircle);



}