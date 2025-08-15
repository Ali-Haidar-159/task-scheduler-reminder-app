
        const container = document.getElementById('todoContainer');

        fetch("http://localhost:3000/all_todo" , {
            method : "GET"
        })
        .then(function(r1){
            if(r1.ok)
            {
                return r1.json() ;
            }
            else
            {
                throw new Error("Something error !!!") ;
            }
        })
        .then(function(r2){

            // console.log(r2.data) ;
            let todos  = r2.data ;

            todos.forEach(todo => {

                let now = new Date () ;
                // console.log(now) ;
                const todoDateTime = new Date(`${todo.date}T${todo.time}:00`);

                const card = document.createElement('div');
                card.classList.add('todo-card');

                if(now > todoDateTime){
                        card.classList.add('expired'); 
                }
                
                card.innerHTML = `
                    <div class="todo-id">ID: ${todo._id}</div>
                    <div class="todo-name">${todo.name}</div>
                    <div class="todo-description">${todo.description}</div>
                    <div class="todo-time-date">
                    <span>Time: ${todo.time}</span>
                    <span>Date: ${todo.date}</span>
                    </div>`;

                container.appendChild(card);
        });

        })
        .catch(function(err){
            return err ;
        })