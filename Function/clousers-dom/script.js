const useState = function (initialState) {
    let state = initialState;

    return [
        () => state,
        (value) => {
        state = value;
    },
    ];
};

const products = ['komputer', 'laptop', 'szczota']
const [count, setCount] = useState(0);
const [name, setName,] = useState('');
const [myProducts, setMyProducts] = useState(products)



const countDiv = document.createElement('div');
const nameDiv = document.createElement('div');
const listDiv  = document.createElement('div')
const list = document.createElement('li');


function renderList() {
    document.querySelector('body').appendChild(countDiv);
    document.querySelector('body').appendChild(nameDiv);
    document.querySelector('body').appendChild(listDiv);
    listDiv.appendChild(list);
    listDiv.classList.add('listDiv');
    list.innerHTML = ''
    list.classList.add('list');
    myProducts().forEach(product => {
        const listElement = document.createElement('li');
        listElement.innerText = product
        listElement.classList.add('list-element');
        list.appendChild(listElement);
    })
}

function initialRender(){
    countDiv.classList.add('countDiv');
    nameDiv.classList.add('nameDiv');
    countDiv.innerText = '0';
    nameDiv.innerText = ''
    renderList();

}



function render(){
    countDiv.innerText=`${count()}`
    nameDiv.innerText=`${name()}`
    renderList();

}

document.querySelector('#click').addEventListener('click', () => {
    setCount(count() + 1);
    render()
});

document.querySelector('#reset').addEventListener('click', () => {
    setCount(0);
    setName('');
    setMyProducts(products)
    render()
});
const input = document.querySelector('#name')

input.addEventListener('input', (e) => {
    setName(e.target.value);
    render()
})

document.querySelector('#product').addEventListener('change', (e) => {
    const handleAddProduct = (e) =>{
        setMyProducts([...myProducts(), e.target.value])
        e.target.value = '';
    }
    handleAddProduct(e)
    render()
})

initialRender()