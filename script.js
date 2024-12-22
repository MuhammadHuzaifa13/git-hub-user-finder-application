const input = document.getElementById("input")
const avatarurl = document.getElementById('avatarurl')
const userinfo = document.getElementById('userinfo')

const search = async()=>{

userinfo.innerHTML = `<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div`
avatarurl.innerHTML = " "

const API_URL = `https://api.github.com/users/${input.value}` 
const fetchData = await fetch(API_URL)
const response = await fetchData.json()

if(response.status == "404"){

    userinfo.innerHTML = response.message
    avatarurl.innerHTML = " "
}else{


    

    
console.log(response);

avatarurl.innerHTML = `<img src="${response.avatar_url}">`
userinfo.innerHTML = `

    <h4 >${response.name}</h4>
            <h6 class="username">${response.login}</h6>
            <p class="bio">${response.bio}</p>
                <br>
                <div class="colmdiv  ">
                    <span>Repos <br><span>${response.public_repos}</span></span>
                    <span>Followers <br><span>${response.followers}</span></span>
                    <span>Following <br><span>${response.following}</span></span>
                </div>
                <br>
                <div class="others">
                    <div class="otherchild1">
                        <img src="./sm_5b012515569cc-removebg-preview.png" alt=""> &nbsp;<small>Joined at ${response.created_at}</small><br>
                        <img src="./9d3a9a0b913e1c02927ef8ab6a6177e6-removebg-preview.png" alt="">&nbsp; <small>${response.location}</small>
                    </div>
                    <div class="otherchild2">
                        <img src="./images-removebg-preview (1).png" alt=""> &nbsp;<small>${response.twitter_username}</small><br>
                        <img src="./png-transparent-bird-tweet-twitter-twitter-logo-social-media-icon-thumbnail-removebg-preview-removebg-preview.png" alt=""> &nbsp;<small>${response.blog}</small>
                    </div>

                </div>
`
}

}