// this needs to have a function that makes a fetch request to the '/myreviews/${{user_id}}' endpoint that then displays the data to the user. Check profile.js from the mini project W14.

const findMyReviews = async (event) =>{
    event.preventDefault();
    console.log('findMyReviews is hitting in myreviews.js');
    const user_id = req.session.user_id;
    const response = await fetch(`/api/reviews/${user_id}`)
    
    if(response.ok){
        document.location.replace('/myreviews')

    }else{
        window.location.replace('/login');
        alert('Please Login to view your Reviews.')
    };

};

document
    .querySelector('#my-reviews')
    .addEventListener('click', findMyReviews);