const containerTag = document.querySelectorAll('.tab')
const containerDishes = document.querySelectorAll('.container-dishes')

containerTag.forEach((tab)=>{
    tab.addEventListener('click', (e) => {
        const tabName = e.target.dataset.name;

        containerTag.forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active')

        containerDishes.forEach(containerDishes => {
            const dishName = containerDishes.dataset.name;

            if(tabName === dishName){
                containerDishes.classList.add('active')
            }else{
                containerDishes.classList.remove('active')
            }
        })
    })
})
