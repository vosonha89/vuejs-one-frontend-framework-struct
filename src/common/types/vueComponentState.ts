import { ComponentState } from 'one-frontend-framework';

export abstract class VueComponentState extends ComponentState {
    /**
     * App on mounted
     */
    abstract onMounted(): void;
}