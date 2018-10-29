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
  minutes: number = 0;
  onKey(event: any) { 
    this.calculate();
    console.log('inside onkey,id:');
  }
  calculate() {
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
    if(this.count===5){
      console.log('final',this.minutes);
      if(this.minutes===2700){
        this.time = 'CONGRATULATIONS!!!You have completed your quota for the week.';
      }
      else if(this.minutes>2700){
        this.time = 'You have stayed enough. You can take a break from work';
      }else {
        let rmins=2700-this.minutes;
        let stayhrs=rmins/60;
        this.time='You have to work hard. Please stay for additional' ;
        if(stayhrs>0){
          this.time+=Math.floor(stayhrs)+' hours '
        }
        let stayMin=rmins%60;
        if(stayMin>0){
          this.time+=stayMin+' minutes';
        }
      }
    }
    else if (this.count > 0) {
      let rmins=2700-this.minutes;
      rmins=rmins/(5-this.count);
      let stayhrs=rmins/60;
      let stayMin=rmins%60;
      this.time = 'Please maintain average of ' + Math.floor(stayhrs)+' Hours '+Math.floor(stayMin)+' Minutes';
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
        ];
        let min=(number-split_time[0])*100;
        let hrs=split_time[0];
      console.log('split_time',split_time,'  minutes ',min);
        this.minutes+=(hrs*60)+min;
      console.log('minutes', this.minutes);
    }
  


  }

}
