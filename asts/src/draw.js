function drawMap()
{
    let pointX = 0;
    let pointY = 0;

    // Camera position
    let cameraX = px - canvas.width / 2 + playerWidth / 2;
    let cameraY = py - canvas.height / 2 + playerHeight / 2;

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

function drawEnemy()
{
    for (const enemy of enemies)
    {
        if (enemy[0] == 'octo')
        {

            // Camera position
            let cameraX = px - canvas.width / 2 + playerWidth / 2;
            let cameraY = py - canvas.height / 2 + playerHeight / 2;

            let drawX = enemy[2] - cameraX;
            let drawY = enemy[3] - cameraY;

            ctx.drawImage(
                imgs.octo,
                drawX,
                drawY,
                100,
                100
            );
        }
    }
}

function draw()
{
    ctx.fillStyle = '#18004f'
    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height   
    );

    drawMap();

    drawEnemy();

    // Always draw player in centre of screen
    ctx.drawImage(
        imgs.plr,
        canvas.width / 2 - playerWidth / 2,
        canvas.height / 2 - playerHeight / 2,
        playerWidth,
        playerHeight
    );
}