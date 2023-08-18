import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '12';
  data='work with in more depression';
  getName(name:string)
  {
    console.warn(name)
  }
  display :String ='';
  
  getValue(val:string)
  {
    this.display=val;
  }
  count=0;
  getcount(val:string)
  {
    val==='add' ?this.count++:this.count--;
  }

  name="peter"
  val=true;
  show=false
  color='yellow';
  rgb='violet'
  users=['Anil','Shanu','Mithun','Mim','Riaz','Prosenjit']
  users_details=[{name:'Bijoy',phone:'019212112',nationality:'Bangladeshi'},
  {name:'Shanu',phone:'01124534534',nationality:'Bangladeshi'},
  {name:'Riaz',phone:'454542210',nationality:'Bangladeshi'},
  {name:'Mim',phone:'455345343',nationality:'Bangladeshi'}
]

displayColor="red"
backcolor="yellow"
getcolor()
{
  this.displayColor="green"
  this.backcolor="violet"
}

userdata:any={};

getdata(data:any)
{
  console.warn(data)
  this.userdata=data
}

tvalue=true;
toggle()
{
  this.tvalue=!this.tvalue
}
taskvalue =''
list:any[]=[]

adddata(rval:any)
{
 this.list.push({id:this.list.length,name:rval})
}

removedata(id:any)
{
this.list=this.list.filter(item=>item.id!==id)
}

child=10;

}

