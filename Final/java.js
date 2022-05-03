// const form = document.getElementById('form');
// const firstname = document.getElementById('username');
// const middleinitial = document.getElementById('password');

form.addEventListener('button', (e)=>{
    e.preventDefault();
    checkInputs();
});
// function checkInputs() {
//     //get values
//     const usernameVal = username.value.trim();
//     const passwordVal = password.value.trim();
//     let w, x;
//
//     if(usernameVal === ''){
//       setErrorFor(username, 'First name cannot be blank');
//       w=0;
//     }
//     else {
//       setSuccessFor(username);
//       w=1;
//     }
//
//     if(passwordVal === ''){
//       setErrorFor(password, 'Middle initial cannot be blank');
//       x=0;
//     }
//     else {
//       setSuccessFor(password);
//       x=1;
//     }
//     if(w==1&&x==1&&y==1&&z==1){
//       let result = alert("Success! You are now signed up!")};
//
// }
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function getInfo(){
  const uname = document.getElementById("Username");
  const pword = document.getElementById("password");
  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();
  let w, x;

  if(usernameVal ===''&&passwordVal===''){
    setErrorFor(username, 'username cannot be blank');
    setErrorFor(password, 'Password cannot be blank');
  }
  else {
    if(usernameVal ==='admin'&& passwordVal==='admin'){
      setSuccessFor(username);
      setSuccessFor(password);
      alert("Success! You are now signed up!");
      window.location="admin.html";
      w=0;
    }else if (usernameVal ==='student1'&& passwordVal==='1234') {
      setSuccessFor(username);
      setSuccessFor(password);
      alert("Success! You are now signed up!");
      window.location="user.html";
    // }else if (usernameVal ==='teacher1'&& passwordVal==='1234') {
    //   setSuccessFor(username);
    //   setSuccessFor(password);
    //   alert("Success! You are now signed up!");
    //   window.location="teacher.html";
    }else {
      alert("Failed! Wrong Password or Username!");
      setErrorFor(password, '');
      setErrorFor(username, '');
      w=1;
    }
  }
}
function admin(){
  man.style.display='none';
  adminn.style.display='block';
  crs.style.display='none'
  ment.style.display='none';
}
function home(){
  man.style.display='block';
  adminn.style.display='none';
  crs.style.display='none'
  ment.style.display='none';
}
function course(){
  man.style.display='none';
  adminn.style.display='none';
  crs.style.display='block'
  ment.style.display='none';
}
function anou(){
  man.style.display='none';
  adminn.style.display='none';
  crs.style.display='none';
  ment.style.display='block';
}
// function addRow () {
//   document.querySelector('#content').insertAdjacentHTML(
//     'afterbegin',
//         `<div class="row">
//         <table border=1>
//         <tr>
//         <td><input type="text" name="name" value="" placeholder="Student Surname" class="txt" id="asf" disabled/></td>
//         <td><input type="text" name="value" value="" placeholder="Student Name" class="nm"/></td>
//         <td><input type="text" name="value" value="" placeholder="Student M.I." class="mi"/></td>
//         <td><input type="text" name="value" value="" placeholder="Student I.D." class="id"/></td>
//         <td><select class="year">
//                     <option disabled selected>Program</option>
//                   <optgroup label="Alfonso T. Yuchengco College of Business">
//                     <option>Accountancy</option>
//                     <option>Entrepreneurship</option>
//                     <option>Management Accounting</option>
//                     <option>Tourism Management</option>
//                   </optgroup>
//                   <optgroup label="CAS">
//                     <option >Bachelor of Arts in Communication</option>
//                     <option >Bachelor of Multimedia Arts</option>
//                     <option >Bachelor of Science in Biology</option>
//                     <option >Bachelor of Science in Psychology</option>
//                   </optgroup>
//                   <optgroup label="CCIS">
//                     <option >Computer Science</option>
//                     <option >Entertainment and Multimedia Computing</option>
//                     <option >Information Systems</option>
//                   </optgroup>
//                   <optgroup label="CEA">
//                     <option >Architecture</option>
//                     <option >Chemical Engineering</option>
//                     <option >Civil Engineering</option>
//                     <option >Computer Engineering</option>
//                     <option >Electrical Engineering</option>
//                     <option >Electronics Engineering</option>
//                     <option >Industrial Engineering</option>
//                     <option >Mechanical Engineering</option>
//                   </optgroup>
//                 </select></td>
//         <td><select class="year">
//                 <option disabled selected>Year Level</option>
//                 <option value="saab">1st Year</option>
//                 <option value="saab">2nd Year</option>
//                 <option value="saab">3rd Year</option>
//                 <option value="saab">4th Year</option>
//                 <option value="saab">5th Year</option>
//               </optgroup>
//
//             </select></td>
//         </tr>
//         </table>
//         <input type="button" value="X" onclick="removeRow(this)" class="remove"/>
//         </div>`
//   )
// }
function addRows () {
  document.querySelector('#contentt').insertAdjacentHTML(
    'afterbegin',
        `<div class="roww">
        <table border=1>
        <tr>
        <td><input type="text" name="name" value="" placeholder="Course Name" class="crn"/></td>
        <td><input type="text" name="value" value="" placeholder="Course ID" class="crid"/></td>
        <td><input type="text" name="value" value="" placeholder="Instructor" class="in"/></td>
        </tr>
        </table>
        <input type="button" value="X" onclick="removeRow(this)" class="removee"/>
        </div>`
  )
}
function addRowsd () {
  document.querySelector('#contentts').insertAdjacentHTML(
    'afterbegin',
        `<div class="rowws">
        <table border=1>
        <tr>
        <td><input type="text" name="name" value="" placeholder="Course Name" class="nse"/></td>
        </tr>
        </table>
        </div>`
  )
  document.querySelector('#contenter').insertAdjacentHTML(
    'afterbegin',
        `<div class="rowws">
        <table border=1>
        <tr>
        <td><input type="text" name="name" value="" placeholder="Course Name" class="nse"/></td>
        </tr>
        </table>
        </div>`
  )
}
function removeRow (input) {
  input.parentNode.remove()
}
function submit (input){
  alert("Success! Your Announcement will be posted in a minute");
  document.getElementById(input).value = '';
}
