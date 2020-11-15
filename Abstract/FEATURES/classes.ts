export class Vehicle {
  public color: string

  constructor(color: string) {
    this.color = color
  }

  public drive(): void {
    console.log('chugga chugga')
  }

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  public drive(): void {
    console.log('vroom')
  }

  public startDrivingProcess(): void {
    this.honk()
  }
}

const car = new Car(4, 'red')
console.log(car.color)
console.log(car.wheels)
