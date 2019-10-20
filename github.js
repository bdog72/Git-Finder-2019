//
//

class Github {
  constructor() {
    this.client_id = "3c7f6b3db67b6565312b";
    this.client_secret = "7fc3bbb1fc66449594a12585486165344a7ed92b";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
