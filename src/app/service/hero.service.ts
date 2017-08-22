import { Injectable } from '@angular/core';
import { Hero } from "../model/hero";
import { HEROES } from "../mock-heroes";
import { Headers,Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HeroService {

    // return heroes with promise.

    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    // }

    // URL to web api
    private heroesUrl: string = "api/heroes";
    // create constructor to use http, to avoid to use new key
    constructor (private http: Http) {}

    getHeroes(): Promise<Hero[]> { // API
        return this.http.get(this.heroesUrl)
                    .toPromise() // convert Observable to a Promise.
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
    private headers = new Headers({'Content-Type': 'application/json'});
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        // body of put() needs content type application/json.
        return this.http.put(url, JSON.stringify(hero),{headers: this.headers})
            .toPromise()
            .then(()=> hero)
            .catch(this.handleError);
    }
    create(name: string): Promise<Hero> {
        return this.http.post(this.heroesUrl,JSON.stringify({name: name}),{headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }
    delete(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url,{headers: this.headers})
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);
    }
}

/* Promise key represents the eventual result of an operation.
u can use a promise to specify what to do when an operation eventually succeeds or fails.
*/