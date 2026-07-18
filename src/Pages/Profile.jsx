import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Profile(){


const { user } = useContext(AuthContext);



return(


<div className="container mt-5">


<div className="card shadow p-4 col-md-6 mx-auto">



<h2 className="text-center mb-4">

👤 My Profile

</h2>



{

user ?


<>


<h5>

Name:

<span className="text-primary">

{" "}{user.name}

</span>

</h5>



<h5>

Email:

<span className="text-primary">

{" "}{user.email}

</span>

</h5>



<h5>

Account Status:

<span className="text-success">

{" "}Active

</span>

</h5>


</>


:


<h4 className="text-danger">

Please Login First

</h4>


}




</div>



</div>


);


}



export default Profile;