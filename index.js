// cmd shift l for all / cmd d for next
// test

let myLeads = []
// myLeads = JSON.parse(myLeads) // to array
// myLeads.push("www.redtube.com") 
// myLeads = JSON.stringify(myLeads) // back to string
// console.log(typeof myLeads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
let ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.wp.pl"}
// ]

tabBtn.addEventListener("click", function() {
    // console.log(tabs[0].url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })   
})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // same effect:
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        // listItems += "<li><a target='_blank' href='https://" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='https://${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// localStorage.setItem("myName", "Adrian")
// let name = localStorage.getItem("myName")
// console.log(name)
// localStorage.clear()

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    // console.log(localStorage.getItem("myLeads"))
})



// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thanks you for buying!</p>"
// }

// let boxEl = document.getElementById("box")

// boxEl.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })

// const recipient = "Karolina"
// const sender = "Adrian"
// const email = `
// Hey ${recipient}! 

// How is it going? 

// Cheers ${sender}
// `

// console.log(email)