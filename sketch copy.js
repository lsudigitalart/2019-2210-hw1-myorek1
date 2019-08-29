function setup() {
    createCanvas(800, 600);
    background(255,255,255);
 
//nostroke()
    // Large circles 
    // outer large circle
    strokeWeight(10);

    ellipse(350,300,550,550)
   
    // inner large circle small line weight 

    strokeWeight(2);

    ellipse(350,300,490,490)
    // inner large circle 
    strokeWeight(10);

    ellipse(350,300,430,430)

    // elipse horizontal 
    strokeWeight(5);

    ellipse(350,300,430,50)

       //top and bottom circles 
        strokeWeight(2);
        ellipse(350,56,55,55)

        strokeWeight(2);
        ellipse(350,545,55,55)

        // elipse verticle 
            strokeWeight(5);
            ellipse(350,300,50,500)
    
    // 3 small circles

     fill(0);

    // middle cirlces 
     // circle 1
        strokeWeight(10);

         noStroke();
        ellipse(100,300,100,100);

        strokeWeight(10);
        stroke(255);
        ellipse(100,300,50,50);
    
    // circle 2 
        strokeWeight(4);
        stroke(255);
        ellipse(350,300,100,100);

    //circle 3
        strokeWeight(10);

        noStroke();
        ellipse(600,300,100,100);
 
        strokeWeight(10);
        stroke(255);
        ellipse(600,300,50,50);

    // Small circles 
        strokeWeight(2);
        stroke(255);
        ellipse(125,200,30,30);

        strokeWeight(2);
        stroke(255);
        ellipse(260,70,30,30);

        strokeWeight(2);
        stroke(255);
        ellipse(440,70,30,30);

        strokeWeight(2);
        stroke(255);
        ellipse(575,200,30,30);

        strokeWeight(2);
        stroke(255);
        ellipse(575,400,30,30);

        strokeWeight(2);
        stroke(255);
        ellipse(125,400,30,30);

        strokeWeight(2);
        stroke(255);
        ellipse(260,530,30,30);

        strokeWeight(2);
        stroke(255);
        ellipse(440,530,30,30);

        

    //nostroke()
   // ellipse(350,300,550,550)
}

function draw(){


}