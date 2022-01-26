function init(){
 const takeOffButton = document.querySelector('#takeoff');
 const landButton = document.querySelector('#landing');
 const abortButton = document.querySelector('#missionAbort');

 takeOffButton.addEventListener('click',()=>{
     let confirm = window.confirm('Click \'Ok\' to confirm shuttle is ready for takeoff.\n\nClick \'Cancel\' if shuttle is not ready.');
     if(confirm){
        setStatus('Shuttle in flight.');
        changeBackground('blue');
        updateShuttleHeight(10000);
        moveRocket('Up');
     }
 });
 landButton.addEventListener('click',()=>{
    window.alert('The shuttle is landing.  Landing gear engaged.');
    setStatus('The shuttle has landed.');
    changeBackground('');
    updateShuttleHeight(0);
    moveRocket('reset');
 });
 abortButton.addEventListener('click',()=>{
    let confirm = window.confirm('Abort Mission?\n\nClick \'Ok\' Button to abort mission and return shuttle to ground.\nClick \'Cancel\' to exit this alert and continue mission.');
    if(confirm){
        setStatus('Mission Aborted');
        changeBackground('');
        updateShuttleHeight(0);
        moveRocket('reset');
    }
 });
 updatePosition();
}
function moveRocket(direction){
    const rocket = document.querySelector('#rocket');
    let currentTop = Number(rocket.style.top.replace('px',''));
    let currentLeft = Number(rocket.style.left.replace('px',''));
    switch(direction){
        case 'Up':
            if(currentTop>0){
                rocket.style.top = (currentTop - 10)+'px';
            }
        break;
        case 'Down':
            if(currentTop<250){
                rocket.style.top = (currentTop + 10)+'px';
            }
        break;
        case 'Left':
            if(currentLeft>-170){
                rocket.style.left = (currentLeft - 10)+'px';
            }
        break;
        case 'Right':
            if(currentLeft<170){
                rocket.style.left = (currentLeft + 10)+'px';
            }
        break;
        case 'reset':
            rocket.style.top = '250px';
            rocket.style.left = '';
        break;
    }
    updateShuttleHeight(Number(250-(rocket.style.top.replace('px','')))*1000);
    updatePosition();
}
function updatePosition(){
    const xPosition = document.querySelector('#x');
    const yPosition = document.querySelector('#y');
    xPosition.innerHTML = Number(rocket.style.left.replace('px',''));
    yPosition.innerHTML = Number(rocket.style.top.replace('px',''));
}
function updateShuttleHeight(value){
    const shuttleHeight = document.querySelector("#spaceShuttleHeight");
    shuttleHeight.innerHTML = value;
}
function setStatus(status){
    const flightStatus = document.querySelector('#flightStatus');
    flightStatus.innerHTML = status;
}
function changeBackground(color){
    const shuttleBG = document.querySelector('#shuttleBackground');
    shuttleBG.style.backgroundColor = color;
}
window.addEventListener('load',init);
