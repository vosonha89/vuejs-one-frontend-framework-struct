import { HelloWorldModel } from './HelloWorld.model';

export class HelloWorldProps  {
    public name = '';
    public msg = '';
}

export class HelloWorldState {
    public model: HelloWorldModel = new HelloWorldModel();

    public async init(): Promise<void> {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        console.table(data);
    }

    public onMounted(): void {
    }
}