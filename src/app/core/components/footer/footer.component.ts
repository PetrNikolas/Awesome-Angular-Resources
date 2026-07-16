import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContainerComponent } from '@shared/components/container/container.component';

@Component({
  imports: [CommonModule, RouterModule, ContainerComponent],
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
