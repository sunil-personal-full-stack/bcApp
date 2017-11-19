import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[inputpadding]' })

export class InputpaddingDirective {
    public lblWidth: number;
    constructor(
        public eleRef : ElementRef,
        public renderer : Renderer2
    ) {
       setTimeout(() => {
           if(this.eleRef.nativeElement.children.length){
               this.lblWidth = this.eleRef.nativeElement.children[1].offsetWidth;
               this.renderer.setStyle(this.eleRef.nativeElement.children[0],'padding-left',this.lblWidth + 'px');
           }
       }, 200)
     }
}