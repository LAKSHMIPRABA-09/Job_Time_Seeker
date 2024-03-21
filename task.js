const start=document.getElementById("timer-control")
const hr=document.getElementById('hr')
const min=document.getElementById('min')
const sec=document.getElementById('sec')
const task=document.getElementById('task')
const description=document.getElementById('description')
const entries=document.getElementById("entries")
const td1=document.getElementById('td1')
const td2=document.getElementById('td2')
const td3=document.getElementById('td3')
let second=sec.textContent
let minute=min.textContent
let hour=hr.textContent
let intervalId
let entry=[]
start.addEventListener('click',function()
{
    let current=start.textContent
    if(current === "Start")
    {
        start.textContent='Stop'
        current=start.textContent
        start.style.setProperty('background-color','darkred')
        intervalId=setInterval(function()
        {
            second++
            sec.textContent=second.toString().padStart(2,'0')
            if(second == 60)
            {
                second=0
                minute++
                min.textContent=minute.toString().padStart(2,'0')
            }
            if(minute == 60)
            {
                minute=0
                hour++
                hr.textContent=hour.toString().padStart(2,'0')
            }
        },1000)
    }
    else if(current === "Stop")
    {
        
        start.textContent="Start"
        //addentryfunc()
        current=start.textContent
        start.style.setProperty('background-color','green')
        clearInterval(intervalId)
        addentryfunc()
        second=0
        minute=0
        hour=0
        sec.textContent=second.toString().padStart(2,'0')
        min.textContent=minute.toString().padStart(2,'0')
        hr.textContent=hour.toString().padStart(2,'0')
        // const entryval=task.value
        // const entrydes=description.value
        // if(entryval!=="" && entrydes!=="")
        // {
        //     entry.push(entryval)
        //     entry.push(entrydes)
        // }
        // for(let i=0;i<entry.length;i++){
        //     entries.innerHTML+=`<th>${entry[i]}</th>`
            
        // }
        task.value=""
        description.value=""

    }
})
function addentryfunc(){
    entries.innerHTML +=
    `<div class='entry'>
        <div>${task.value}</div>
        <div>${description.value}</div>
        <div>${hr.textContent}:${min.textContent}:${sec.textContent}</div>
    </div>
    `
}

