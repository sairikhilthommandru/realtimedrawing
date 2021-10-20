 noseX=0
 noseY=0
 difference=0
 leftWristX=0
 rightWristX=0
 function setup() {
canvas=createCanvas(1600,900)
canvas.position(900,300)
video=createCapture(VIDEO)
video.size(600,550)
video.position(100,300)
poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on("pose",gotPoses)
}
function draw(){
    document.getElementById("square_side").innerHTML='the square Width and Length will be'+difference+"px"
    background('#eb3434')
    fill('#00FF00')
    stroke("#FFFF00")
    square(noseX,noseY,difference)
}

function modelLoaded(){
    console.log('PoseNet Is Intialized')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("noseX="+noseX+"noseY="+noseY)
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX)
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference"+difference)
    }
}