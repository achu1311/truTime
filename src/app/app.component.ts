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
    this.hours += Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;
    console.log('time', this.hours, '  ', this.minutes);

    this.split_time = (45 - (this.hours));
    console.log('time2', this.split_time, ' ', this.hours, '  ', this.minutes);
    if (this.minutes > 0) {
      this.split_time -= (0.60 - (this.minutes / 100));
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
      this.split_time=parseFloat((this.split_time / (5 - this.count)).toFixed(2))
      this.time = 'please stay for ' + (this.split_time );
    }



  }
  addTime(number) {

    if (typeof number === 'number' && number>0) {
      console.log('type number', typeof number, this.count);
      this.count++;
      this.split_time =
        [
          (number > 0) ? Math.floor(number) : Math.ceil(number),
          Math.floor((number % 1) * 100)
        ]
      console.log('split_time', this.split_time);
      this.hours += this.split_time[0];
      console.log('hours', this.hours);
      if (this.split_time[1] > 0)
        this.minutes += this.split_time[1];
      console.log('minutes', this.minutes);
    }
  


  }

}
