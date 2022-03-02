


import './Lista.css'

function Lista({users}) {

return (
    <>
    {users.map((user)=>{ 
    const {name, age, image, id}=user
        return (
            <article className='list_container' key={id}>
               <img className='list_container-img' src= {image}/>
               <div className='list_container-info'> 
                    <h6 className='list_container-name'> {name} </h6>
                    <span className='list_container-age'> {age} </span>  
               </div>
                
            </article>
            
        )
    })}
    </>
)
};

export default Lista;