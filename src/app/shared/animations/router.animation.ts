import { trigger, transition, query, style, stagger, animate, group, keyframes, animateChild, sequence } from '@angular/animations';

export const routerAnimation =
    trigger('routerAnimations', [
        transition('* <=> *', [
                query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
                sequence([
                    group([query(':leave', [animateChild()], { optional: true } )]),
                    group([  // block executes in parallel
                        query(':enter', group([
                        style({ transform: 'translateX(100%)' }),
                        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })) ]), { optional: true }),
                        query(':leave', group([ animateChild(),
                        style({ transform: 'translateX(0%)' }),
                        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                        ]), { optional: true }),
                    ]),
                    group([query(':enter', [animateChild()], { optional: true } )]),
                    ])
        ])
    ]);

export const homeTransition =
trigger('homeTransition', [
    transition(':enter', [
      query('.block', style({ opacity: 0 })),
      query('.block', stagger(300, [
        style({ transform: 'translateY(100px)' }),
        animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
      ])),
    ]),
    transition(':leave', [
      query('.block', stagger(300, [
        style({ transform: 'translateY(0px)', opacity: 1 }),
        animate('0.8s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
      ]))
    ])
  ]);
