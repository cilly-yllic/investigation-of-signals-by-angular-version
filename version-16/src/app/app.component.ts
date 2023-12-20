import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'version-16';

  count = signal<number>(0)

  updatedMap = signal<Map<number, number>>(new Map())
  updatedMapValues = computed(() => {
    const updatedMap = this.updatedMap()
    return [...updatedMap.values()]
  })
  setMap = signal<Map<number, number>>(new Map())
  setMapValues = computed(() => {
    const setMap = this.setMap()
    return [...setMap.values()]
  })

  updatedReplaceMap = signal<Map<number, number>>(new Map())
  updatedReplaceMapValues = computed(() => {
    const updatedReplaceMap = this.updatedReplaceMap()
    return [...updatedReplaceMap.values()]
  })
  setReplaceMap = signal<Map<number, number>>(new Map())
  setReplaceMapValues = computed(() => {
    const setReplaceMap = this.setReplaceMap()
    return [...setReplaceMap.values()]
  })

  updateObj = signal<{ [key: number]: number }>({})
  updatedObjValues = computed(() => {
    const updateObj = this.updateObj()
    return Object.values(updateObj)
  })
  setObj = signal<{ [key: number]: number }>({})
  setObjValues = computed(() => {
    const setObj = this.setObj()
    return Object.values(setObj)
  })

  updateReplaceObj = signal<{ [key: number]: number }>({})
  updatedReplaceObjValues = computed(() => {
    const updateReplaceObj = this.updateReplaceObj()
    return Object.values(updateReplaceObj)
  })
  setReplaceObj = signal<{ [key: number]: number }>({})
  setReplaceObjValues = computed(() => {
    const setReplaceObj = this.setReplaceObj()
    return Object.values(setReplaceObj)
  })

  updatedSet = signal<Set<number>>(new Set())
  updatedSetValues = computed(() => {
    const updatedSet = this.updatedSet()
    return [...updatedSet.values()]
  })
  setSet = signal<Set<number>>(new Set())
  setSetValues = computed(() => {
    const setSet = this.setSet()
    return [...setSet.values()]
  })

  updatedReplaceSet = signal<Set<number>>(new Set())
  updatedReplaceSetValues = computed(() => {
    const updatedReplaceSet = this.updatedReplaceSet()
    return [...updatedReplaceSet.values()]
  })
  setReplaceSet = signal<Set<number>>(new Set())
  setReplaceSetValues = computed(() => {
    const setReplaceSet = this.setReplaceSet()
    return [...setReplaceSet.values()]
  })

  updatedList = signal<number[]>([])
  updatedListSpreadValues = computed(() => {
    return [...this.updatedList().values()]
  })
  updatedListValues = computed(() => {
    return this.updatedList()
  })
  setList = signal<number[]>([])
  setListSpreadValues = computed(() => {
    const setList = this.setList()
    return [...this.setList().values()]
  })
  setListValues = computed(() => {
    const setList = this.setList()
    return this.setList()
  })

  updatedReplaceList = signal<number[]>([])
  updatedReplaceListValues = computed(() => {
    return this.updatedReplaceList()
  })
  setReplaceList = signal<number[]>([])
  setReplaceListValues = computed(() => {
    return this.setReplaceList()
  })

  list = [
    {
      method: 'update',
      values: [
        { type: 'Map', value: this.updatedMapValues },
        { type: 'Replace Map', value: this.updatedReplaceMapValues },
        { type: 'Obj', value: this.updatedObjValues },
        { type: 'Replace Obj', value: this.updatedReplaceObjValues },
        { type: 'Set', value: this.updatedSetValues },
        { type: 'Replace Set', value: this.updatedReplaceSetValues },
        { type: 'Spread Syntax List', value: this.updatedListSpreadValues },
        { type: 'List', value: this.updatedListValues },
        { type: 'Replace List', value: this.updatedReplaceListValues },
      ]
    },
    {
      method: 'set',
      values: [
        { type: 'Map', value: this.setMapValues },
        { type: 'Replace Map', value: this.setReplaceMapValues },
        { type: 'Obj', value: this.setObjValues },
        { type: 'Replace Obj', value: this.setReplaceObjValues },
        { type: 'Set', value: this.setSetValues },
        { type: 'Replace Set', value: this.setReplaceSetValues },
        { type: 'Spread Syntax List', value: this.setListSpreadValues },
        { type: 'List', value: this.setListValues },
        { type: 'Replace List', value: this.setReplaceListValues },
      ]
    }
  ]

  constructor() {
    effect(() => {
      const count = this.count()
      this.updatedMap.update((updatedMap) => updatedMap.set(count, count))
      this.updatedReplaceMap.update((updatedReplaceMap) => {
        updatedReplaceMap.set(count, count)
        return new Map(updatedReplaceMap)
      })
      this.updateObj.update((updateObj) => {
        updateObj[count] = count
        return updateObj
      })
      this.updateReplaceObj.update((updateReplaceObj) => {
        updateReplaceObj[count] = count
        return { ...updateReplaceObj }
      })
      this.updatedSet.update((updatedSet) => updatedSet.add(count))
      this.updatedReplaceSet.update((updatedReplaceSet) => {
        updatedReplaceSet.add(count)
        return new Set(updatedReplaceSet)
      })
      this.updatedList.update((updatedList) => {
        updatedList.push(count)
        return updatedList
      })
      this.updatedReplaceList.update((updatedReplaceList) => {
        updatedReplaceList.push(count)
        return [...updatedReplaceList]
      })
    }, { allowSignalWrites: true })
    this.setCount()
  }

  private setCount() {
    const count = this.count()
    const setMap = this.setMap()
    setMap.set(count, count)
    this.setMap.set(setMap)

    const setReplaceMap = this.setReplaceMap()
    setReplaceMap.set(count, count)
    this.setReplaceMap.set(new Map(setReplaceMap))

    const setObj = this.setObj()
    setObj[count] = count
    this.setObj.set(setObj)

    const setReplaceObj = this.setReplaceObj()
    setReplaceObj[count] = count
    this.setReplaceObj.set({ ...setReplaceObj })

    const setSet = this.setSet()
    setSet.add(count)
    this.setSet.set(setSet)

    const setReplaceSet = this.setReplaceSet()
    setReplaceSet.add(count)
    this.setReplaceSet.set(new Set(setReplaceSet))

    const setList = this.setList()
    setList.push(count)
    this.setList.set(setList)

    const setReplaceList = this.setReplaceList()
    setReplaceList.push(count)
    this.setReplaceList.set([...setReplaceList])
  }

  onCountUp() {
    this.count.update((count)=> ++count)
    this.setCount()
  }
}
