class Car {
 constructor(name) {
   this.brand = name;
 }

 present() {
   return 'I have a ' + this.brand;
 }
 showcar = () => 'My Car ' + this.brand;
}

class Model extends Car {
 constructor(name, mod) {
   super(name);
   this.model = mod;
 }  
 show() {
     return this.present() + ', it is a ' + this.model
 }

 hello = (val) => "Hello " + val;
}


export default Car;