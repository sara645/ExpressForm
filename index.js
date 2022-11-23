const { response }= require('express');
const express=require('express');
const app=express();
const https=require('https');
const bodyparsr=require('body-parser');
var fs=require('fs');


var send;

app.use(bodyparsr.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+'/Form.html')
})
app.post("/addr",function(req1,res1){
    var name=req1.body.username;
    var id=req1.body.id;
    var address=req1.body.add;
    var n1=Number(req1.body.num1);
    var n2=Number(req1.body.num2);
    var n3=Number(req1.body.num3);
    var n4=Number(req1.body.num4);
    var n5=Number(req1.body.num5);

    send={
        "name":name,
        "id":id,
        "address":address,
        "n1":n1,
        "n2":n2,
        "n3":n3,
        "n4":n4,
        "n5":n5
    }
    var av=(n1+n2+n3+n4+n5)/5;
    var grade;
    if(av>=90){
        grade='A';
    }
    else if(av>=80){
        grade='B';
    }
    else if(av>=70){
        grade='C';
    }
    else if(av>=60){
       
        grade='D';
    }
    else if(av>=50){
        grade='E';
    }
    else{
        grade='F';
    }
   
    fs.appendFileSync('St1.txt',"Name = "+name+" \nId = "+id+" \n Address = "+address+" \n Marks of subject1 = "+n1+" \n Marks of subject2 = "+n2+" \n Marks of subject3 = "+n3+" \n Marks of subject4 = "+n4+" \n Marks of subject5  = "+n5+" \n Total Marks = "+(n1+n2+n3+n4+n5)+" \n Average Marks = "+(n1+n2+n3+n4+n5)/5+" \n Grade = "+grade+"<br><br>");
    // res1.send("<h3>Name : "+name+"</h3>" + "<h3>ID : "+id+"</h3>" + "<h3>Address : "+address+"</h3> <br>" + "<h3>sub1 : "+n1+"</h3>" + "<h3>sub2 : "+n2+"</h3>" + "<h3>sub3 : "+n3+"</h3>" + "<h3>sub4 : "+n4+"</h3>" + "<h3>sub5 : "+n5+"</h3><br>"+ "<h3>Total Marks : "+(n1+n2+n3+n4+n5)+"</h3>"+ "<h3>Average : "+((n1+n2+n3+n4+n5)/5)+"</h3>" + "<h3>Grade : "+grade+"</h3>");
    fs.readFile('St1.txt',"utf-8",function(err,data){
        if(err) throw err;
        res1.send(data);
    })
    


})

app.listen(9000);