class Github {

   constructor(){
    this.client_id="ce1a902c741343f64222";
    this.client_secret="371eac28b21f697a9299855c1ad3140ba6fd62ef";
    this.repos_count=5;
    this.repos_sort='created: asc'
   } 

   async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos=await repoResponse.json();

    return {
      profile,
      repos
    }

   }

}