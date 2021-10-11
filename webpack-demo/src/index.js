import _ from 'lodash'
import printMe from './print.js'
import { cube } from './math.js'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!')
}

function component() {
    //var element = document.createElement('div')
    var element = document.createElement('pre')
    var btn = document.createElement('button')


    //element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to' + cube(5)
    ].join('\n\n')

    btn.innerHTML = 'jiangzongyu Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
}

//document.body.appendChild(component())
let element = component()
document.body.appendChild(element)


if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!')
        //printMe()
        document.body.removeChild(element)
        element = component()
        document.body.appendChild(element)
    })
}