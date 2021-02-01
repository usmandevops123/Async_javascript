// ---- Getting request form server using XML ----

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', ()=>{
//     console.log(request, request.readyState);

//     if(request.readyState===4 && request.status ===200)
//     {
//         console.log(request);
//         console.log(request.responseText);
//     }
//     else if(request.readyState===4 && request.status ===404)
//     {
//         console.log('Error 404:Not Found');
//     }

// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();

// ---- Getting request form server using Fetch ---- This reduces the line of code and is more popular

// fetch('https://github-readme-stats.vercel.app/api?username=usmandevops123&show_icons=true&theme=radical&title_color=8E2DE2&text_color=fff&icon_color=8E2DE2')
//   .then(response => response.json())
//   .then(response=>console.log(response)) // We can write any thing in place of response here.