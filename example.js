const name=document.getElementById('fullname')
const password=document.getElementById('password')
const confirm=document.getElementById('confirmpw')
const form=document.getElementById('form')
const errorEle=document.getElementById('error')
form.addEventListener('submit', (e) =>{
    let messages=[]
    if(name.value==null)
{messages.push('Name is required')}
if(password.value.length<8)
{messages.push('Password must have atleast 8 characters')}
if(password!==confirm)
{
    messages.push('Please enter the same password again')
}
    if(messages.length>0)
    {e.preventDefault()
    errorEle.innerText=messages.join(' & ')}

})