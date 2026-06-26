import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  imports: [CommonModule, SharedModule],
  standalone: true,
  selector: 'app-home-boxes',
  templateUrl: './home-boxes.component.html',
  styleUrls: ['./home-boxes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBoxesComponent {}
