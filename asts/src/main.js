
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// ====================
// Images
// ====================

import * as imgs from './imgs.js'

// ====================
// Map
// ====================

const map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
    [1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1],
    [1, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 1],
    [1, 4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 0, 1],
    [1, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 1],
    [1, 4, 4, 0, 0, 4, 4, 4, 4, 0, 0, 4, 1],
    [1, 4, 4, 0, 0, 4, 4, 4, 4, 0, 0, 4, 1],
    [1, 4, 4, 0, 4, 4, 4, 4, 0, 0, 4, 4, 1],
    [1, 4, 4, 0, 0, 0, 0, 4, 0, 0, 4, 4, 1],
    [1, 4, 4, 0, 0, 0, 0, 4, 0, 4, 4, 4, 1],
    [1, 4, 4, 4, 0, 0, 0, 0, 0, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 0, 0, 0, 0, 0, 4, 0, 0],
    [1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


// ====================
// enemies
// ====================

let enemies = [
    ['octo', 10, 1000, 4300, 0],
    ['octo', 10, 700, 4000, 29]
]
// [name, hp, x, y, count]

// ====================
// Player
// ====================

const playerWidth = 100;
const playerHeight = 100;

// let px = 100;
// let py = 2200;

let px = 400;
let py = 4500;

// ====================
// Physics
// ====================

const speed = 10;
const gravity = 0.981;

let velocityY = 0;

const jumpStrength = 25;


// ====================
// Keyboard
// ====================

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
});


// ====================
// Collision
// ====================

function collisionMap(x, y)
{
    let pointX = 0;
    let pointY = 0;

    for (const row of map)
    {
        for (const tile of row)
        {
            // 1 and 2 are solid
            if (tile == 1 || tile == 2 || tile == 4)
            {
                // Rectangle collision
                if (
                    x < pointX + 100 &&
                    x + playerWidth > pointX &&
                    y < pointY + 100 &&
                    y + playerHeight > pointY
                )
                {
                    return true;
                }
            }

            pointX += 100;
        }

        pointX = 0;
        pointY += 100;
    }

    return false;
}


// ====================
// Check if standing
// ====================

function onGround()
{
    return collisionMap(px, py + 1);
}


// ====================
// Movement
// ====================

function movement()
{
    // --------------------
    // Horizontal movement
    // --------------------

    let newX = px;

    if (keys["a"])
    {
        newX -= speed;
    }

    if (keys["d"])
    {
        newX += speed;
    }

    // Only move horizontally if there isn't a collision
    if (!collisionMap(newX, py))
    {
        px = newX;
    }


    // --------------------
    // Jump
    // --------------------

    if (keys[" "] && onGround())
    {
        velocityY = -jumpStrength;
    }


    // --------------------
    // Gravity
    // --------------------

    velocityY += gravity;

    let newY = py + velocityY;


    // --------------------
    // Vertical collision
    // --------------------

    if (!collisionMap(px, newY))
    {
        py = newY;
    }
    else
    {
        // Moving down
        if (velocityY > 0)
        {
            // Put player exactly on top of block
            py = Math.floor((py + playerHeight) / 100) * 100 - 1;
        }

        // Moving up
        else if (velocityY < 0)
        {
            // Find the block above and place player underneath it
            py = Math.ceil(py / 100) * 100 - 100;
        }

        velocityY = 0;
    }
}


// ====================
// Draw map
// ====================

import * as draw from "./draw.js"

function enemyHandler()
{
    for (const enemy of enemies)
    {
        if (enemy[4] < 59)
        {
            enemy[4] += 1
        }
        else
        {
            enemy[4] = 0
        }

        if (enemy[0] == 'octo')
        {
            if (enemy[4] >= 0 && enemy[4] <= 29)
            {
                enemy[2] -= 10
            }
            else
            {
                enemy[2] += 10
            }
        }
    }
}

// ====================
// Draw everything
// ====================




// ====================
// Game loop
// ====================

function gameLoop()
{
    movement();
    enemyHandler();
    draw.draw();

    console.log(enemies[0][1])

    requestAnimationFrame(gameLoop);
}

gameLoop();


// ====================
// Resize
// ====================

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});