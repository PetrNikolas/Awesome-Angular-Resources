import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, RouterModule],
  standalone: true,
  selector: 'app-home-boxes',
  templateUrl: './home-boxes.component.html',
  styleUrls: ['./home-boxes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBoxesComponent {}
