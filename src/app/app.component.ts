import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'truTimeCal';
  number1;
  number2;
  number3;
  number4;
  number5;
  time;
  count:number = 0;
  hours: number = 0;
  minutes: number = 0;
  split_time;
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

    this.split_time = (45 - (this.hours));
    console.log('time2', this.split_time, ' ', this.hours, '  ', this.minutes);
    if (this.minutes > 0) {
      this.minutes=60-this.minutes;
      //cutrrent 
      // this.split_time -= (0.60 - (this.minutes / 100));
      console.log('time3', this.split_time, ' ', this.hours, '  ', this.minutes);
    }
    console.log('finaltime', this.split_time, 'count', this.count);
    if(this.count===5){
      if(this.split_time===0 ){
        this.time = 'CONGRATULATIONS!!!You have completed your quota for the week.';
      }
      else if(this.split_time<0 ){
        this.time = 'You have stayed enough. Please take a break from work';
      }else {
        this.split_time=parseFloat(this.split_time.toFixed(2));
        this.split_time =
        [
          (this.split_time > 0) ? Math.floor(this.split_time) : Math.ceil(this.split_time),
          100-Math.floor((this.split_time % 1) * 100)
        ]

        this.time='You have to work hard. You have to stay for additional '+this.split_time[0]+' hours ';
        if(this.split_time[1]<59){
          this.time+=this.split_time[1]+' minutes';
        }
      }
    }
    else if (this.count > 0) {
      // this.count=;
      console.log('before this.split final',this.split_time);
 //current
      // let temp=100-((this.split_time % 1)*100);
      let temp=this.minutes;
      console.log('temp',temp);
      let totalWorkingHours;
      let stayingMinutes,stayingHours;
      if(temp>=0){
        totalWorkingHours=45-this.split_time+(completedMinutes/100)
      }
      console.log('total working hours',totalWorkingHours);
      if(totalWorkingHours===(9*this.count)){
        console.log('exact',this.split_time,' ',this.minutes,' ',completedMinutes);
        stayingHours=(this.split_time)/(5-this.count);
        stayingMinutes=0;
        console.log('staying minutes',stayingHours);
      }
      if(totalWorkingHours>(9*this.count)){
        console.log('worked more',this.split_time,' ',this.minutes,' ',completedMinutes);
        stayingHours=(this.split_time-1)/(5-this.count);
        if(completedMinutes>0)
        stayingMinutes=60-(completedMinutes/(5-this.count));
        console.log('staying minutes',stayingHours,' ',stayingMinutes);

      }
      else{
        
        console.log('less',this.split_time,' ',this.minutes,' ',completedMinutes);
        stayingHours=(this.split_time-1)/(5-this.count);
        if(this.minutes>0)
        stayingMinutes=this.minutes/(5-this.count);
        console.log('staying minutes',stayingHours,' ',stayingMinutes);
      }
      // if(temp<60){
        //current
        // this.split_time=Math.floor(this.split_time)+(temp/100)-Math.floor((this.split_time % 1))
      // }
     
     
      // console.log('temp2',this.split_time,' ',this.minutes,' ',completedMinutes);
      
      // this.split_time=parseFloat((this.split_time-(this.minutes/100)).toFixed(2))
      // if(completedMinutes>0)
      // this.split_time=(this.split_time-1)/(5-this.count);
      
      // this.minutes=60-((completedMinutes)/(5-this.count));
      // console.log('before this.split final2',this.split_time,' ',this.minutes);

      // this.split_time=parseFloat((this.split_time / (5 - this.count)).toFixed(2))
      
      

      // console.log('before this.split final3',this.split_time);

      // this.time = 'please stay for ' + (this.split_time[0] )+' '+this.split_time[1];
            this.time = 'Please maintain average of ' + Math.floor(stayingHours)+' Hours '+Math.floor(stayingMinutes)+' Minutes';
    }



  }
  addTime(number) {

    if (typeof number === 'number' && number>0) {
      console.log('type number', typeof number, this.count);
      this.count++;
      this.split_time =
        [
          (number > 0) ? Math.floor(number) : Math.ceil(number),
          (number % 1) * 100
        ]
      console.log('split_time', this.split_time);
      this.hours += this.split_time[0];
      console.log('hours', this.hours);
      if (this.split_time[1] > 0)
      {
        this.minutes += parseInt(this.split_time[1].toFixed(0))
      }
        
      console.log('minutes', this.minutes);
    }
  


  }

}
