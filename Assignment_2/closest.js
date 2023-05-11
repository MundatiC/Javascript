function closest(a,b){

    if(((100 - a)**2) > ((100 - b)**2)){
        console.log(`${b} is closer to 100 `);
    }
    else if(((100 - b)**2) > ((100 - a)**2)) {
        console.log(`${a} is closer to 100`);
    }
    

    else if (a===b){
        console.log(`${a} and ${b} are both equally close to 100`);
    }
}

closest(99, 120);
closest(100, 1000);
closest(-10,-1);
closest(100,100);