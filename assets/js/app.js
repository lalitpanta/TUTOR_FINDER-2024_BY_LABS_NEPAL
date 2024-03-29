document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = form.querySelector('input[name="email"]').value.trim();
        const password = form.querySelector('input[name="password"]').value.trim();

    


        if (email && password) {
            const formDataObject = { email, password };
const data = {
  email: 'email',
  password: 'password'
};
            fetch('http://localhost:4000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                
                body: JSON.stringify(formDataObject),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                    alert('please try again......!')
                }
                return response.json(); 
            })
            .then(data => {
                console.log('Data posted successfully:', data);
                openDashboard(data); 
    
                form.reset();
                alert('login successful');

            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                
                alert('incorrect password or email.');
            });
        } else {

            alert('Please provide both email and password.');
            
        }
    });


    function openDashboard(data) {
        const encodedData = btoa(JSON.stringify(data));
        window.location.href = `/public/src/student_dashboard/student.html?data=${encodedData}`;

    }
});





document.addEventListener('DOMContentLoaded', function () {
    const aboutUsLink = document.querySelector('#about');

    aboutUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        
       
        window.location.href = '/public/pages/about/Aboutus.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('btn');
    loginButton.addEventListener('click', function() {
       
    });
});




      