import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogPage';

  constructor() { }
  blogs = []
  ngOnInit() {
    this.blogs = JSON.parse(localStorage.getItem("blogs"));
    // console.log(this.blogs);
  }

  removeBloge(blog){
    let index = this.blogs.indexOf(blog)
    this.blogs.splice(index, 1)
    localStorage.setItem("blogs",JSON.stringify(this.blogs))
    alert("Blog Has Been Deleted")
    // console.log(index)
  }



  addBlog(title, content) {
    // console.log(title.value ,content.value);
    let blog = { "title": title.value, "content": content.value };
    if (localStorage.getItem("blogs")) {
      this.blogs = JSON.parse(localStorage.getItem("blogs"))
    }
    // this.blogs.push(blog)
    this.blogs.splice(0,0,blog)         // using splice in the place of puch . To show the latest blog at the top//
    localStorage.setItem("blogs",JSON.stringify(this.blogs))
    title.value = "";
    content.value = "";
    alert("blog submited")
  }

}
