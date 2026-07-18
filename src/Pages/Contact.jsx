import { useRef, useState } from "react";


function Contact(){


const nameRef = useRef();

const emailRef = useRef();

const phoneRef = useRef();

const messageRef = useRef();



const [error,setError] = useState("");

const [success,setSuccess] = useState("");





const handleSubmit=(e)=>{


e.preventDefault();



setError("");

setSuccess("");



const name = nameRef.current.value;

const email = emailRef.current.value;

const phone = phoneRef.current.value;

const message = messageRef.current.value;





if(!name){


setError("Name is required");

return;


}




if(!email){


setError("Email is required");

return;


}





if(!phone){


setError("Phone number is required");

return;


}





if(phone.length !== 10){


setError("Enter valid 10 digit phone number");

return;


}





if(!message){


setError("Message is required");

return;


}







setSuccess(

"Message sent successfully"

);




// Clear Form

nameRef.current.value="";

emailRef.current.value="";

phoneRef.current.value="";

messageRef.current.value="";



};







return(



<div className="container mt-5">



<div className="col-md-6 mx-auto">



<div className="card shadow p-4">



<h2 className="text-center mb-4">

📩 Contact Us

</h2>





{
error &&

<div className="alert alert-danger">

{error}

</div>

}






{
success &&

<div className="alert alert-success">

{success}

</div>

}







<form onSubmit={handleSubmit}>



<input


ref={nameRef}

className="form-control mb-3"

type="text"

placeholder="Name"


/>







<input


ref={emailRef}

className="form-control mb-3"

type="email"

placeholder="Email"


/>








<input


ref={phoneRef}

className="form-control mb-3"

type="number"

placeholder="Phone Number"


/>







<textarea


ref={messageRef}

className="form-control mb-3"

rows="4"

placeholder="Message"


></textarea>







<button


className="btn btn-success w-100"


>


Send Message


</button>






</form>




</div>



</div>



</div>



);



}



export default Contact;