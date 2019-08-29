function madeCellPhone (name,color,ImeiNo,price,body) {
   
   return { 
    name: name,
    color: color,
    ImeiNo: ImeiNo,
    price: price,
    body : body,

    bio: function() {
        console.log (`${this.name} ${this.color} ${this.ImeiNo} ${this.price} ${this.body}`)

    }
   }
    
   
 

}
let phone = madeCellPhone ("Nokia","black",87817,25000,"metallic");
console.log(phone);



function laptop (companyName,color,modelNo,configiration,price,body) {
   
   return { 
    Companyname: companyName,
    color: color,
    modelNo: modelNo,
	configiration: configiration,
    price: price,
    body : body,

    bio: function() {
        console.log (`${this.companyName} ${this.color} ${this.modelNo} ${this.configiration} ${this.price} ${this.body}`)

    }
   }
    
   
 

}
let laptop1 = laptop ("HP","black","MD-713178","Ram 1GB, HD 1 Tb ",25000,"white");
console.log(laptop1);



function institute (instituteName,teacherName,course,duration,fees,address) {
   
   return { 
    instituteName: instituteName,
    teacherName: teacherName,
    course: course,
	duration: duration,
    fees: fees,
    address : address,

    bio: function() {
        console.log (`${this.instituteName} ${this.techaerName} ${this.course} ${this.duration} ${this.fees} ${this.address}`)

    }
   }
    
   
 

}
let institute1 = institute ("Tech karo","Sara Ahmed","Web Development","10 months",500,"Unversity Road");
console.log(institute1);