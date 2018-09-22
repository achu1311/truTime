import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title;
number1;
number2;
number3;
number4;
number5;
time;
count:number;
hours: number;
minutes: number;
  
  ngOnInit(): void {
    this.title= 'truTimeCal'
  }
  
  onKey(event: any) { 
    this.calculate();
    console.log('inside onkey,id:');
  }
  calculate() {
    // if(this.number1){
    this.hours=0;
    this.minutes=0;
    this.count=0;
    if (this.number1) {
     
      this.addTime(this.number1);
      // console.log(this.number1);
    }
    if (this.number2) {
      this.addTime(this.number2);
      // console.log(this.number2);
    } if (this.number3) {
      this.addTime(this.number3);
      // console.log(this.number3);
    } if (this.number4) {
      this.addTime(this.number4);
      // console.log(this.number4);
    } if (this.number5) {
      this.addTime(this.number5);
      // console.log(this.number5);
    }
    // console.log(this.minutes/60);
    this.hours+=Math.floor(this.minutes/60);
   
    this.minutes = parseInt((this.minutes % 60).toFixed(0));
    let completedMinutes=this.minutes;
    console.log('time', this.hours, '  ', this.minutes.toFixed(0));

    let split_time = (45 - (this.hours));
    console.log('time2', split_time, ' ', this.hours, '  ', this.minutes);
    if (this.minutes > 0) {
      this.minutes=60-this.minutes;
      //cutrrent 
      // this.split_time -= (0.60 - (this.minutes / 100));
      console.log('time3', split_time, ' ', this.hours, '  ', this.minutes);
    }
    console.log('finaltime', split_time, 'count', this.count);
    if(this.count===5){
      if(split_time===0 && this.minutes===0){
        this.time = 'CONGRATULATIONS!!!You have completed your quota for the week.';
      }
      else if(split_time===0 &&this.minutes>0 ){
        this.time = 'You have stayed enough. Please take a break from work';
      }else {
        split_time=parseFloat(split_time.toFixed(2));
        let stayingHours=split_time-1;
        let stayingMinutes=this.minutes;
        this.time='You have to work hard. You have to stay for additional '+stayingHours+' hours ';
      
        if(stayingMinutes<60){
          this.time+=stayingMinutes+' minutes';
        }
      }
    }
    else if (this.count > 0) {
      // this.count=;
      console.log('before this.split final',split_time);
 //current
      // let temp=100-((this.split_time % 1)*100);
      let temp=this.minutes;
      console.log('temp',temp);
      let totalWorkingHours;
      let stayingMinutes,stayingHours;
      if(temp>=0){
        totalWorkingHours=45-split_time+(completedMinutes/100)
      }
      console.log('total working hours',totalWorkingHours);
      if(totalWorkingHours===(9*this.count)){
        console.log('exact',split_time,' ',this.minutes,' ',completedMinutes);
        stayingHours=(split_time)/(5-this.count);
        stayingMinutes=0;
        console.log('staying minutes',stayingHours);
      }
      else if(totalWorkingHours>(9*this.count)){
        console.log('worked more',split_time,' ',this.minutes,' ',completedMinutes);
        stayingHours=(split_time-1)/(5-this.count);
        if(completedMinutes>0)
        stayingMinutes=60-(completedMinutes/(5-this.count));
        console.log('staying minutes',stayingHours,' ',stayingMinutes);

      }
      else{
        
        console.log('less',split_time,' ',this.minutes,' ',completedMinutes);
        stayingHours=(split_time-1)/(5-this.count);
        if(this.minutes>0)
        stayingMinutes=this.minutes/(5-this.count);
        console.log('staying minutes',stayingHours,' ',stayingMinutes);
      }
            this.time = 'Please maintain average of ' + Math.floor(stayingHours)+' Hours '+Math.floor(stayingMinutes)+' Minutes';
    }



  }
  addTime(number) {

    if (typeof number === 'number' && number>0) {
      console.log('type number', typeof number, this.count);
      this.count++;
      let split_time =
        [
          (number > 0) ? Math.floor(number) : Math.ceil(number),
          (number % 1) * 100
        ]
      console.log('split_time', split_time);
      this.hours += split_time[0];
      console.log('hours', this.hours);
      if (split_time[1] > 0)
      {
        this.minutes += parseInt(split_time[1].toFixed(0))
      }
        
      console.log('minutes', this.minutes);
    }
  


  }

}
