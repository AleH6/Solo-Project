namespace app.reddit {
  export class RedditController {
    sub;
    host: string = "https://www.reddit.com";
    constructor(
      private $http: ng.IHttpService
    ) {
      this.getSub();
    }
    getSub(){
      this.$http.get("https://www.reddit.com/r/all.json")
        .then((sub) => {
          this.sub = sub.data;
        }).catch((e) => {
          console.log(e);
        });
    }
  }

  RedditController.$inject = ["$http"];
}
export default app.reddit.RedditController;
