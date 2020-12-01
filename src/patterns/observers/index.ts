export class Observer {
  observers: Function[]
  constructor() {
    this.observers = []
  }

  subscribe(f: Function) {
    this.observers.push(f)
  }
  unsubscribe(subscriber: Function) {
    this.observers = this.observers.filter(s => s !== subscriber)
  }

  fire<T>(data: T) {
    this.observers.forEach(observer => observer(data))
    console.log(data)
    console.log(this.observers.forEach(f => f.call))
  }
}
