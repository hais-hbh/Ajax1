console.log('hello ajax')
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/new.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim());
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const requset = new XMLHttpRequest()
    requset.open('GET', '/new.json')
    requset.onreadystatechange = () => {
        if (requset.readyState === 4 && requset.status === 200) {
            const object = JSON.parse(requset.response)
            myName.textContent = object.name
        }
    }
    requset.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const arr = JSON.parse(request.response)
            arr.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                page.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}
getJS.onclick = () => {
    const requset = new XMLHttpRequest()
    requset.open('GET', '/new.js')
    requset.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = requset.response
        document.body.appendChild(script)
    }
    requset.onerror = () => {
        console.log('失败了');
    }
    requset.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/new.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send()
}
