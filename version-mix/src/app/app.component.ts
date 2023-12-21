import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { signal as signal17, computed as computed17, effect as effect17 } from '@angular/core-17'
import { signal as signal16, computed as computed16, effect as effect16 } from '@angular/core-16'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'version-mix';

  count = signal<number>(0)

  map17 = signal17<Map<number, number>>(new Map())
  map17Values = computed17(() => {
    const map17 = this.map17()
    return [...map17.values()]
  })
  map16 = signal16<Map<number, number>>(new Map())
  map16Values = computed16(() => {
    const map16 = this.map16()
    return [...map16.values()]
  })

  list = [
    {
      method: 'version 17',
      values: [
        { type: 'Map', value: this.map17Values },
      ]
    },
    {
      method: 'version 16',
      values: [
        { type: 'Map', value: this.map16Values },
      ]
    }
  ]

  constructor() {
    // effect17(() => {
    //   const count = this.count()
    //   this.map17.update((map17) => map17.set(count, count))
    // }, { allowSignalWrites: true })
    // effect16(() => {
    //   const count = this.count()
    //   this.map16.update((map16) => map16.set(count, count))
    // }, { allowSignalWrites: true })
    this.setCount()
  }

  private setCount() {
    const count = this.count()
    this.map17.update((map17) => map17.set(count, count))
    this.map16.update((map16) => map16.set(count, count))
  }

  onCountUp() {
    this.count.update((count)=> ++count)
    this.setCount()
  }
}
