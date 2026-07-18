import { useRef, useState } from "react";

import "./Profile.css";


function Profile() {


  const fileInputRef = useRef(null);


  const [profileImage,setProfileImage] = useState(null);



  const handleImageChange = (event)=>{


    const file = event.target.files[0];


    if(file){


      const imageURL = URL.createObjectURL(file);


      setProfileImage(imageURL);


    }


  };





  const openFilePicker = ()=>{


    fileInputRef.current.click();


  };






return (

<div className="profile-page">


<div className="profile-card">


<h1>

👤 My Profile

</h1>




<div className="profile-image-box">


{

profileImage ?


<img

src={profileImage}

alt="Profile"

/>


:


<div className="default-image">

🙂

</div>


}



</div>





<input

type="file"

accept="image/*"

ref={fileInputRef}

onChange={handleImageChange}

style={{
display:"none"
}}

/>





<button

className="upload-btn"

onClick={openFilePicker}

>

📷 Upload Profile Picture

</button>



</div>


</div>

);


}


export default Profile;