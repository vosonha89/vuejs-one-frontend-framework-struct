import { BaseComponentState } from '../../common/types/baseComponentState';
import { ExampleComponent } from './Home.model';

export class HomeProps {
    public pageName?: string;
}

export class HomeState extends BaseComponentState {
    public model: ExampleComponent = new ExampleComponent();

    public async init(): Promise<void> {
        const me = this;
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json();
        console.table(data);
        me.isReady = true;
    }

    public async onMounted(): Promise<void> {
    }
}