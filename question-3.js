// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try {
      const userPost = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await userPost.json();
  
      const dataNames = users 
        .map(user => user.name) //แปลงข้อมูลจาก server
        .filter(name => name.length > 17) //ชื่อที่มีความยาวตัวอักษรมากกว่า 17 ตัว
  
      console.log(dataNames);
    } catch (error) {
      console.log(error);
    }
  }
  
  getUsers();
  