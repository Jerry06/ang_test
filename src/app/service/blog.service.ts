import { Injectable } from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Blog } from '../model/blog';
import {PaginationPage, PaginationPropertySort} from "../model/pagination";

@Injectable()
export class BlogService{
  private baseUrl: string = 'http://localhost:8080';

  constructor(private http : Http){
  }

  getPage(page: number, pageSize: number, sort: PaginationPropertySort): Observable<PaginationPage<Blog>>{
    let params = new URLSearchParams();
    params.set('size', `${pageSize}`);
    params.set('page', `${page}`);
    if (sort != null) {
      params.set('sort', `${sort.property},${sort.direction}`);
    }

    let options = new RequestOptions({
      search: params,
    });
    options.headers = this.getHeaders();
    //return this.http.get(`${webServiceEndpoint}/person`, options).map(this.extractData).publish().refCount();

    let people$ = this.http
      .get(`${this.baseUrl}/blog`, options)
      .map(mapBlogs)
      .catch(handleError);
    return people$;
  }

  getAll(): Observable<PaginationPage<Blog>>{
    let people$ = this.http
      .get(`${this.baseUrl}/blog`, {headers: this.getHeaders()})
      .map(mapBlogs)
      .catch(handleError);
      return people$;
  }

  get(id: string): Observable<Blog> {
    let Blog$ = this.http
      .get(`${this.baseUrl}/blog/${id}`, {headers: this.getHeaders()})
      .map(mapBlog);
      return Blog$;
  }

  save(Blog: Blog) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this.http
      .put(`${this.baseUrl}/blog/${Blog.id}`, JSON.stringify(Blog), {headers: this.getHeaders()});
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapBlogs(response:Response): PaginationPage<Blog>{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results

  let json = response.json();
  let result : PaginationPage<Blog> = Object.assign( new PaginationPage<Blog>(), json );

   return result;
}


// to avoid breaking the rest of our app
// I extract the id from the Blog url
function extractId(BlogData:any){
  let extractedId = BlogData.url.replace('http://localhost:8080/blog/','').replace('/','');
  return parseInt(extractedId);
}

function mapBlog(response:Response): Blog{
  // toBlog looks just like in the previous example
  let result : Blog = Object.assign( new Blog(), response.json() );
  return result;
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
