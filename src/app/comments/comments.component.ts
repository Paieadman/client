import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../dto/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  numbers: number[] = [];

  constructor(private http: HttpClient) {
  }

  private comments: Comment[];

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      this.numbers.push(i);
    }

    this.http.get('http://localhost:8080/comments').subscribe((description: Comment[]) => {

      this.comments = description;
    });
  }

  addComment(name: string, text: string) {

    this.http.post('http://localhost:8080/comments/add', new Comment(0, name, text));
  }

}
