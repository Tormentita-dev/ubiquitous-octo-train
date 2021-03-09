import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {
  private username: string;
  private client_id: "5f52aa6c3062db18b42b";
  private client_secret:"c1e85202af8c6cc5d7d2f2f72dfa9476a48e239c";
  
  constructor(private _http: Http) {}

  getUser() {
    return this._http
      .get("http://api.github.com/users/" + this.username + '?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map((res) => res.json());
  }

  getRepos() {
    return this._http
      .get("http://api.github.com/users/" + this.username + "/repos" + '?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map((res) => res.json());
  }

  updateUser(username){
    this.username = username;
  }
}
