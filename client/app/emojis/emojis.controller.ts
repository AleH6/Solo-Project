namespace app.controllers {
  export class EmojisController{//define the component
    emojis:Array<string>;
    constructor(private $http){
      this.getEmojis();
    }
    getEmojis(){
      this.$http.get("https://api.github.com/emojis")
      .then((emojis) =>{
        this.emojis = Object.keys(emojis.data)
        .map((key,index) => emojis.data[key]);
      })
      .catch((e) =>{
        console.log('no emojis! ${e}')
      })
    }
  }
  EmojisController.$inject = ["$http"];
}
export default app.controllers.EmojisController;
