
const countWebPageElements = (elements) =>{
    // const result = new Map()
    // for (let element of elements){
    //     result.set(element.tagName.toLowerCase(), (result.get(element.tagName.toLowerCase()) || 0) +1)
    // }
    // return result
    const elementsArray = Array.from(elements)
    return elementsArray.reduce((result, element) => {
        const tag = element.tagName.toLowerCase()
        result.set(tag, (result.get(tag) || 0) + 1)
        return result
    }, new Map())

}
const render = () =>{
    const elements = document.querySelectorAll('*')
    const ElementsDiv = document.createElement('div')
    const elementsList = document.createElement('ul')
    const elementsOnPage = countWebPageElements(elements)
    console.log(elementsOnPage)
    elementsOnPage.forEach((count, tag) => {
        const li = document.createElement('li')
        li.textContent = `element ${tag} wystąpił ${count} razy`
        elementsList.appendChild(li)
    })
    ElementsDiv.appendChild(elementsList)
    document.getElementById("main").appendChild(ElementsDiv)


}
render()
