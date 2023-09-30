import React ,{useState,useEffect} from 'react'

function Card() {
    const [user,setUser] = useState([]);


    const Btnhandler=()=>{
alert("Aman");
    }

    const fetchData =()=>{
        fetch("https://dummyjson.com/products")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            var gagan = data.products
            console.log(gagan);
            setUser(gagan)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="clearfix">
        <div className="row">
       <h2 className='allitem'>All Items</h2>
          {user.map(data => (
           
            <div className="col-md-4 animated fadeIn">
           
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
     <br />
                    <img
                      src={data.thumbnail}
                      className="card-img-top image"
                      alt=""
                    />
                    <h4>Title:- {data.title}</h4>
                    <h4>Price:- {data.price}</h4>
                  
                   
                  </div>
                 
                    <br />
                    <button className='button' onClick={Btnhandler}>Add to card</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    )
}

export default Card