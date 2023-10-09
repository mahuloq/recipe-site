import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This Is Simply A Test',
      'https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-1-.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This Is Simply A Test',
      'https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-1-.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
