import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * En knapp i olika varianter.
 */

@Component({
  selector: 'xp-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  /* Variant av knapp, ex. "primary" eller "secondary".
     Primary är standard. */
  @Input() variant: 'primary' | 'secondary' = 'primary'

  @Input() label: string = '';

  /* Visa en ikon från Material Symbols */
  @Input() icon: string | undefined;
}
