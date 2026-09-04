const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawMap(px, py, map, imgs)
{
    let pointX = 0;
    let pointY = 0;

    // Camera position
    let cameraX = px - canvas.width / 2 + 100 / 2;
    let cameraY = py - canvas.height / 2 + 100 / 2;

    for (const row of map)
    {
        for (const tile of row)
        {
            let drawX = pointX - cameraX;
            let drawY = pointY - cameraY;

            if (tile == 1)
            {
                ctx.drawImage(
                    imgs.rock,
                    drawX,
                    drawY,
                    100,
                    100
                );
            }

            if (tile == 2)
            {
                ctx.drawImage(
                    imgs.rock1,
                    drawX,
                    drawY,
                    100,
                    100
                );
            }

            if (tile == 3)
            {
                ctx.drawImage(
                    imgs.flower,
                    drawX,
                    drawY,
                    100,
                    100
                );
            }

            if (tile == 4)
            {
                ctx.drawImage(
                    imgs.grass,
                    drawX,
                    drawY,
                    100,
                    100
                );
            }

            pointX += 100;
        }

        pointX = 0;
        pointY += 100;
    }
}

function drawEnemy(px, py, imgs, enemies)
{
    for (const enemy of enemies)
    {
        let cameraX = px - canvas.width / 2 + 100 / 2;
        let cameraY = py - canvas.height / 2 + 100 / 2;

        let drawX = enemy[1] - cameraX;
        let drawY = enemy[2] - cameraY;

        if (enemy[0] == 'octo')
        {
            ctx.drawImage(
                imgs.octo,
                drawX,
                drawY,
                100,
                100
            );
        }

        if (enemy[0] == 'pea')
        {
            ctx.drawImage(
                imgs.pea,
                drawX,
                drawY,
                100,
                100
            );
        }
    }
}

function drawMainMenu(imgs)
{
    ctx.drawImage(
        imgs.system,
        canvas.width / 2 - 400 / 2,
        canvas.height / 2 - 400 / 2,
        400,
        100
    );
}

export
{
    canvas,
    ctx,
    drawMap,
    drawEnemy,
    drawMainMenu,
}