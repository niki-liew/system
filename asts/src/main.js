import * as imgs from './imgs.js'

import * as draw from "./draw.js"



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





let enemies = [
    ['octo', 1000, 4300, 10, 0],
    ['octo', 700, 4000, 10, 29]
]
// [name, x, y, hp, count]





const playerWidth = 100;
const playerHeight = 100;




let px = 400;
let py = 4500;








const speed = 10;
const gravity = 0.981;

let velocityY = 0;

const jumpStrength = 25;






const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key.toLowerCase()] = false;
});





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



function onGround()
{
    return collisionMap(px, py + 1);
}









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
                enemy[1] -= 10
            }
            else
            {
                enemy[1] += 10
            }
        }
    }
}



let projectiles = [
]

// [name, x, y, xDir, yDir, speed]


function projectilesHandler()
{
    for (const prj of projectiles)
    {
        prj[1] += prj[3] * prj[5] 
        prj[2] += prj[4] * prj[5] 
    }
}

function movement()
{


    let newX = px;



    if (keys["q"])
    {
        projectiles.push(
    ['pea', px, py, 1, 1, 10]); 
    }



    if (keys["a"])
    {
        newX -= speed;
    }

    if (keys["d"])
    {
        newX += speed;
    }


    if (!collisionMap(newX, py))
    {
        px = newX;
    }




    if (keys[" "] && onGround())
    {
        velocityY = -jumpStrength;
    }




    velocityY += gravity;

    let newY = py + velocityY;




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


function gameLoop()
{
    movement();
    enemyHandler();
    projectilesHandler();


    draw.ctx.fillStyle = '#18004f'
    draw.ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height   
    );

    draw.drawMap(px, py, map, imgs);

    draw.drawEnemy(px, py, imgs, enemies);
    
    draw.drawEnemy(px, py, imgs, projectiles)

    draw.ctx.drawImage(
        imgs.plr,
        canvas.width / 2 - 100 / 2,
        canvas.height / 2 - 100 / 2,
        100,
        100
    );

    // draw.drawMainMenu(imgs)






    requestAnimationFrame(gameLoop);
}

gameLoop();


window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});