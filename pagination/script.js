const cardsPerPage = 4;
const dataContainer = document.getElementById('data-container');
const paginationContainer = document.getElementById('pagination');
const pagination=document.getElementById('pagination');
const prevButton=document.getElementById('prev');
const nextButton=document.getElementById('next');
const pageNumber=document.getElementById('page-numbers');
const pageLinks=document.querySelectorAll('.page-link');

const cards=
Array.from(dataContainer.getElementsByClassName('card'));

const totalPages=Math.ceil(cards.length/cardsPerPage);
let currentPage=1;

function displayPage(page){
    const startIndex=(page-1)*cardsPerPage;
    const endIndex=startIndex+cardsPerPage;
    cards.forEach((card,index)=>{
        if(index>=startIndex && index<endIndex){
            card.style.display='block';
            card.classList.remove('visible');
            requestAnimationFrame(()=>card.classList.add('visible'));
        } else {
            card.classList.remove('visible');
            card.style.display='none';
        }
    });
}

function updatePagination(){
    pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;

    prevButton.classList.toggle('disabled', currentPage === 1);
    prevButton.setAttribute('aria-disabled', currentPage === 1);

    nextButton.classList.toggle('disabled', currentPage === totalPages);
    nextButton.setAttribute('aria-disabled', currentPage === totalPages);

    pageLinks.forEach(link=>{
        const page=parseInt(link.getAttribute('data-page'));
        link.classList.toggle('active', page===currentPage);
    });
}

prevButton.addEventListener('click',(event)=>{
    event.preventDefault();
    if(currentPage>1){
        currentPage--;  
        displayPage(currentPage);
        updatePagination();
    }
});

nextButton.addEventListener('click',(event)=>{
    event.preventDefault();
    if(currentPage<totalPages){
        currentPage++;
        displayPage(currentPage);
        updatePagination();
    }
});

pageLinks.forEach(link=>{
    link.addEventListener('click',(event)=>{
        event.preventDefault();
        const page=parseInt(link.getAttribute('data-page'));
        if(page!==currentPage){
            currentPage=page;
            displayPage(currentPage);
            updatePagination();
        }
    });
});

displayPage(currentPage);
updatePagination();


