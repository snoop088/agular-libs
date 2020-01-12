export interface SeSimplSubmenuOptions {
    position: 'top' | 'bottom' | 'left' | 'right';
    animation: 'staggered-fade' | 'staggered-move' | 'staggered-scale' | 'non-staggered' | 'non-animated';
    itemTiming: number;
    itemDelay: number;
    easing: string;
    scaleFrom: number;
    moveFrom: number;
}
