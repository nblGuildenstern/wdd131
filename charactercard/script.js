const character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'snortleblat.png',
    attacked: function () {
        this.health -=20;
        document.querySelector('.health').textContent = "Health: " + this.health;
        if (this.health <= 0) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    alert("Character died");
                });
            });
        }
    },
    levelUp: function () {
        this.level += 1;
        document.querySelector('.level').textContent = "Level: " + character.level;
    }
}

console.log(character.name)

document.querySelector('.name').textContent = character.name;
document.querySelector('.class').textContent = "Class: " + character.class;
document.querySelector('.level').textContent = "Level: " + character.level;
document.querySelector('.health').textContent = "Health: " + character.health;

document.querySelector('img').setAttribute('src', 'images/' + character.image);
document.querySelector('img').setAttribute('alt', character.name);

document.querySelector("#attackButton").addEventListener("click", function () {
    character.attacked();
});
document.querySelector("#levelButton").addEventListener("click", function () {
    character.levelUp();
});